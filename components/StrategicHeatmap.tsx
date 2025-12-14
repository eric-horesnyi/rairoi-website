'use client'

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { motion } from 'framer-motion'

interface Initiative {
  name: string
  complexity: number
  impact: number
  roi: number
  color: string
}

interface StrategicHeatmapProps {
  company: string
  initiatives: Initiative[]
  highlightInitiative?: string
  narrative: string
}

export default function StrategicHeatmap({ company, initiatives, highlightInitiative, narrative }: StrategicHeatmapProps) {
  const data = initiatives.map(init => ({
    x: init.complexity,
    y: init.impact,
    name: init.name,
    roi: init.roi,
    color: init.color,
  }))

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-bold mb-2 text-deep-navy">{company}</h3>
      <p className="text-gray-600 mb-6">{narrative}</p>
      
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            type="number" 
            dataKey="x" 
            name="Complexity"
            label={{ value: 'Implementation Complexity', position: 'insideBottom', offset: -5 }}
            domain={[0, 10]}
            stroke="#6B7280"
          />
          <YAxis 
            type="number" 
            dataKey="y" 
            name="Impact"
            label={{ value: 'Financial Impact', angle: -90, position: 'insideLeft' }}
            domain={[0, 10]}
            stroke="#6B7280"
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#0A1929', color: '#00D4FF', border: '1px solid #00D4FF', borderRadius: '8px' }}
            cursor={{ strokeDasharray: '3 3' }}
            content={({ active, payload }) => {
              if (active && payload && payload[0]) {
                const data = payload[0].payload as any
                return (
                  <div className="bg-deep-navy p-4 rounded-lg border border-electric-blue">
                    <p className="font-bold text-electric-blue mb-2">{data.name}</p>
                    <p className="text-sm text-gray-300">Complexity: {data.x.toFixed(1)}</p>
                    <p className="text-sm text-gray-300">Impact: {data.y.toFixed(1)}</p>
                    <p className="text-sm font-semibold text-electric-blue mt-2">ROI: {data.roi.toFixed(1)}x</p>
                  </div>
                )
              }
              return null
            }}
          />
          <Scatter name="Initiatives" data={data} fill="#00D4FF">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} r={entry.name === highlightInitiative ? 10 : 6} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {initiatives.map((init) => (
          <div
            key={init.name}
            className={`p-3 rounded-lg border-2 ${
              init.name === highlightInitiative
                ? 'border-electric-blue bg-blue-light'
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className="font-semibold text-sm text-deep-navy">{init.name}</div>
            <div className="text-xs text-gray-600 mt-1">
              ROI: <span className="font-bold text-electric-blue">{init.roi.toFixed(1)}x</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

