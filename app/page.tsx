'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import JCurveChart from '@/components/JCurveChart'
import ROITicker from '@/components/ROITicker'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#FFF7E6]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-deep-navy mb-2 leading-tight"
          >
            <span className="block">Responsible AI</span>
            <span className="block">Return On Investment</span>
          </motion.h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            We move transformation from theoretical strategy to calculated financial certainty using agentic inference.
            Supervised models, trained on verified cases, infer the ROI trajectory that best matches your organizational reality.
          </p>

          {/* Model Logic Bar */}
          <div className="mb-8">
            <div className="inline-flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 md:gap-4 bg-white/80 border border-gray-200 rounded-xl px-4 py-4 shadow-sm">
              <div className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm md:text-base">
                <span className="font-semibold text-deep-navy">Input:</span>{' '}
                <span className="text-gray-700">Your Features (X)</span>
              </div>
              <div className="text-deep-navy text-2xl font-bold hidden md:block">→</div>
              <div className="text-deep-navy text-2xl font-bold md:hidden text-center">↓</div>
              <div className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm md:text-base">
                <span className="font-semibold text-deep-navy">Engine:</span>{' '}
                <span className="text-gray-700">Agentic Inference</span>
              </div>
              <div className="text-deep-navy text-2xl font-bold hidden md:block">→</div>
              <div className="text-deep-navy text-2xl font-bold md:hidden text-center">↓</div>
              <div className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm md:text-base">
                <span className="font-semibold text-deep-navy">Output:</span>{' '}
                <span className="text-gray-700">ROI Prediction (Y)</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/simulator"
              className="bg-amber-400 text-deep-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-500 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Start Inference
              <BarChart3 className="w-5 h-5" />
            </Link>
            <Link
              href="/methodology"
              className="bg-electric-blue text-deep-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Explore the Framework
              <ArrowRight className="w-5 h-5" />
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
              training on high-impact, ground-truth outcomes.
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

