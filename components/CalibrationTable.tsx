'use client'

import React from 'react'

interface CalibrationTableProps {
  title: string
  data: {
    threshold: string
    useCases: number
    alpha: number
    beta: number
    gamma?: number
  }[]
  showGamma?: boolean
}

const CalibrationTable: React.FC<CalibrationTableProps> = ({ title, data, showGamma = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold mb-4 text-deep-navy">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-deep-navy">Confidence Threshold</th>
              <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-deep-navy">Use Cases</th>
              <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-deep-navy">ALPHA<br/>(Revenue/Experience)</th>
              <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-deep-navy">BETA<br/>(Cost Savings)</th>
              {showGamma && (
                <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-deep-navy">GAMMA<br/>(Risk Mitigation)</th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">{row.threshold}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{row.useCases}</td>
                <td className="border border-gray-300 px-4 py-2 text-center font-mono">{row.alpha.toFixed(4)}</td>
                <td className="border border-gray-300 px-4 py-2 text-center font-mono">{row.beta.toFixed(4)}</td>
                {showGamma && (
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono">
                    {row.gamma !== undefined ? row.gamma.toFixed(4) : 'N/A'}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CalibrationTable

