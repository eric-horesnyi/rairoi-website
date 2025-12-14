'use client'

import { motion } from 'framer-motion'

const tickerData = [
  { index: 'CAC 40', value: '€67.5B', roi: '186%', color: 'text-blue-600' },
  { index: 'Dow Jones', value: '$345.9B', roi: '267%', color: 'text-green-600' },
  { index: 'NASDAQ-100', value: '$315.8B', roi: '206%', color: 'text-purple-600' },
]

export default function ROITicker() {
  return (
    <div className="bg-gradient-to-r from-deep-navy to-navy-light text-white py-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-electric-blue">
        Aggregate Value Unlocked
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {tickerData.map((item, index) => (
          <motion.div
            key={item.index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-electric-blue/30"
          >
            <div className="text-sm text-gray-300 mb-2">{item.index}</div>
            <div className={`text-3xl font-bold ${item.color} mb-1`}>
              {item.value}
            </div>
            <div className="text-lg text-electric-blue font-semibold">
              {item.roi} ROI
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

