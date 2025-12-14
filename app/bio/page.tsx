'use client'

interface InsightItem {
  year: string
  roleType: string
  context: string
  title: string
  link: string
}

const insights: InsightItem[] = [
  {
    year: '2025',
    roleType: 'Devoxx France (Curator)',
    context: 'Conference',
    title: 'The Semiotician of the AI Age.',
    link: 'https://www.youtube.com/watch?v=GDvcpgp2fn8&list=PLTbQvx84FrAQ_SahOOqxsB9nH3FbuxiKe&index=6',
  },
  {
    year: '2024',
    roleType: 'Project Medtech Podcast (Guest)',
    context: 'Episode 171',
    title: 'Instilling Quality Early at your Medtech Startup.',
    link: 'https://podcasts.apple.com/gb/podcast/episode-171-eric-horesnyi-ceo-at-matrix-requirements/id1513851432?i=1000644995540',
  },
  {
    year: '2023',
    roleType: 'The Medtech Podcast (Guest)',
    context: 'Episode #59',
    title: 'Patient Experience, AI & Software Development.',
    link: 'https://open.spotify.com/episode/5Z3Vz2fhC8uOQOLOTedN4b',
  },
  {
    year: '2021',
    roleType: 'APIdays Paris (Speaker)',
    context: 'Governance',
    title: 'Beyond API Governance: Run your Org like a Lean Startup.',
    link: 'https://www.slideshare.net/slideshow/apidays-live-paris-2021-beyond-api-governance-run-your-api-org-like-a-lean-startup-by-eric-horesnyi-axway/250870643',
  },
  {
    year: '2020',
    roleType: 'BFM TV (Interview)',
    context: 'BPI/AXWAY Platform',
    title: 'La plateforme entre l\'entreprise et l\'État pour le PGE.',
    link: 'https://www.dailymotion.com/video/x7xworf',
  },
  {
    year: '2019',
    roleType: 'Axway Blog (Article)',
    context: 'AI & Machine Learning',
    title: 'Why Believe in AI and Machine Learning.',
    link: 'https://blog.axway.com/learning-center/apis/api-management/why-believe-in-ai-and-machine-learning',
  },
  {
    year: '2018',
    roleType: 'QCon London (Track Host)',
    context: 'AI Track',
    title: "Curated the 'Practice & Frontiers of AI' track (5 sessions).",
    link: 'https://qconlondon.com/ln2018/london2018/track/practice-frontiers-ai.html',
  },
  {
    year: '2017',
    roleType: 'InfoQ (Podcast)',
    context: 'Deep Learning',
    title: 'Eric Horesnyi on High Frequency Trading & AI.',
    link: 'https://www.infoq.com/podcasts/eric-horesnyi-ai-hft/',
  },
  {
    year: '2016',
    roleType: 'Conference (Speaker)',
    context: 'Finance & Data',
    title: 'Findevr NYC: real-time data streaming.',
    link: 'https://www.youtube.com/watch?v=MIDj22D9TDk',
  },
]

export default function BioPage() {

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="mb-12 border-b border-gray-300 pb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-2">
            Eric Horesnyi
          </h1>
          <h2 className="text-xl text-gray-600 font-sans font-normal mb-4">
            Responsible AI & Scalability
          </h2>
          <div className="flex gap-4 text-sm text-gray-700 font-sans">
            <a
              href="https://www.linkedin.com/in/erichoresnyi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:eric@rairoi.com"
              className="hover:text-black underline"
            >
              Email
            </a>
          </div>
        </header>

        {/* Bio Text */}
        <section className="mb-12">
          <p className="text-base leading-relaxed text-black font-sans mb-4">
            Eric Horesnyi applies engineering discipline to the scaling of technology organizations
            and the governance of artificial intelligence. His work focuses on the intersection of
            algorithmic efficiency, financial return, and human adoption.
          </p>
          <p className="text-base leading-relaxed text-black font-sans mb-4">
            Over 20 years, he has held operational roles ranging from engineer to CEO in
            high-frequency trading (HFT), API infrastructure, and cloud computing environments.
          </p>
          <ul className="list-none space-y-3 text-base leading-relaxed text-black font-sans">
            <li>
              <strong>Scaling:</strong> Managed the growth phases of four separate technology
              organizations, navigating the transition from €1M to €100M in revenue.
            </li>
            <li>
              <strong>Leadership:</strong> Served two tenures as CEO (resulting in a trade exit and a x2 growth)
              and three tenures as Sales/General Manager (achieving 2x growth twice, reaching 9 digit revenue once).
            </li>
            <li>
              <strong>AI & Research:</strong> Holds a specialization in AI from Institut
              Polytechnique de Paris and an MBA from NYU Stern. Previously Head of Google Cloud AI
              (France), structuring AI transformation plans for CAC40 entities.
            </li>
            <li>
              <strong>Community:</strong> Member of the Devoxx selection committee.
            </li>
          </ul>
        </section>

        {/* Contact Invitation */}
        <section className="mb-12 border-t border-gray-300 pt-8">
          <p className="text-base leading-relaxed text-black font-sans">
            For organizations exploring AI transformation, I welcome conversations about your specific use case. 
            Whether you are evaluating ROI potential, designing governance frameworks, or navigating the Productivity J-Curve, 
            I am available to discuss how the RAIROI methodology might apply to your context.
          </p>
          <p className="text-base leading-relaxed text-black font-sans mt-4">
            <a
              href="mailto:eric@rairoi.com"
              className="underline hover:text-gray-700"
            >
              eric@rairoi.com
            </a>
          </p>
        </section>

        {/* Selected Insights Section */}
        <section className="border-t border-gray-300 pt-8">
          <h2 className="text-2xl font-serif font-bold text-black mb-8">
            Selected Insights
          </h2>
          <div className="space-y-6">
            {insights.map((item, idx) => (
              <div
                key={idx}
                className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="font-mono text-sm text-gold shrink-0">{item.year}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-600 font-sans mb-1">
                      <span className="font-semibold">{item.roleType}</span>
                      {item.context && (
                        <>
                          {' • '}
                          <span>{item.context}</span>
                        </>
                      )}
                    </div>
                    <div className="text-base leading-relaxed text-black font-sans">
                      {item.link && item.link !== '#' ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lapis-blue hover:text-gold transition-colors underline"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <span className="text-gray-500 italic">
                          {item.title}
                          {item.link === '#' && ' (Coming Soon)'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

