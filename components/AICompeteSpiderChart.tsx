'use client'

import { useEffect, useRef } from 'react'

interface Rating {
  axis: string
  value: number
}

interface CompanyData {
  name: string
  color: string
  ratings: Rating[]
}

interface AICompeteSpiderChartProps {
  data: CompanyData[]
}

export default function AICompeteSpiderChart({ data }: AICompeteSpiderChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !data || data.length === 0) return

    import('d3').then((d3) => {
      const container = d3.select(containerRef.current)
      container.html('')

      const width = 600
      const height = 600
      const margin = 80
      const radius = Math.min(width, height) / 2 - margin

      const svg = container
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)

      const axes = data[0]?.ratings.map(r => r.axis) || []
      const angleSlice = (Math.PI * 2) / axes.length

      // Scale for values (1-5)
      const rScale = d3.scaleLinear()
        .domain([0, 5])
        .range([0, radius])

      // Draw grid circles
      for (let i = 1; i <= 5; i++) {
        svg.append('circle')
          .attr('r', rScale(i))
          .attr('fill', 'none')
          .attr('stroke', '#e0e0e0')
          .attr('stroke-width', 1)
      }

      // Draw axes
      axes.forEach((axis, i) => {
        const angle = i * angleSlice - Math.PI / 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        // Axis line
        svg.append('line')
          .attr('x1', 0)
          .attr('y1', 0)
          .attr('x2', x)
          .attr('y2', y)
          .attr('stroke', '#ccc')
          .attr('stroke-width', 1)

        // Axis label
        svg.append('text')
          .attr('x', Math.cos(angle) * (radius + 20))
          .attr('y', Math.sin(angle) * (radius + 20))
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .style('font-size', '12px')
          .style('fill', '#333')
          .text(axis)
      })

      // Draw data for each company
      data.forEach((company) => {
        const line = d3.lineRadial()
          .angle((d: any, i: number) => i * angleSlice - Math.PI / 2)
          .radius((d: any) => rScale(d.value))
          .curve(d3.curveLinearClosed)

        const points = company.ratings.map(r => ({ value: r.value }))

        // Draw area
        svg.append('path')
          .datum(points)
          .attr('d', line as any)
          .attr('fill', company.color)
          .attr('fill-opacity', 0.2)
          .attr('stroke', company.color)
          .attr('stroke-width', 2)

        // Draw points
        company.ratings.forEach((rating, i) => {
          const angle = i * angleSlice - Math.PI / 2
          const r = rScale(rating.value)
          const x = Math.cos(angle) * r
          const y = Math.sin(angle) * r

          svg.append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 4)
            .attr('fill', company.color)
            .attr('stroke', '#fff')
            .attr('stroke-width', 1)
        })
      })

      // No legend - chart is anonymized
    }).catch(console.error)
  }, [data])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', minHeight: '600px', position: 'relative', fontFamily: 'sans-serif' }}
    />
  )
}

