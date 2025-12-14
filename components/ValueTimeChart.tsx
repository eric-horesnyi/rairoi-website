'use client'

import { useEffect, useRef } from 'react'

interface ValueTimeData {
  project: number
  cumulativeValue: number
  cumulativeInvestment: number
  cumulativeROI: number
}

interface ValueTimeChartProps {
  data: ValueTimeData[]
  company: string
}

export default function ValueTimeChart({ data, company }: ValueTimeChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !data || data.length === 0) return

    const script = document.createElement('script')
    script.src = 'https://www.gstatic.com/charts/loader.js'
    script.onload = () => {
      if (typeof (window as any).google !== 'undefined') {
        (window as any).google.charts.load('current', { packages: ['corechart'] })
        ;(window as any).google.charts.setOnLoadCallback(() => {
          const chartData = new (window as any).google.visualization.DataTable()
          chartData.addColumn('number', 'Project')
          chartData.addColumn('number', 'Cumulative Value')
          chartData.addColumn('number', 'Cumulative Investment')
          chartData.addColumn('number', 'Cumulative ROI')
          chartData.addRows(data.map(d => [d.project, d.cumulativeValue, d.cumulativeInvestment, d.cumulativeROI]))

          const options = {
            title: `Program Value, Investment, and ROI Ramp-Up - ${company}`,
            titleTextStyle: { color: '#1e3a8a', fontSize: 18, bold: true },
            curveType: 'function',
            legend: { position: 'bottom' },
            series: {
              0: { targetAxisIndex: 0, color: '#3b82f6' },
              1: { targetAxisIndex: 0, color: '#ef4444' },
              2: { targetAxisIndex: 1, color: '#16a34a', lineDashStyle: [4, 4] },
            },
            vAxes: {
              0: {
                title: 'Cumulative Value / Investment (€)',
                format: 'short',
                gridlines: { color: '#e2e8f0' },
                textStyle: { color: '#4b5563' },
              },
              1: {
                title: 'Cumulative ROI (%)',
                format: '#,##0\'%\'',
                gridlines: { color: 'transparent' },
                textStyle: { color: '#16a34a' },
              },
            },
            hAxis: {
              title: 'Project Completion Order',
              textStyle: { color: '#4b5563', fontSize: 10 },
            },
            chartArea: { left: 100, top: 50, width: '85%', height: '65%' },
          }

          const chart = new (window as any).google.visualization.LineChart(containerRef.current)
          chart.draw(chartData, options)
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [data, company])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '500px' }}
    />
  )
}

