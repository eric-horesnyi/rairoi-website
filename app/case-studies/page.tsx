'use client'

import { motion } from 'framer-motion'
import ROIBubbleChart from '@/components/ROIBubbleChart'
import StrategicGroupMap from '@/components/StrategicGroupMap'
import HeadcountChart from '@/components/HeadcountChart'
import ValueTimeChart from '@/components/ValueTimeChart'
import PorterFiveForces from '@/components/PorterFiveForces'
import ChangeReadinessChart from '@/components/ChangeReadinessChart'
import dynamic from 'next/dynamic'
import { TrendingUp, Users, Target, Network, Map } from 'lucide-react'

// Dynamically import D3-dependent components
const ChangeReadinessChartDynamic = dynamic(() => import('@/components/ChangeReadinessChart'), { ssr: false })

export default function CaseStudiesPage() {
  // Market Supervisor Example - JPMorgan Chase Strategic Group Map
  const marketExample = {
    supervisor: 'Market Analysis',
    company: 'JPMorgan Chase & Co.',
    sector: 'Banking',
    description: 'The Market supervisor analyzes competitive positioning, customer segmentation, and market dynamics. This Strategic Group Map visualizes how JPMorgan Chase positions relative to competitors across key strategic dimensions.',
    chart: 'strategic-group-map',
    data: [
      { id: 'JPMorgan Chase & Co.', x_score: 8, y_score: 7, color: '#002A5E' },
      { id: 'Bank of America Corp.', x_score: 6, y_score: 5, color: '#E0E0E0' },
      { id: 'Citigroup Inc.', x_score: 7, y_score: 10, color: '#E0E0E0' },
      { id: 'Wells Fargo & Co.', x_score: 3, y_score: 2, color: '#E0E0E0' },
      { id: 'Goldman Sachs Group, Inc.', x_score: 10, y_score: 8, color: '#E0E0E0' },
      { id: 'Morgan Stanley', x_score: 9, y_score: 8, color: '#E0E0E0' },
      { id: 'HSBC Holdings plc', x_score: 5, y_score: 9, color: '#E0E0E0' },
      { id: 'BNP Paribas SA', x_score: 6, y_score: 8, color: '#E0E0E0' },
    ],
    xAxisLabel: 'Focus on Investment Banking & Wealth Management',
    yAxisLabel: 'Global Operational Reach',
  }

  // Strategy Supervisor Example - Fnac Darty Porter's Five Forces
  const strategyExample = {
    supervisor: 'Strategic Analysis',
    company: 'Fnac Darty SA',
    sector: 'Consumer Discretionary',
    description: 'The Strategy supervisor applies frameworks like PESTEL, Five Forces, SWOT, and Value Chain analysis to assess strategic positioning. This Porter\'s Five Forces analysis reveals the competitive dynamics in the European electronics and cultural goods retail industry.',
    chart: 'porters-five-forces',
    narrative: 'The European electronics and cultural goods retail industry is intensely competitive, defined by severe price pressure from pure-play online retailers like Amazon and Cdiscount, alongside established omnichannel competitors such as Ceconomy. This hyper-rivalry, combined with high buyer power due to price transparency, squeezes profit margins and makes market share gains difficult and costly. Success hinges on achieving scale and operational efficiency to compete effectively on price for standardized goods. Fnac Darty\'s key strategic imperative is to differentiate beyond price through its robust omnichannel model and value-added services.',
    forces: {
      newEntrants: {
        name: 'Threat of New Entrants',
        impact: 'Low',
        points: [
          'High capital investment for store networks',
          'Requires established supplier relationships and scale',
          'Strong brand recognition of existing players',
          'Online-only entry barrier is lower but scaling difficult',
        ],
      },
      supplierPower: {
        name: 'Bargaining Power of Suppliers',
        impact: 'Medium',
        points: [
          'Some key suppliers (Apple, Samsung) are powerful',
          'Fnac Darty\'s large volume provides negotiation leverage',
          'Many suppliers depend on large retail channels',
          'Suppliers have multiple routes to market',
        ],
      },
      rivalry: {
        name: 'Rivalry Among Competitors',
        impact: 'High',
        points: [
          'Intense price competition from online pure-players',
          'High fixed costs for brick-and-mortar stores',
          'Numerous competitors with similar product offerings',
          'Low product differentiation on core electronics',
        ],
      },
      buyerPower: {
        name: 'Bargaining Power of Buyers',
        impact: 'Med-High',
        points: [
          'Easy online price comparison for consumers',
          'Very low switching costs between retailers',
          'High price sensitivity on standardized goods',
          'Buyers demand omnichannel convenience (e.g., click-collect)',
        ],
      },
      substitutes: {
        name: 'Threat of Substitutes',
        impact: 'Med-High',
        points: [
          'Growth of rental and subscription models',
          'Strong second-hand and refurbished market',
          'Digital streaming replacing physical media sales',
          'Direct-to-consumer (DTC) sales from brands',
        ],
      },
    },
  }

  // Portrait Supervisor Example - BlackRock Change Readiness
  const portraitExample = {
    supervisor: 'Organizational Portrait',
    company: 'BlackRock, Inc.',
    sector: 'Financial Services',
    description: 'The Portrait supervisor assesses organizational structure, workforce distribution, skills, culture, and change readiness. This Change Readiness Score evaluates the organization\'s preparedness for AI transformation across four dimensions: Say (communication), Feel (sentiment), Do (action), and Are (capabilities).',
    chart: 'change-readiness',
    narrative: 'BlackRock\'s change readiness score of 5.0 indicates a company with a strong technical foundation but a significant cultural and emotional deficit. While the organization possesses the necessary skills and infrastructure (\'Are\'), it struggles to bring its people along, evidenced by high anxiety (\'Feel\'), ineffective communication (\'Say\'), and a gap between learning and application (\'Do\'). This imbalance poses a major risk of employee resistance and stalled adoption despite technical readiness.',
    data: [
      { group: 'Say', value: 4 },
      { group: 'Feel', value: 2 },
      { group: 'Do', value: 3 },
      { group: 'Are', value: 9 },
    ],
    overallScore: 5.0,
  }

  // AI Plan Supervisor Example - Banque de France ROI Bubble
  const aiplanExample = {
    supervisor: 'AI Transformation Plan',
    company: 'Banque de France',
    sector: 'Public Sector',
    description: 'The AI Plan supervisor generates a comprehensive portfolio of AI initiatives, calculates ROI, and prioritizes opportunities. This bubble chart visualizes initiatives by complexity and ROI, helping identify quick wins and strategic investments.',
    chart: 'roi-bubble',
    data: [
      { id: 'Interactive Advisory', roi: 126.51, complexity: 1.5, value: 35866072, color: '#FFE0B2' },
      { id: 'Public Financial', roi: 79.77, complexity: 1.3, value: 35866072, color: '#A8E6CF' },
      { id: 'Vigie PME An', roi: 79.77, complexity: 1.3, value: 35866072, color: '#A8E6CF' },
      { id: 'SME Proactive', roi: 79.77, complexity: 1.3, value: 35866072, color: '#A8E6CF' },
      { id: 'SME Conversational', roi: 74.49, complexity: 1.2, value: 32090696, color: '#FFAAA5' },
      { id: 'Generative Content', roi: 49.75, complexity: 2.8, value: 38697604, color: '#A8E6CF' },
      { id: 'Predictive Digital-twin', roi: 26.36, complexity: 1.4, value: 7173214, color: '#FFE0B2' },
      { id: 'Executive Decision', roi: 23.43, complexity: 1.7, value: 7173214, color: '#FFE0B2' },
      { id: 'Intelligent Procurement', roi: 18.81, complexity: 1.9, value: 51419556, color: '#FFD3B6' },
      { id: 'Generative Data', roi: 16.25, complexity: 3.2, value: 7739521, color: '#FFE0B2' },
    ],
    highlightInitiative: 'Interactive Advisory',
  }

  // Journey Supervisor Example - CMA CGM Value over Time
  const journeyExample = {
    supervisor: 'Transformation Journey',
    company: 'CMA CGM S.A.',
    sector: 'Logistics',
    description: 'The Journey supervisor plans the AI transformation roadmap, resource allocation, and timeline. This chart shows how cumulative value, investment, and ROI evolve as initiatives are completed over the 3-year program.',
    chart: 'value-time',
    data: [
      { project: 1, cumulativeValue: 10759859, cumulativeInvestment: 2397517, cumulativeROI: 348.79 },
      { project: 5, cumulativeValue: 72950032, cumulativeInvestment: 24501123, cumulativeROI: 197.74 },
      { project: 10, cumulativeValue: 1492850666, cumulativeInvestment: 437899959, cumulativeROI: 240.91 },
      { project: 15, cumulativeValue: 6763282286, cumulativeInvestment: 1134165056, cumulativeROI: 496.32 },
      { project: 20, cumulativeValue: 7845236847, cumulativeInvestment: 1479007132, cumulativeROI: 430.44 },
    ],
  }

  const sections = [
    { ...marketExample, icon: Map, color: 'bg-blue-500' },
    { ...strategyExample, icon: Target, color: 'bg-purple-500' },
    { ...portraitExample, icon: Users, color: 'bg-green-500' },
    { ...aiplanExample, icon: TrendingUp, color: 'bg-orange-500' },
    { ...journeyExample, icon: Network, color: 'bg-red-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Case Study Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Examples from each supervisor in the RAIROI framework, demonstrating the analytical depth 
            and visualizations generated for AI transformation planning
          </p>
        </motion.div>

        {/* Supervisor Sections */}
        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.supervisor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${section.color} w-16 h-16 rounded-lg flex items-center justify-center`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-deep-navy">{section.supervisor}</h2>
                  <p className="text-gray-600">
                    {section.company} • {section.sector}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">{section.description}</p>

              {/* Chart Rendering */}
              <div className="mt-8">
                {section.chart === 'strategic-group-map' && 'data' in section && 'xAxisLabel' in section && 'yAxisLabel' in section && (
                  <StrategicGroupMap
                    data={section.data as Array<{ id: string; x_score: number; y_score: number; color: string }>}
                    xAxisLabel={section.xAxisLabel}
                    yAxisLabel={section.yAxisLabel}
                    company={section.company}
                  />
                )}

                {section.chart === 'porters-five-forces' && 'forces' in section && (
                  <PorterFiveForces
                    company={section.company}
                    narrative={section.narrative}
                    forces={section.forces as {
                      newEntrants: { name: string; impact: 'High' | 'Medium' | 'Low' | 'Med-High'; points: string[] }
                      supplierPower: { name: string; impact: 'High' | 'Medium' | 'Low' | 'Med-High'; points: string[] }
                      rivalry: { name: string; impact: 'High' | 'Medium' | 'Low' | 'Med-High'; points: string[] }
                      buyerPower: { name: string; impact: 'High' | 'Medium' | 'Low' | 'Med-High'; points: string[] }
                      substitutes: { name: string; impact: 'High' | 'Medium' | 'Low' | 'Med-High'; points: string[] }
                    }}
                  />
                )}

                {section.chart === 'change-readiness' && 'data' in section && 'narrative' in section && 'overallScore' in section && (
                  <ChangeReadinessChartDynamic
                    companyName={section.company}
                    narrative={section.narrative}
                    data={section.data}
                    overallScore={section.overallScore}
                  />
                )}

                {section.chart === 'roi-bubble' && 'data' in section && 'highlightInitiative' in section && (
                  <ROIBubbleChart
                    data={section.data}
                    company={section.company}
                    highlightInitiative={section.highlightInitiative}
                  />
                )}

                {section.chart === 'value-time' && 'data' in section && (
                  <ValueTimeChart 
                    data={section.data as Array<{ project: number; cumulativeValue: number; cumulativeInvestment: number; cumulativeROI: number }>} 
                    company={section.company} 
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-deep-navy text-white rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-electric-blue">Framework Coverage</h2>
          <p className="text-gray-200 leading-relaxed mb-4">
            Each supervisor in the RAIROI framework generates multiple analyses and visualizations. 
            The examples above represent one chart type from each supervisor, but the complete reports 
            include additional charts, tables, and analytical frameworks:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-200 mb-4">
            <li>
              <strong>Market:</strong> 
              <a href="https://doi.org/10.2307/1247695" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">Segmentation Matrix</a>, 
              <a href="https://ijevanlib.ysu.am/wp-content/uploads/2023/02/Michael-E.-Porter-Competitive-Strategy.pdf" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">Strategic Group Map</a>, 
              <a href="https://www.bu.edu/researchsupport/files/2022/04/Market-sizing_Meet-SAM-and-TAM.pdf" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">TAM/SAM/SOM</a>, 
              <a href="https://web-assets.bcg.com/img-src/BCG_Classics_Revisited_The_Growth_Share_Matrix_Jun_2014_tcm9-84453.pdf" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">BCG Growth-Share</a>, 
              Revenue Split, Regional Revenue Analysis, 
              <a href="https://archive.org/download/strategiesfordiversificationansoff1957hbr/Strategies%20for%20Diversification-Ansoff1957-HBR.pdf" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">Ansoff Matrix</a>, 
              <a href="https://www.strategyzer.com/library/the-value-proposition-canvas" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">Value Proposition Canvas (VPC)</a>, 
              <a href="https://babel.hathitrust.org/cgi/pt?id=uc1.$b38792" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">AIDA Funnel</a>, 
              Market Share Analysis
            </li>
            <li>
              <strong>Strategy:</strong> 
              <a href="https://opentext.wsu.edu/cpim/chapter/6-2-global-market-opportunity-assessment-pestel-analysis/" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">PESTEL Analysis</a>, 
              <a href="https://www.isc.hbs.edu/strategy/business-strategy/Pages/the-five-forces.aspx" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">Five Forces</a>, 
              <a href="https://onthinktanks.org/resource/an-essential-guide-to-swot-analysis/" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">SWOT</a>, 
              <a href="https://www.isc.hbs.edu/strategy/business-strategy/Pages/the-value-chain.aspx" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">Value Chain</a>, 
              <a href="https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/enduring-ideas-the-7-s-framework" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline ml-1">7S Framework</a>
            </li>
            <li>
              <strong>Portrait:</strong> Organizational Structure, Headcount Distribution, Skills Matrix, Culture Analysis, Change Readiness Assessment
            </li>
            <li>
              <strong>AI Plan:</strong> AI Competitive Analysis (AI Compete), Portfolio Search & Generation, DISC Framework Enrichment, Impact & Complexity Metrics (DISC3Metrics), 
              Acceptability Analysis, Value/ROI Calculations, ROI Bubble Chart, Strategic Heatmap, Initiative Portfolio
            </li>
            <li>
              <strong>Journey:</strong> Resource Planning, Value over Time, Headcount Planning, Baseline Assessment, 
              Horizon 1 (Short-term: 0-6 months), Horizon 2 (Medium-term: 6-18 months), Horizon 3 (Long-term: 18-36 months), 
              Department View, Training Plan
            </li>
          </ul>
          <p className="text-sm text-gray-300 italic mt-4">
            Framework references: Porter (1980), Waterman & Peters (1980), Aguilar (1967), Barney (1991). 
            See thesis sources for complete citations.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
