'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import JCurveChart from '@/components/JCurveChart'
import ROITicker from '@/components/ROITicker'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-light to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-deep-navy mb-6"
          >
            Bridging the Gap between Responsible AI and ROI
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            From initial investment to sustained acceleration: observations from analyzing AI transformations 
            across major indices suggest patterns worth examining. This framework attempts to make sense of 
            the J-Curve phenomenon and offers a structured approach to measuring return on investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/methodology"
              className="bg-electric-blue text-deep-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Explore the Framework
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/simulator"
              className="bg-deep-navy text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Simulate Your ROI
              <BarChart3 className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* J-Curve Visualization */}
        <div className="mb-16">
          <JCurveChart />
        </div>

        {/* ROI Ticker */}
        <div className="mb-16">
          <ROITicker />
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <TrendingUp className="w-12 h-12 text-electric-blue mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-deep-navy">Economic Foundation</h3>
            <p className="text-gray-600 leading-relaxed">
              Grounded in academic research on Productivity J-Curves and empirical analysis across major 
              stock indices. The framework attempts to translate theoretical insights into practical 
              decision-making tools.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Target className="w-12 h-12 text-electric-blue mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-deep-navy">Analytical Framework</h3>
            <p className="text-gray-600 leading-relaxed">
              A structured approach combining five dimensions with a DISC methodology, designed to provide 
              comprehensive coverage of AI transformation challenges. The framework evolves through continuous 
              calibration against real-world outcomes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BarChart3 className="w-12 h-12 text-electric-blue mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-deep-navy">Empirical Observations</h3>
            <p className="text-gray-600 leading-relaxed">
              Analysis drawn from multiple case studies across diverse sectors. These observations, while 
              not definitive, suggest patterns that may inform strategic planning for AI transformation initiatives.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

