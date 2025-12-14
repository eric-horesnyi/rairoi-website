'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'

interface CompanyData {
  company: string
  sector: string
  roi: string
  ebitdaImpact: string
  topInitiative: string
  index: 'CAC40' | 'DJI' | 'NASDAQ'
}

const sampleData: CompanyData[] = [
  // CAC40 Companies
  { company: 'Accor SA', sector: 'Hospitality', roi: '190%', ebitdaImpact: '+4.1%', topInitiative: 'Dynamic Pricing', index: 'CAC40' },
  { company: 'Airbus', sector: 'Aerospace', roi: '172%', ebitdaImpact: '+2.8%', topInitiative: 'Predictive Maintenance', index: 'CAC40' },
  { company: 'BNP Paribas', sector: 'Banking', roi: '194%', ebitdaImpact: '+5.1%', topInitiative: 'Fraud Detection', index: 'CAC40' },
  { company: 'Dassault Systèmes', sector: 'Software', roi: '206%', ebitdaImpact: '+6.1%', topInitiative: 'Coding Assistants', index: 'CAC40' },
  { company: 'Bouygues Telecom', sector: 'Telecom', roi: '17.9x', ebitdaImpact: '+46.7%', topInitiative: 'Kinetic Insights', index: 'CAC40' },
  { company: 'Air Liquide', sector: 'Industrial', roi: '190%', ebitdaImpact: '+25.6%', topInitiative: 'Nexus Intelligence', index: 'CAC40' },
  { company: 'Carrefour', sector: 'Retail', roi: '790%', ebitdaImpact: '+12.3%', topInitiative: 'Predictive Procurement AI', index: 'CAC40' },
  { company: 'Amundi', sector: 'Financial Services', roi: '185%', ebitdaImpact: '+4.5%', topInitiative: 'Portfolio Optimization', index: 'CAC40' },
  { company: 'Edenred', sector: 'Financial Services', roi: '198%', ebitdaImpact: '+5.2%', topInitiative: 'Transaction Intelligence', index: 'CAC40' },
  { company: 'Fnac Darty SA', sector: 'Consumer Discretionary', roi: '175%', ebitdaImpact: '+3.8%', topInitiative: 'Omnichannel Personalization', index: 'CAC40' },
  { company: 'CMA CGM S.A.', sector: 'Logistics', roi: '240%', ebitdaImpact: '+8.1%', topInitiative: 'Supply Chain Optimization', index: 'CAC40' },
  { company: 'Banque de France', sector: 'Public Sector', roi: '126%', ebitdaImpact: '+6.2%', topInitiative: 'Interactive Advisory', index: 'CAC40' },
  // Dow Jones Companies
  { company: 'Microsoft', sector: 'Technology', roi: '245%', ebitdaImpact: '+8.2%', topInitiative: 'AI Copilot Suite', index: 'DJI' },
  { company: 'Apple', sector: 'Technology', roi: '198%', ebitdaImpact: '+5.4%', topInitiative: 'Supply Chain AI', index: 'DJI' },
  { company: 'JPMorgan Chase', sector: 'Banking', roi: '267%', ebitdaImpact: '+9.8%', topInitiative: 'Algorithmic Trading', index: 'DJI' },
  { company: 'Citigroup Inc', sector: 'Banking', roi: '251%', ebitdaImpact: '+8.5%', topInitiative: 'Risk Management AI', index: 'DJI' },
  { company: 'BlackRock, Inc', sector: 'Financial Services', roi: '223%', ebitdaImpact: '+7.3%', topInitiative: 'Investment Analytics', index: 'DJI' },
  // NASDAQ Companies
  { company: 'Meta Platforms', sector: 'Technology', roi: '289%', ebitdaImpact: '+10.2%', topInitiative: 'AI Content Moderation', index: 'NASDAQ' },
  { company: 'NVIDIA', sector: 'Technology', roi: '234%', ebitdaImpact: '+7.9%', topInitiative: 'AI Infrastructure', index: 'NASDAQ' },
  { company: 'Tesla', sector: 'Automotive', roi: '234%', ebitdaImpact: '+7.9%', topInitiative: 'Autonomous Driving', index: 'NASDAQ' },
  { company: 'Alibaba Group', sector: 'E-commerce', roi: '212%', ebitdaImpact: '+6.8%', topInitiative: 'Recommendation Engine', index: 'NASDAQ' },
]

type SortField = 'company' | 'sector' | 'roi' | 'ebitdaImpact'
type SortDirection = 'asc' | 'desc'

export default function ResultsPage() {
  const [selectedIndex, setSelectedIndex] = useState<'ALL' | 'CAC40' | 'DJI' | 'NASDAQ'>('ALL')
  const [sortField, setSortField] = useState<SortField>('roi')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

  const filteredData = selectedIndex === 'ALL' 
    ? sampleData 
    : sampleData.filter(d => d.index === selectedIndex)

  const sortedData = [...filteredData].sort((a, b) => {
    let aVal: string | number = a[sortField]
    let bVal: string | number = b[sortField]

    // Handle ROI comparison (convert "190%" or "17.9x" to numbers)
    if (sortField === 'roi') {
      aVal = parseFloat(String(aVal).replace('%', '').replace('x', ''))
      bVal = parseFloat(String(bVal).replace('%', '').replace('x', ''))
    }

    // Handle EBITDA impact (remove + and %)
    if (sortField === 'ebitdaImpact') {
      aVal = parseFloat(String(aVal).replace('+', '').replace('%', ''))
      bVal = parseFloat(String(bVal).replace('+', '').replace('%', ''))
    }

    if (typeof aVal === 'string') {
      return sortDirection === 'asc' 
        ? aVal.localeCompare(bVal as string)
        : (bVal as string).localeCompare(aVal)
    } else {
      return sortDirection === 'asc' 
        ? (aVal as number) - (bVal as number)
        : (bVal as number) - (aVal as number)
    }
  })

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('desc')
    }
  }

  const SortButton = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-2 hover:text-electric-blue transition-colors"
    >
      {children}
      {sortField === field && (
        sortDirection === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />
      )}
      {sortField !== field && <ArrowUpDown className="w-4 h-4 opacity-50" />}
    </button>
  )

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
            Results & Data
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Observations from analysis across major stock indices
          </p>
          <p className="text-sm text-gray-500 mt-2 italic">
            Note: Additional company data from NASDAQ, Dow Jones, and DAX indices is available 
            in the thesis appendix. This page currently shows a representative sample.
          </p>
        </motion.div>

        {/* Index Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {(['ALL', 'CAC40', 'DJI', 'NASDAQ'] as const).map((index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedIndex === index
                  ? 'bg-electric-blue text-deep-navy shadow-lg'
                  : 'bg-white text-deep-navy hover:bg-gray-100'
              }`}
            >
              {index === 'ALL' ? 'All Indices' : index}
            </button>
          ))}
        </div>

        {/* Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-deep-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <SortButton field="company">Company Name</SortButton>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <SortButton field="sector">Sector</SortButton>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <SortButton field="roi">Projected ROI</SortButton>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <SortButton field="ebitdaImpact">EBITDA Impact</SortButton>
                  </th>
                  <th className="px-6 py-4 text-left">Top Initiative</th>
                  <th className="px-6 py-4 text-left">Index</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedData.map((row, index) => (
                  <motion.tr
                    key={`${row.company}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-blue-light transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-deep-navy">{row.company}</td>
                    <td className="px-6 py-4 text-gray-600">{row.sector}</td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-electric-blue">{row.roi}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-green-600">{row.ebitdaImpact}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{row.topInitiative}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-navy-light text-white rounded-full text-sm">
                        {row.index}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Insight Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-deep-navy to-navy-light text-white rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-electric-blue">The 3x Pattern</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Across the sectors analyzed, the median ROI multiplier appears to converge around <strong className="text-electric-blue">3x over a 3-year horizon</strong>, 
            contributing to approximately <strong className="text-electric-blue">+3% EBITDA</strong> improvement. 
            This pattern seems to hold whether measuring financial returns, operational efficiency gains, or strategic value creation. 
            However, this observation should be interpreted with appropriate caution, as sample sizes remain limited and 
            sector-specific factors may vary. The data suggests, rather than proves, that disciplined AI transformation 
            may deliver returns that justify the initial investment in the Productivity J-Curve dip.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

