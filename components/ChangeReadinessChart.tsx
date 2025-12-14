'use client'

import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'

interface ReadinessData {
  group: string
  value: number
}

interface ChangeReadinessChartProps {
  companyName: string
  narrative: string
  data: ReadinessData[]
  overallScore: number
}

const ChangeReadinessChart: React.FC<ChangeReadinessChartProps> = ({ companyName, narrative, data, overallScore }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !containerRef.current || !data || data.length === 0) return

    const container = d3.select(containerRef.current)
    container.html('') // Clear previous chart

    const width = containerRef.current.getBoundingClientRect().width
    const height = 400
    const margin = 20
    const innerRadius = 60
    const outerRadius = Math.min(width, height) / 2 - margin

    const svg = container
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    const x = d3.scaleBand()
      .range([0, 2 * Math.PI])
      .align(0)
      .domain(data.map(d => d.group))

    const y = d3.scaleRadial()
      .range([innerRadius, outerRadius])
      .domain([0, 9])

    // Draw grid circles
    for (let i = 1; i <= 9; i++) {
      svg.append('circle')
        .attr('r', y(i))
        .attr('fill', 'none')
        .attr('stroke', '#e0e0e0')
        .attr('stroke-width', 1)
    }

    // Draw sectors
    svg.append('g')
      .selectAll('path')
      .data(data)
      .join('path')
      .attr('fill', (d, i) => {
        const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b']
        return colors[i % colors.length]
      })
      .attr('fill-opacity', 0.6)
      .attr('d', d3.arc<ReadinessData>()
        .innerRadius(innerRadius)
        .outerRadius(d => y(d.value))
        .startAngle(d => x(d.group) || 0)
        .endAngle(d => (x(d.group) || 0) + x.bandwidth())
        .padAngle(0.01)
        .padRadius(innerRadius)
      )

    // Add labels
    svg.append('g')
      .selectAll('text')
      .data(data)
      .join('text')
      .attr('text-anchor', 'middle')
      .attr('transform', d => {
        const angle = (x(d.group) || 0) + x.bandwidth() / 2
        const radius = (innerRadius + outerRadius) / 2
        return `rotate(${angle * 180 / Math.PI}) translate(0, ${-radius}) rotate(${angle * 180 / Math.PI > 90 ? 180 : 0})`
      })
      .text(d => d.group)
      .style('font-size', '14px')
      .style('font-weight', '600')
      .style('fill', '#111827')

    // Add value labels
    svg.append('g')
      .selectAll('text')
      .data(data)
      .join('text')
      .attr('text-anchor', 'middle')
      .attr('transform', d => {
        const angle = (x(d.group) || 0) + x.bandwidth() / 2
        const radius = y(d.value) - 10
        return `rotate(${angle * 180 / Math.PI}) translate(0, ${-radius}) rotate(${angle * 180 / Math.PI > 90 ? 180 : 0})`
      })
      .text(d => `${d.value}/9`)
      .style('font-size', '12px')
      .style('font-weight', '600')
      .style('fill', '#111827')

    // Add overall score in center
    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .text(`Overall: ${overallScore.toFixed(1)}/9`)
      .style('font-size', '18px')
      .style('font-weight', 'bold')
      .style('fill', '#0A1929')

  }, [isClient, data, overallScore])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-bold mb-2 text-deep-navy">{companyName} - Change Readiness Score</h3>
      <p className="text-gray-600 mb-6">{narrative}</p>
      <div ref={containerRef} style={{ width: '100%', height: '400px' }}></div>
    </div>
  )
}

export default ChangeReadinessChart

