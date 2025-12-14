'use client'

import { useEffect, useRef } from 'react'

interface Competitor {
  id: string
  x_score: number
  y_score: number
  color: string
}

interface StrategicGroupMapProps {
  data: Competitor[]
  xAxisLabel: string
  yAxisLabel: string
  company: string
}

export default function StrategicGroupMap({ data, xAxisLabel, yAxisLabel, company }: StrategicGroupMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !data || data.length === 0) return

    import('d3').then((d3) => {
      const container = d3.select(containerRef.current)
      container.html('')

      const width = container.node()?.getBoundingClientRect().width || 800
      const height = 600
      const margin = { top: 40, right: 40, bottom: 60, left: 60 }

      const svg = container
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`)

      const numCols = 10
      const numRows = 10
      const cellWidth = (width - margin.left - margin.right) / numCols
      const cellHeight = (height - margin.top - margin.bottom) / numRows

      const xScale = d3.scaleLinear().domain([0, 10]).range([margin.left, width - margin.right])
      const yScale = d3.scaleLinear().domain([0, 10]).range([height - margin.bottom, margin.top])

      // Axes
      svg.append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(xScale))
        .append('text')
        .attr('x', width / 2)
        .attr('y', 40)
        .attr('fill', '#6B7280')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .text(xAxisLabel)

      svg.append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', -40)
        .attr('x', -height / 2)
        .attr('fill', '#6B7280')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .text(yAxisLabel)

      // Helper function for text color
      function getTextColor(hexColor: string) {
        if (!hexColor) return '#333'
        const r = parseInt(hexColor.substr(1, 2), 16)
        const g = parseInt(hexColor.substr(3, 2), 16)
        const b = parseInt(hexColor.substr(5, 2), 16)
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b)
        return luminance > 128 ? '#333333' : '#FFFFFF'
      }

      // Place competitors
      const occupiedCells = new Set()
      const sortedData = [...data].sort((a, b) => b.y_score - a.y_score)

      sortedData.forEach((d: any) => {
        const targetCol = Math.min(numCols - 1, Math.max(0, Math.floor(d.x_score)))
        const targetRow = Math.min(numRows - 1, Math.max(0, Math.floor(10 - d.y_score)))
        let finalCol, finalRow
        let found = false
        let radius = 0
        while (!found) {
          for (let i = -radius; i <= radius; i++) {
            for (let j = -radius; j <= radius; j++) {
              if (Math.abs(i) !== radius && Math.abs(j) !== radius) continue
              const checkCol = targetCol + i
              const checkRow = targetRow + j
              const key = `${checkCol},${checkRow}`
              if (checkCol >= 0 && checkCol < numCols && checkRow >= 0 && checkRow < numRows && !occupiedCells.has(key)) {
                finalCol = checkCol
                finalRow = checkRow
                occupiedCells.add(key)
                found = true
                break
              }
            }
            if (found) break
          }
          radius++
        }
        d.finalCol = finalCol
        d.finalRow = finalRow
      })

      // Text wrapping function
      function wrap(text: any, width: number) {
        text.each(function(this: any) {
          const textEl = d3.select(this)
          const words = textEl.text().split(/\s+/).reverse()
          let word
          let line: string[] = []
          let lineNumber = 0
          const lineHeight = 1.1
          const fontSize = 11
          let tspan = textEl.text(null).append('tspan').attr('x', 0)

          while (word = words.pop()) {
            line.push(word)
            tspan.text(line.join(' '))
            if ((tspan.node() as SVGTSpanElement).getComputedTextLength() > width) {
              line.pop()
              tspan.text(line.join(' '))
              line = [word]
              tspan = textEl.append('tspan').attr('x', 0).attr('dy', lineHeight + 'em').text(word)
              lineNumber++
            }
          }
          const numLines = lineNumber + 1
          const totalTextHeight = numLines * fontSize * lineHeight
          const initialYOffset = -(totalTextHeight / 2) + (fontSize / 1.5)
          textEl.attr('y', initialYOffset)
        })
      }

      const node = svg.selectAll('g.node')
        .data(sortedData)
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', (d: any) => `translate(${xScale(d.finalCol + 0.5)}, ${yScale(numRows - d.finalRow - 0.5)})`)

      node.append('rect')
        .attr('width', cellWidth - 4)
        .attr('height', cellHeight - 4)
        .attr('x', -(cellWidth - 4) / 2)
        .attr('y', -(cellHeight - 4) / 2)
        .attr('rx', 5)
        .attr('ry', 5)
        .style('fill', (d: any) => d.color)
        .style('stroke', (d: any) => d.id === company ? '#00D4FF' : 'none')
        .style('stroke-width', (d: any) => d.id === company ? 3 : 0)

      node.append('text')
        .text((d: any) => d.id)
        .style('font-size', '11px')
        .style('fill', (d: any) => getTextColor(d.color))
        .style('text-anchor', 'middle')
        .call(wrap, cellWidth - 12)
    }).catch(console.error)
  }, [data, xAxisLabel, yAxisLabel, company])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', minHeight: '600px', fontFamily: 'sans-serif' }}
    />
  )
}

