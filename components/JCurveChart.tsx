'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { motion } from 'framer-motion'

const generateJCurveData = () => {
  const data = []
  // Investment phase (dip)
  for (let i = 0; i <= 12; i++) {
    const x = i
    const y = 50 - (i * 2.5) + (i * i * 0.1) // Dip curve
    data.push({ time: x, productivity: Math.max(0, y), phase: 'Investment' })
  }
  // Recovery and growth phase
  for (let i = 13; i <= 36; i++) {
    const x = i
    const y = 20 + Math.pow((i - 12) / 24, 2) * 180 // Exponential growth
    data.push({ time: x, productivity: y, phase: 'Value Realization' })
  }
  return data
}

export default function JCurveChart() {
  const data = generateJCurveData()

  return (
    <div className="w-full h-[500px] bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-deep-navy">Productivity J-Curve</h3>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorProductivity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00D4FF" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="time" 
            label={{ value: 'Time/Investment (Months)', position: 'insideBottom', offset: -5 }}
            stroke="#6B7280"
          />
          <YAxis 
            label={{ value: 'Productivity Index', angle: -90, position: 'insideLeft' }}
            stroke="#6B7280"
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0A1929', color: '#00D4FF', border: '1px solid #00D4FF' }}
            formatter={(value: number) => [value.toFixed(1), 'Productivity']}
            labelFormatter={(label) => `Month ${label}`}
          />
          <Area
            type="monotone"
            dataKey="productivity"
            stroke="#00D4FF"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorProductivity)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 flex justify-center space-x-8 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-400 rounded mr-2"></div>
          <span className="text-gray-600">Investment Phase (Intangibles)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-electric-blue rounded mr-2"></div>
          <span className="text-gray-600">Value Realization (S-Curve)</span>
        </div>
      </div>
    </div>
  )
}

