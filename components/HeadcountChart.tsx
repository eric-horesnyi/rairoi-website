'use client'

import { useEffect, useRef } from 'react'

interface DepartmentData {
  department: string
  headcount: number
}

interface HeadcountChartProps {
  data: DepartmentData[]
  company: string
}

export default function HeadcountChart({ data, company }: HeadcountChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !data || data.length === 0) return

    // Dynamically load Google Charts
    const script = document.createElement('script')
    script.src = 'https://www.gstatic.com/charts/loader.js'
    script.onload = () => {
      if (typeof (window as any).google !== 'undefined') {
        (window as any).google.charts.load('current', { packages: ['corechart'] })
        ;(window as any).google.charts.setOnLoadCallback(() => {
          const chartData = new (window as any).google.visualization.DataTable()
          chartData.addColumn('string', 'Department')
          chartData.addColumn('number', 'Headcount')
          chartData.addColumn({ type: 'string', role: 'style' })
          chartData.addRows(data.map(d => [d.department, d.headcount, '#dc2626']))

          const options = {
            title: `Estimated Headcount by Department - ${company}`,
            titleTextStyle: { color: '#111827', fontSize: 16 },
            legend: { position: 'none' },
            chartArea: { width: '60%', height: '80%' },
            hAxis: {
              title: 'Number of Employees',
              logScale: true,
              textStyle: { color: '#4b5563' },
              gridlines: { color: '#e5e7eb' },
            },
            vAxis: {
              textStyle: { color: '#111827', fontSize: 12 },
            },
            bar: { groupWidth: '75%' },
            backgroundColor: 'transparent',
          }

          const chart = new (window as any).google.visualization.BarChart(containerRef.current)
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
      style={{ width: '100%', height: '400px' }}
    />
  )
}

