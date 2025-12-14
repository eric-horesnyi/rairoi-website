'use client'

import { useEffect, useRef } from 'react'

interface Initiative {
  id: string
  roi: number
  complexity: number
  value: number
  color: string
}

interface ROIBubbleChartProps {
  data: Initiative[]
  company: string
  highlightInitiative?: string
}

export default function ROIBubbleChart({ data, company, highlightInitiative }: ROIBubbleChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !data || data.length === 0) return

    // Dynamically import D3
    import('d3').then((d3) => {
      const container = d3.select(containerRef.current)
      container.html('')

      const width = container.node()?.getBoundingClientRect().width || 800
      const height = 600
      const margin = { top: 60, right: 60, bottom: 60, left: 80 }

      const svg = container
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      const clipId = `chart-area-clip-${company.replace(/\s+/g, '-')}`
      svg
        .append('defs')
        .append('clipPath')
        .attr('id', clipId)
        .append('rect')
        .attr('x', margin.left)
        .attr('y', margin.top)
        .attr('width', width - margin.left - margin.right)
        .attr('height', height - margin.top - margin.bottom)

      const maxComplexity = Math.max(...data.map(d => d.complexity))
      const xScale = d3.scaleLinear()
        .domain([0, Math.max(5, maxComplexity + 1)])
        .range([margin.left, width - margin.right])

      const roiValues = data.map(d => d.roi)
      const yMinDomain = Math.max(0.1, Math.min(...roiValues) * 0.9)
      const yMaxDomain = Math.max(...roiValues) * 1.1
      const yScale = d3.scaleLog()
        .domain([yMinDomain, yMaxDomain])
        .range([height - margin.bottom, margin.top])

      const valueExtent = d3.extent(data, d => d.value) as [number, number]
      const radiusScale = d3.scaleLog()
        .domain(valueExtent)
        .range([15, 60])

      // Axes
      svg
        .append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(xScale))
        .append('text')
        .attr('x', width / 2)
        .attr('y', 40)
        .attr('fill', '#6B7280')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('Implementation Complexity')

      svg
        .append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', -50)
        .attr('x', -height / 2)
        .attr('fill', '#6B7280')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('ROI Factor')

      // Prepare nodes
      const nodes = data.map(d => ({
        ...d,
        radius: radiusScale(d.value),
        x: xScale(d.complexity),
        y: yScale(d.roi),
      }))

      // Force simulation for better layout
      const simulation = d3.forceSimulation(nodes as any)
        .force('x', d3.forceX((d: any) => xScale(d.complexity)).strength(0.5))
        .force('y', d3.forceY((d: any) => yScale(d.roi)).strength(0.5))
        .force('collide', d3.forceCollide((d: any) => d.radius + 5).strength(1))
        .stop()

      for (let i = 0; i < 200; ++i) simulation.tick()

      // Constrain nodes to chart area
      nodes.forEach((node: any) => {
        node.x = Math.max(
          margin.left + node.radius,
          Math.min(width - margin.right - node.radius, node.x)
        )
        node.y = Math.max(
          margin.top + node.radius,
          Math.min(height - margin.bottom - node.radius, node.y)
        )
      })

      const nodeGroup = svg
        .append('g')
        .attr('clip-path', `url(#${clipId})`)

      const node = nodeGroup
        .selectAll('g')
        .data(nodes)
        .enter()
        .append('g')
        .attr('transform', (d: any) => `translate(${d.x}, ${d.y})`)
        .style('cursor', 'pointer')

      node
        .append('circle')
        .attr('r', (d: any) => d.radius)
        .attr('fill', (d: any) => d.color)
        .attr('opacity', (d: any) => d.id === highlightInitiative ? 0.9 : 0.7)
        .attr('stroke', (d: any) => d.id === highlightInitiative ? '#00D4FF' : 'none')
        .attr('stroke-width', (d: any) => d.id === highlightInitiative ? 3 : 1)

      // Add labels
      node.each(function (d: any) {
        const text = d3.select(this)
          .append('text')
          .attr('text-anchor', 'middle')
          .style('font-size', '11px')
          .style('pointer-events', 'none')
          .style('fill', '#1F2937')
          .style('font-weight', d.id === highlightInitiative ? 'bold' : 'normal')

        const words = d.id.split(/\s+/)
        if (words.length > 2) {
          text.append('tspan')
            .attr('x', 0)
            .attr('y', -d.radius / 2)
            .text(words.slice(0, Math.ceil(words.length / 2)).join(' '))
          text.append('tspan')
            .attr('x', 0)
            .attr('y', -d.radius / 2 + 14)
            .text(words.slice(Math.ceil(words.length / 2)).join(' '))
        } else {
          text.append('tspan')
            .attr('x', 0)
            .attr('y', 4)
            .text(d.id)
        }
      })

      // Tooltip
      const tooltip = d3.select('body')
        .append('div')
        .style('position', 'absolute')
        .style('padding', '10px')
        .style('background', '#0A1929')
        .style('color', '#00D4FF')
        .style('border', '1px solid #00D4FF')
        .style('border-radius', '4px')
        .style('pointer-events', 'none')
        .style('opacity', 0)
        .style('font-size', '12px')
        .style('z-index', '1000')

      node
        .on('mouseover', function (event, d: any) {
          tooltip
            .style('opacity', 1)
            .html(`
              <strong>${d.id}</strong><br/>
              ROI: ${d.roi.toFixed(1)}x<br/>
              Complexity: ${d.complexity.toFixed(1)}<br/>
              Value: €${(d.value / 1000000).toFixed(1)}M
            `)
        })
        .on('mousemove', function (event) {
          tooltip
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 10) + 'px')
        })
        .on('mouseout', function () {
          tooltip.style('opacity', 0)
        })

      return () => {
        tooltip.remove()
      }
    }).catch(console.error)
  }, [data, company, highlightInitiative])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', minHeight: '600px', position: 'relative', fontFamily: 'sans-serif' }}
    />
  )
}

