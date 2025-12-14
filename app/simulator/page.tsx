'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, Users, Building2 } from 'lucide-react'

const SECTOR_MULTIPLIERS = {
  Retail: 0.02,
  Tech: 0.05,
  Industrial: 0.03,
  Banking: 0.04,
} as const

type Sector = keyof typeof SECTOR_MULTIPLIERS

const TRAINING_COST_PER_EMPLOYEE = 2000 // €2,000 per employee

export default function SimulatorPage() {
  const [revenue, setRevenue] = useState<number>(100000000) // Default: €100M
  const [employees, setEmployees] = useState<number>(1000) // Default: 1,000 employees
  const [sector, setSector] = useState<Sector>('Tech')

  // Calculate ROI
  const baseInvestment = employees * TRAINING_COST_PER_EMPLOYEE
  const sectorMultiplier = SECTOR_MULTIPLIERS[sector]
  const projectedValue = revenue * sectorMultiplier
  const roi = baseInvestment > 0 ? ((projectedValue / baseInvestment) * 100) : 0
  const roiMultiplier = baseInvestment > 0 ? (projectedValue / baseInvestment) : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            ROI Simulator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simplified tool for estimating potential AI transformation ROI based on RAIROI model parameters
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-deep-navy flex items-center gap-2">
              <Calculator className="w-6 h-6 text-electric-blue" />
              Company Information
            </h2>

            <div className="space-y-6">
              {/* Annual Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Annual Revenue (€)
                </label>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-electric-blue focus:outline-none text-lg"
                  placeholder="100000000"
                  min="0"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Current: €{revenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
              </div>

              {/* Employee Count */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Total Employees
                </label>
                <input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-electric-blue focus:outline-none text-lg"
                  placeholder="1000"
                  min="1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Current: {employees.toLocaleString()} employees
                </p>
              </div>

              {/* Sector */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Sector
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value as Sector)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-electric-blue focus:outline-none text-lg bg-white"
                >
                  {Object.keys(SECTOR_MULTIPLIERS).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-500 mt-1">
                  Sector multiplier: {(SECTOR_MULTIPLIERS[sector] * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          </motion.div>

          {/* Results Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-deep-navy to-navy-light text-white rounded-lg shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-electric-blue flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Projected 3-Year ROI
            </h2>

            <div className="space-y-6">
              {/* Base Investment */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-electric-blue/30">
                <div className="text-sm text-gray-300 mb-2">Base Investment</div>
                <div className="text-3xl font-bold text-electric-blue">
                  €{baseInvestment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  {employees.toLocaleString()} employees × €{TRAINING_COST_PER_EMPLOYEE.toLocaleString()} training cost
                </div>
              </div>

              {/* Projected Value */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-electric-blue/30">
                <div className="text-sm text-gray-300 mb-2">Projected Value (3-Year)</div>
                <div className="text-3xl font-bold text-green-400">
                  €{projectedValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  Revenue × {sector} multiplier ({(SECTOR_MULTIPLIERS[sector] * 100).toFixed(1)}%)
                </div>
              </div>

              {/* ROI */}
              <div className="bg-electric-blue/20 backdrop-blur-sm rounded-lg p-6 border-2 border-electric-blue">
                <div className="text-sm text-gray-200 mb-2">Return on Investment</div>
                <div className="text-5xl font-bold text-electric-blue mb-2">
                  {roi.toFixed(1)}%
                </div>
                <div className="text-2xl font-semibold text-white">
                  {roiMultiplier.toFixed(2)}x multiplier
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
                <p className="text-xs text-yellow-200">
                  <strong>Note:</strong> This is a simplified version of the RAIROI model. 
                  Actual ROI calculations would consider additional factors including implementation complexity, 
                  strategic alignment, risk levels, and organizational readiness. These estimates should be 
                  treated as illustrative rather than definitive projections.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Methodology Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-deep-navy">Calculation Methodology</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2 text-deep-navy">Base Investment</h4>
              <p className="text-sm leading-relaxed">
                Calculated as the total training cost across all employees. This represents the 
                "intangibles investment" phase of the Productivity J-Curve, where organizations 
                invest in building AI capabilities before value realization begins.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-deep-navy">Projected Value</h4>
              <p className="text-sm leading-relaxed">
                Based on sector-specific multipliers derived from empirical analysis of successful 
                AI transformations. These multipliers represent the percentage of annual revenue that 
                can be unlocked through disciplined AI adoption over a 3-year horizon.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

