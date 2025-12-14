'use client'

import Link from 'next/link'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-blue">RAIROI</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A framework for understanding the Productivity J-Curve of AI adoption 
              and measuring return on investment across organizational dimensions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-blue">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-electric-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-gray-300 hover:text-electric-blue transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-electric-blue transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-gray-300 hover:text-electric-blue transition-colors">
                  Results & Data
                </Link>
              </li>
              <li>
                <Link href="/simulator" className="text-gray-300 hover:text-electric-blue transition-colors">
                  ROI Simulator
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & References */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-blue">Research & References</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.nber.org/papers/w24001" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric-blue transition-colors">
                  AI Productivity Paradox (NBER)
                </a>
              </li>
              <li>
                <a href="https://hai.stanford.edu/news/ai-index-2024" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric-blue transition-colors">
                  Stanford HAI: AI Index 2024
                </a>
              </li>
              <li>
                <a href="https://www.goldmansachs.com/insights/articles/generative-ai-could-raise-global-gdp-by-7-percent" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric-blue transition-colors">
                  Goldman Sachs: AI & Future of Work
                </a>
              </li>
              <li>
                <a href="https://doi.org/10.1038/s41586-021-03819-2" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric-blue transition-colors">
                  AlphaFold: AI in Life Sciences
                </a>
              </li>
              <li>
                <a href="https://www.anthropic.com/customers" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric-blue transition-colors">
                  Anthropic Enterprise Use Cases
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-blue">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:eric@rairoi.com" className="hover:text-electric-blue transition-colors">
                  eric@rairoi.com
                </a>
              </li>
            </ul>
            <p className="text-xs text-gray-400 mt-6">
              © {new Date().getFullYear()} RAIROI. All rights reserved.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-navy-light">
          <p className="text-xs text-gray-400 text-center">
            The RAIROI framework is provided for analytical purposes. Results and projections 
            should be treated as illustrative rather than definitive. Individual organizational 
            outcomes may vary significantly based on context, implementation, and market conditions.
          </p>
        </div>
      </div>
    </footer>
  )
}

