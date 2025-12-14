'use client'

import React from 'react'

interface Force {
  name: string
  impact: 'High' | 'Medium' | 'Low' | 'Med-High'
  points: string[]
}

interface PorterFiveForcesProps {
  company: string
  narrative: string
  forces: {
    newEntrants: Force
    supplierPower: Force
    rivalry: Force
    buyerPower: Force
    substitutes: Force
  }
}

const PorterFiveForces: React.FC<PorterFiveForcesProps> = ({ company, narrative, forces }) => {

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return '#ef4444'
      case 'Med-High':
        return '#f97316'
      case 'Medium':
        return '#eab308'
      case 'Low':
        return '#22c55e'
      default:
        return '#6b7280'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-bold mb-2 text-deep-navy">{company} - Porter's Five Forces Analysis</h3>
      <p className="text-gray-600 mb-6">{narrative}</p>
      
      <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
        {/* Top: Threat of New Entrants */}
        <div className="col-start-2">
          <div className="bg-white border-2 rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-deep-navy">🚪 Threat of New Entrants</h4>
              <span
                className="text-xs px-2 py-1 rounded text-white font-semibold"
                style={{ backgroundColor: getImpactColor(forces.newEntrants.impact) }}
              >
                {forces.newEntrants.impact}
              </span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              {forces.newEntrants.points.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Left: Supplier Power */}
        <div className="col-start-1 row-start-2">
          <div className="bg-white border-2 rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-deep-navy">🚚 Supplier Power</h4>
              <span
                className="text-xs px-2 py-1 rounded text-white font-semibold"
                style={{ backgroundColor: getImpactColor(forces.supplierPower.impact) }}
              >
                {forces.supplierPower.impact}
              </span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              {forces.supplierPower.points.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center: Rivalry */}
        <div className="col-start-2 row-start-2 border-2 border-electric-blue">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-deep-navy">⚔️ Rivalry Among Competitors</h4>
              <span
                className="text-xs px-2 py-1 rounded text-white font-semibold"
                style={{ backgroundColor: getImpactColor(forces.rivalry.impact) }}
              >
                {forces.rivalry.impact}
              </span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              {forces.rivalry.points.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Buyer Power */}
        <div className="col-start-3 row-start-2">
          <div className="bg-white border-2 rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-deep-navy">🛒 Buyer Power</h4>
              <span
                className="text-xs px-2 py-1 rounded text-white font-semibold"
                style={{ backgroundColor: getImpactColor(forces.buyerPower.impact) }}
              >
                {forces.buyerPower.impact}
              </span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              {forces.buyerPower.points.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom: Substitutes */}
        <div className="col-start-2 row-start-3">
          <div className="bg-white border-2 rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-deep-navy">🔄 Threat of Substitutes</h4>
              <span
                className="text-xs px-2 py-1 rounded text-white font-semibold"
                style={{ backgroundColor: getImpactColor(forces.substitutes.impact) }}
              >
                {forces.substitutes.impact}
              </span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              {forces.substitutes.points.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PorterFiveForces

