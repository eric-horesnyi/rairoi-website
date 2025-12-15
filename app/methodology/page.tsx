'use client'

import { motion } from 'framer-motion'
import { BookOpen, Layers, Network, Code, Target, TrendingUp, Shield, Users, Building, Database, FileText } from 'lucide-react'
import AICompeteSpiderChart from '@/components/AICompeteSpiderChart'
import CalibrationTable from '@/components/CalibrationTable'

export default function MethodologyPage() {
  const dimensions = [
    {
      name: 'Strategy',
      icon: Target,
      description: 'Vision, Market Analysis - PESTEL/Porter',
      color: 'bg-blue-500',
    },
    {
      name: 'Value',
      icon: TrendingUp,
      description: 'DISC Methodology: Domain, Interaction, Strategy, Capability',
      color: 'bg-green-500',
    },
    {
      name: 'Governance',
      icon: Shield,
      description: 'Risk Levels, EU AI Act Compliance',
      color: 'bg-purple-500',
    },
    {
      name: 'Proficiency',
      icon: Users,
      description: 'Skills, Training Loads in employee-years',
      color: 'bg-orange-500',
    },
    {
      name: 'Organization',
      icon: Building,
      description: 'Albrid Company, TMO to CoE evolution',
      color: 'bg-red-500',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            The RAIROI Methodology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An analytical framework drawing on economic theory, systems architecture, and case study observations
          </p>
        </motion.div>

        {/* Section A: Responsible AI Framework */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-electric-blue" />
              <h2 className="text-3xl font-bold text-deep-navy">Responsible AI Framework</h2>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Responsible AI movement has matured since the invention of transformers, with principles defined by 
              international organizations, standards and regulations established by the EU and NIST, and best practices 
              agreed upon by hyperscalers, IEEE, and the World Economic Forum. The RAIROI framework integrates these 
              foundations across three categories, each targeting different organizational roles and responsibilities.
            </p>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-deep-navy text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Category</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Target Audience</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Core References</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Example Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-4 font-semibold text-deep-navy">
                      Foundational<br/>
                      <span className="text-sm font-normal text-gray-600">(Principles & Ethics)</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-gray-700">
                      Board of Directors, C-suite, Strategy Leaders
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-gray-700">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><a href="https://oecd.ai/en/ai-principles" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">OECD Principles on AI (2019)</a></li>
                        <li><a href="https://unesdoc.unesco.org/ark:/48223/pf0000380455" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">UNESCO Recommendation (2021)</a></li>
                        <li><a href="https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">EU Ethics Guidelines for Trustworthy AI (2019)</a></li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                      Define corporate AI values and ethics charter; Use to frame "AI Code of Conduct" for all business units.
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-4 font-semibold text-deep-navy">
                      Regulatory<br/>
                      <span className="text-sm font-normal text-gray-600">(Laws & Compliance)</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-gray-700">
                      Risk Officers, Legal, Compliance, Audit Committees
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-gray-700">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><a href="https://artificialintelligenceact.eu/" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">EU AI Act (2024)</a></li>
                        <li><a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">NIST AI Risk Management Framework (2023)</a></li>
                        <li><a href="https://www.iso.org/committee/6794475.html" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">ISO/IEC JTC 1/SC 42 Standards</a></li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                      Compliance roadmap for high-risk AI systems; Align model documentation and risk registers with NIST RMF.
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-4 font-semibold text-deep-navy">
                      Practical Implementation<br/>
                      <span className="text-sm font-normal text-gray-600">(Engineering & Ops)</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-gray-700">
                      AI Product Teams, Engineers, Transformation Office
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-gray-700">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><a href="https://standards.ieee.org/industry-connections/ec/autonomous-systems/ead-v2/" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">IEEE Ethically Aligned Design (2019)</a></li>
                        <li><a href="https://partnershiponai.org/tenets/" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">Partnership on AI Tenets</a></li>
                        <li><a href="https://www.weforum.org/centre-for-the-fourth-industrial-revolution/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">World Economic Forum Toolkits</a></li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                      Embed fairness testing in model lifecycle; Create Responsible AI checklists in DevOps pipelines; Train engineers on bias mitigation.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-blue-light rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-deep-navy">Integration with RAIROI</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                The RAIROI framework incorporates Responsible AI principles throughout its methodology. The Governance 
                dimension explicitly addresses risk levels aligned with the EU AI Act, while the organizational change 
                management approach ensures that AI adoption considers acceptability and workforce impact. The calibration 
                mechanisms described in the Data Architecture section include bias detection and fairness metrics, ensuring 
                that the framework not only delivers ROI but does so responsibly.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section B: Economic Logic */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-deep-navy to-navy-light text-white rounded-lg p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-electric-blue" />
              <h2 className="text-3xl font-bold">Economic Logic</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-electric-blue">Productivity J-Curve</h3>
                <p className="text-gray-200 leading-relaxed">
                  Research by Brynjolfsson and others suggests that AI adoption may initially depress productivity 
                  before delivering returns. This "intangibles investment" phase appears to require capital allocation 
                  to training, process redesign, and organizational change before value realization begins. The evidence 
                  for this pattern, while compelling, remains subject to ongoing academic debate.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-electric-blue">S-Curve Diffusion</h3>
                <p className="text-gray-200 leading-relaxed">
                  Following the initial dip, some AI implementations appear to enter an S-Curve acceleration phase. 
                  This pattern suggests exponential productivity growth as organizations reach critical mass in AI capabilities, 
                  data maturity, and organizational alignment. However, not all organizations successfully navigate this transition.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h4 className="font-semibold mb-2 text-electric-blue">Albrid Organizations</h4>
              <p className="text-gray-200">
                The "Albrid" (AI-Hybrid) organization concept proposes a state where human expertise and AI capabilities 
                are integrated. This model would require both technological infrastructure and cultural transformation, 
                moving from traditional hierarchies to more adaptive, data-driven decision-making structures. 
                Whether this represents a viable organizational model remains to be fully validated.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section C: The Framework (5 Dimensions) */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Layers className="w-8 h-8 text-electric-blue" />
              <h2 className="text-3xl font-bold text-deep-navy">The Framework: 5 Dimensions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dimensions.map((dim, index) => (
                <motion.div
                  key={dim.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-electric-blue transition-all shadow-lg hover:shadow-xl"
                >
                  <div className={`${dim.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <dim.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-deep-navy">{dim.name}</h3>
                  <p className="text-gray-600">{dim.description}</p>
                </motion.div>
              ))}
            </div>

            {/* RAI Score Formula */}
            <div className="mt-12 bg-gradient-to-r from-blue-light to-white rounded-lg p-8 border-2 border-electric-blue">
              <h3 className="text-2xl font-bold mb-4 text-deep-navy">RAI Score Formula</h3>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <code className="text-lg text-deep-navy block text-center font-mono">
                  RAI Score = (Impact × α) + (ROI × β) + (Acceptability × γ) + (Simplicity × δ)
                </code>
              </div>
              <p className="mt-4 text-gray-600 text-center leading-relaxed">
                Where α, β, γ, and δ are calibrated weights based on organizational priorities and sector characteristics. 
                These weights are continuously refined through reinforcement learning, using observed outcomes from 
                real-world implementations to improve prediction accuracy. The calibration process, detailed in the 
                Data Architecture section, ensures the framework adapts as new evidence becomes available.
              </p>
            </div>

            {/* AI Compete Chart Example */}
            <div className="mt-12 bg-white rounded-lg p-8 border-2 border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-deep-navy">Competitive AI Maturity Analysis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The framework includes a competitive benchmarking component that assesses AI maturity across 
                the five dimensions relative to key competitors. This anonymized spider chart visualization 
                illustrates how organizations can identify strategic gaps and strengths in their AI transformation journey.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <AICompeteSpiderChart
                  data={[
                    {
                      name: 'Company A',
                      color: '#4285F4',
                      ratings: [
                        { axis: 'AI Strategy', value: 4 },
                        { axis: 'AI Value', value: 4 },
                        { axis: 'AI Governance', value: 2 },
                        { axis: 'AI Proficiency', value: 3 },
                        { axis: 'AI Organization', value: 3 },
                      ],
                    },
                    {
                      name: 'Company B',
                      color: '#DB4437',
                      ratings: [
                        { axis: 'AI Strategy', value: 4 },
                        { axis: 'AI Value', value: 4 },
                        { axis: 'AI Governance', value: 3 },
                        { axis: 'AI Proficiency', value: 4 },
                        { axis: 'AI Organization', value: 4 },
                      ],
                    },
                    {
                      name: 'Company C',
                      color: '#F4B400',
                      ratings: [
                        { axis: 'AI Strategy', value: 2 },
                        { axis: 'AI Value', value: 3 },
                        { axis: 'AI Governance', value: 2 },
                        { axis: 'AI Proficiency', value: 3 },
                        { axis: 'AI Organization', value: 3 },
                      ],
                    },
                  ]}
                />
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Scale: 1-Planning | 2-Experimenting | 3-Stabilization | 4-Scaling | 5-Leading
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section D: The Swarm Architecture */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Network className="w-8 h-8 text-electric-blue" />
              <h2 className="text-3xl font-bold text-deep-navy">The Swarm Architecture</h2>
            </div>
            
            <div className="bg-deep-navy text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-electric-blue">Hierarchical Agent System</h3>
              <div className="space-y-6">
                <div className="bg-navy-light rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-electric-blue">Director → Supervisors → Workers → Tools</h4>
                  <p className="text-gray-200 leading-relaxed">
                    The RAIROI system employs a stateless agent architecture where each agent operates independently 
                    but communicates through a single source of truth: structured JSON data. This design prioritizes 
                    scalability and traceability, enabling comprehensive auditing of every decision in the AI transformation 
                    process. The architecture reflects a bias for action—agents can be deployed, tested, and refined 
                    independently, allowing rapid iteration and continuous improvement.
                  </p>
                </div>
                <div className="bg-navy-light rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-electric-blue">Stateless Agents & JSON Data Flow</h4>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Each agent in the swarm is stateless, processing inputs and producing outputs without maintaining 
                    internal state. This approach simplifies debugging, enables horizontal scaling, and ensures that 
                    every analysis can be reproduced from its source data. All data flows through validated JSON schemas 
                    that define the structure of company information, AI initiatives, financial models, and strategic 
                    assessments. This discipline around data structure—insisting on the highest standards—enables the 
                    comprehensive lineage tracking described in the Data Architecture section.
                  </p>
                </div>
              </div>
            </div>

            {/* Code Block Component */}
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-electric-blue" />
                <span className="text-electric-blue font-semibold">Agent Communication Protocol</span>
              </div>
              <pre className="text-sm text-gray-300">
{`{
  "company_name": "Air Liquide",
  "ai_portfolio": [
    {
      "initiative_name": "Nexus Intelligence",
      "disc_values": {
        "strategicIntent": "Increase Revenue",
        "operationalDomain": "Supply Chain & Operations"
      },
      "raiRoi": {
        "value": 45000000,
        "investment": 650000,
        "roi": 69.23
      }
    }
  ],
  "program_metrics": {
    "total_investment": 2431619180,
    "total_value": 7058131596,
    "program_roi": 1.90
  }
}`}
              </pre>
            </div>

            <div className="mt-6 bg-blue-light rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2 text-deep-navy">Technical Implementation</h4>
              <p className="text-gray-700">
                The swarm architecture is implemented in Python using a modular supervisor-worker pattern. 
                Each supervisor (e.g., <code className="bg-white px-2 py-1 rounded">SupervisorAiplan</code>) 
                coordinates multiple specialized workers that perform specific tasks like financial modeling, 
                risk assessment, or strategic alignment analysis. All communication occurs through validated 
                JSON schemas, ensuring data integrity and enabling comprehensive lineage tracking.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section E: Data Architecture & Continuous Learning */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Database className="w-8 h-8 text-electric-blue" />
              <h2 className="text-3xl font-bold text-deep-navy">Data Architecture & Continuous Learning</h2>
            </div>
            
            <div className="bg-gradient-to-r from-deep-navy to-navy-light text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-electric-blue">Data Lineage & Traceability</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Every data point in the RAIROI system maintains complete lineage, tracking its origin, transformations, 
                and dependencies. This approach ensures that every financial projection, strategic assessment, or 
                organizational insight can be traced back to its source data, enabling rigorous validation and 
                continuous improvement. The system records not just what data was used, but how it was processed, 
                which models were applied, and what assumptions were made at each stage.
              </p>
              <p className="text-gray-200 leading-relaxed">
                This lineage infrastructure supports both regulatory compliance and scientific rigor. When a 
                recommendation is made—whether for a €50 million AI investment or a strategic pivot—stakeholders 
                can examine the complete chain of reasoning, from raw company data through market analysis, 
                financial modeling, and risk assessment. This transparency is not merely a technical feature; 
                it is a prerequisite for building trust in AI-driven decision-making at scale.
              </p>
            </div>

            <div className="bg-white border-2 border-electric-blue rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-deep-navy">Reinforcement Learning & Hyperparameter Calibration</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The RAIROI framework employs a continuous calibration mechanism that learns from real-world outcomes. 
                Rather than relying on static models, the system uses reinforcement learning to adjust hyperparameters 
                based on observed discrepancies between predicted and actual ROI. This process operates across multiple 
                dimensions: confidence scores of source data, company size, sector characteristics, and temporal patterns.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The calibration supervisor analyzes historical use cases—currently over 114 verified implementations—to 
                determine optimal calibration factors for the DISC model's value and investment formulas. These factors 
                (ALPHA for revenue/experience impact, BETA for cost savings, GAMMA for risk mitigation) are continuously 
                refined through bootstrapping analysis and cross-validation, ensuring the model remains accurate as new 
                data becomes available.
              </p>
              
              <div className="bg-blue-light rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4 text-deep-navy">Calibration by Confidence Score</h4>
                <p className="text-gray-700 text-sm mb-4">
                  The following table illustrates how calibration factors stabilize as data confidence increases. 
                  This analysis, drawn from actual calibration runs, demonstrates the system's ability to adapt 
                  its predictions based on data quality—a critical capability when working with heterogeneous 
                  sources ranging from verified financial disclosures to industry estimates.
                </p>
                <CalibrationTable
                  title="VALUE Calibration Factors by Confidence Threshold"
                  data={[
                    { threshold: '>= 0.9', useCases: 19, alpha: 0.0886, beta: 0.2464 },
                    { threshold: '>= 0.8', useCases: 44, alpha: 0.0543, beta: 0.2188, gamma: 0.5369 },
                    { threshold: '>= 0.7', useCases: 68, alpha: 0.0519, beta: 0.2031, gamma: 0.5369 },
                    { threshold: '>= 0.6', useCases: 81, alpha: 0.0520, beta: 0.2030, gamma: 0.5369 },
                    { threshold: '>= 0.5', useCases: 86, alpha: 0.0519, beta: 0.2031, gamma: 0.5369 },
                    { threshold: '>= 0.4', useCases: 87, alpha: 0.0519, beta: 0.2031, gamma: 0.5369 },
                  ]}
                  showGamma={true}
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-deep-navy">Learning Loop</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The calibration process operates as a closed-loop system: predictions are made, outcomes are observed, 
                  discrepancies are measured, and hyperparameters are adjusted. This reinforcement learning approach ensures 
                  that the framework becomes more accurate over time, learning from both successes and failures. The system 
                  maintains multiple calibration profiles—by confidence, by company size, by sector—allowing for nuanced 
                  adjustments that reflect the heterogeneity of real-world AI transformations.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Deep Dive: RAIJA Architecture */}
        <section className="mb-20 bg-[#F5F5DC] rounded-lg p-8 border-2 border-deep-navy">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">Deep Dive: RAIJA Architecture</h2>

            {/* Section 1: Hierarchical Orchestration Model */}
            <div className="mb-16 bg-[#F5F5DC] rounded-lg p-8 border-2 border-deep-navy shadow-lg">
              <h3 className="text-2xl font-bold text-deep-navy mb-8 text-center">A Hierarchical Orchestration Model</h3>
              
              {/* Full Agent Swarm Org Chart */}
              <div className="flex flex-col items-center space-y-6 py-8 overflow-x-auto w-full">
                {/* Level 1: Director */}
                <div className="relative">
                  <div className="bg-white border-2 border-deep-navy rounded-lg px-10 py-6 shadow-md min-w-[300px]">
                    <div className="text-center">
                      <div className="font-bold text-xl text-deep-navy mb-2">Director</div>
                      <div className="font-semibold text-base text-deep-navy mb-3">Responsible AI Transformation Plan</div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>6 supervisors</div>
                        <div>46 Workers</div>
                        <div>33 Tools</div>
                      </div>
                    </div>
                  </div>
                  {/* Vertical line down */}
                  <div className="absolute left-1/2 top-full w-0.5 h-6 bg-deep-navy transform -translate-x-1/2"></div>
                </div>

                {/* Level 2: Supervisors */}
                <div className="relative w-full max-w-7xl">
                  {/* Horizontal line connecting to supervisors - elbow style */}
                  <div className="absolute left-1/2 top-0 w-0.5 h-6 bg-deep-navy transform -translate-x-1/2"></div>
                  <div className="absolute left-1/2 top-6 w-[calc(100%-4rem)] h-0.5 bg-deep-navy transform -translate-x-1/2"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 px-4">
                    {[
                      { name: "Supervisor 1 Introduction", workers: "0 Worker", tools: "2 Tools", outputs: ["Cover Page", "Introduction"] },
                      { name: "Supervisor 2 Market Study", workers: "12 Workers", tools: "9 Tools", outputs: ["Executive Summary", "Who buys: Customer Segmentation", "What do they buy: Product & Value Proposition", "Where and how they buy: Geography & Distribution", "Who else: Competitive Position & Market Share", "What is the opportunity: Market Sizing & Growth", "Sources"] },
                      { name: "Supervisor 3 Strategic Analysis", workers: "7 Workers", tools: "5 Tools", outputs: ["Executive Summary", "PESTEL Analysis", "Competitive Positioning", "Porter's Value Chain", "SWOT", "7S", "Porter's Five Forces", "Sources"] },
                      { name: "Supervisor 4 Org Portrait", workers: "8 Workers", tools: "6 Tools", outputs: ["Executive Summary", "Org Grid: Star", "Headcount by Department", "Role x Skill Heatmap: Proficiency", "Culture Radar", "Change Readiness Score", "Sources"] },
                      { name: "Supervisor 5 AI Plan", workers: "9 Workers", tools: "7 Tools", outputs: ["Executive Summary", "AI Maturity v. Competition", "AI Initiatives Generation or Search", "DISC & 3 metrics", "Value Investment ROI", "ROI x Complexity", "Sources"] },
                      { name: "Supervisor 6 Journey", workers: "10 Workers", tools: "10 Tools", outputs: ["Timeline", "Resource Plan", "Factory Skills", "Horizon 1", "Horizon 2", "Horizon 3", "Training Plan"] },
                    ].map((supervisor, idx) => (
                      <div key={idx} className="relative">
                        {/* Vertical line up - elbow connection */}
                        <div className="absolute left-1/2 -top-6 w-0.5 h-6 bg-deep-navy transform -translate-x-1/2"></div>
                        {/* Vertical line down to outputs */}
                        <div className="absolute left-1/2 top-full w-0.5 h-6 bg-deep-navy transform -translate-x-1/2"></div>
                        
                        {/* Supervisor Card */}
                        <div className="bg-white border-2 border-deep-navy rounded-lg px-5 py-4 shadow-md">
                          <div className="text-center mb-3">
                            <div className="font-bold text-sm text-deep-navy mb-1.5">{supervisor.name}</div>
                            <div className="text-xs text-gray-700 space-y-0.5">
                              <div>{supervisor.workers}</div>
                              <div>{supervisor.tools}</div>
                            </div>
                          </div>
                          
                          {/* Outputs/Tasks */}
                          <div className="mt-3 pt-3 border-t border-deep-navy/20">
                            <div className="space-y-1.5">
                              {supervisor.outputs.map((output, oIdx) => (
                                <div key={oIdx} className="bg-[#F5F5DC] border border-deep-navy/30 rounded px-2 py-1.5 text-xs text-gray-800 text-center">
                                  {output}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: RAIJA Sequence & Structure */}
            <div className="mb-16 bg-white rounded-lg p-8 border-2 border-deep-navy shadow-lg">
              <h3 className="text-2xl font-bold text-deep-navy mb-8 text-center">RAIJA Sequence & Structure</h3>
              
              {/* Process Flow */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="bg-deep-navy text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg shadow-lg">
                    1
                  </div>
                  <div className="mt-4 bg-white border-2 border-deep-navy rounded-lg px-6 py-4 shadow-md max-w-xs">
                    <div className="font-semibold text-deep-navy mb-1">Planning</div>
                    <div className="text-sm text-gray-600">User Request → Deconstruction</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:block text-deep-navy text-4xl font-bold">→</div>
                <div className="md:hidden text-deep-navy text-4xl font-bold rotate-90">→</div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="bg-deep-navy text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg shadow-lg">
                    2
                  </div>
                  <div className="mt-4 bg-white border-2 border-deep-navy rounded-lg px-6 py-4 shadow-md max-w-xs">
                    <div className="font-semibold text-deep-navy mb-1">Asynchronous Execution</div>
                    <div className="text-sm text-gray-600">Parallel tool use by Domain Agents</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:block text-deep-navy text-4xl font-bold">→</div>
                <div className="md:hidden text-deep-navy text-4xl font-bold rotate-90">→</div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="bg-deep-navy text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg shadow-lg">
                    3
                  </div>
                  <div className="mt-4 bg-white border-2 border-deep-navy rounded-lg px-6 py-4 shadow-md max-w-xs">
                    <div className="font-semibold text-deep-navy mb-1">Synthesis</div>
                    <div className="text-sm text-gray-600">Reviewer validates against NIST/EU Act → Final Output</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Templated Classes */}
            <div className="mb-16 bg-white rounded-lg p-8 border-2 border-deep-navy shadow-lg">
              <h3 className="text-2xl font-bold text-deep-navy mb-6 text-center">Templated Classes for Scale</h3>
              
              {/* Code Window */}
              <div className="bg-gray-800 rounded-lg p-6 overflow-x-auto border-2 border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">BaseAgent.py</span>
                </div>
                <pre className="text-sm text-gray-300 font-mono leading-relaxed">
{`class BaseAgent:
    """
    Base class for all RAIJA agents ensuring consistent
    logging, error handling, and security boundaries.
    """
    
    def __init__(self, role: str, tools: List[str], 
                 guardrails: Dict[str, Any]):
        self.role = role
        self.tools = tools
        self.guardrails = guardrails
        self.logger = logging.getLogger(self.__class__.__name__)
    
    def step(self, context: Dict) -> Dict:
        """
        Standard agent execution cycle.
        """
        # Retrieve: Gather context and inputs
        data = self.retrieve(context)
        
        # Reason: Process and analyze
        reasoning = self.reason(data)
        
        # Act: Execute tools and generate output
        result = self.act(reasoning)
        
        # Log: Record all actions for audit
        self.log(result)
        
        return result`}
                </pre>
              </div>
              <p className="mt-4 text-gray-700 text-sm italic text-center">
                All agents inherit from a strict base class to ensure consistent logging, error handling, and security boundaries.
              </p>
            </div>

            {/* Section 4: Separation of Concerns */}
            <div className="bg-white rounded-lg p-8 border-2 border-deep-navy shadow-lg">
              <h3 className="text-2xl font-bold text-deep-navy mb-8 text-center">Separation of Concerns</h3>
              
              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-light border-2 border-deep-navy rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-lg text-deep-navy mb-3">Planner vs. Executor</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Planners see the 'Goal' but have no tools. Executors have tools but see only the 'Task'.
                  </p>
                </div>
                
                <div className="bg-blue-light border-2 border-deep-navy rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-lg text-deep-navy mb-3">Execution vs. Review</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The agent that generates content never grades it. Validation is adversarial.
                  </p>
                </div>
                
                <div className="bg-blue-light border-2 border-deep-navy rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-lg text-deep-navy mb-3">Memory Isolation</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Short-term memory buffers are wiped between sessions to prevent data leakage.
                  </p>
                </div>
                
                <div className="bg-blue-light border-2 border-deep-navy rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-lg text-deep-navy mb-3">Deterministic Tools</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Agents execute pre-verified functions, not arbitrary code.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  )
}

