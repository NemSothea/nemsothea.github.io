import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

// Project cards: small gallery of key apps with calm but engaging hover states
const projects = [
  {
    name: 'WeCafé',
    description:
      'The easiest and quickest way to buy soft drinks and snacks via a mobile app.',
    image: '/images/wecafe.webp',
    link: 'https://apps.apple.com/kh/app/wecaf%C3%A9/id15415673171',
    delay: 0,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    icon: '☕',
  },
  {
    name: 'BZPEXPENSE',
    description:
      'An app provided to security users of the BizPlay expense management service, streamlining expense tracking and management.',
    image: '/images/bzpexpense.webp',
    link: 'https://apps.apple.com/kh/app/bzpexpense/id6742428841',
    delay: 100,
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    icon: '💰',
  },
  {
    name: 'TripPlus',
    description:
      'An app provided to security users of the BizPlay expense management service, streamlining expense tracking and management.',
    image: '/images/tripplus.webp',
    link: 'https://apps.apple.com/it/app/%ED%8A%B8%EB%A6%AC%ED%94%8C%EB%9F%AC%EC%8A%A4/id6738039716',
    delay: 200,
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    icon: '✈️',
  },
  {
    name: 'BizPlay On-Premise',
    description:
      'An app provided to security users of the BizPlay expense management service, streamlining expense tracking and management.',
    image: '/images/bizplay_on_premise.webp',
    link: 'https://apps.apple.com/dk/app/%EB%B9%84%EC%A6%88%ED%94%8C%EB%A0%88%EC%9D%B4-on-premise/id1663429345?l=da',
    delay: 300,
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    icon: '🏢',
  },
  {
    name: 'Volunteer: Digital Library',
    description:
      'Designed UX/UI for a digital library providing free e-books and videos to children and students.',
    image: '/images/digital_library.png',
    link: 'https://cfrcfund.com/',
    delay: 400,
    gradient: 'from-indigo-500 via-blue-500 to-purple-500',
    icon: '📚',
  },
  {
    name: 'More...',
    description:
      'I have extensive expertise in business productivity solutions, enterprise mobile application development, and financial technology implementation.',
    image: null,
    link: null,
    delay: 500,
    gradient: 'from-gray-500 via-slate-500 to-zinc-500',
    icon: '🚀',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Very light background blobs so the cards remain the main focus */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-[var(--text)] opacity-80">
            Showcasing my latest work and innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={project.delay}
              className="group relative"
            >
              {/* Individual project card */}
              <div className="relative h-full bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-400 border border-[var(--border-color)] overflow-hidden hover:-translate-y-1">
                {/* Soft gradient halo behind the card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-400 -z-10 blur-xl`}
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon or app image */}
                  <div className="mb-6 flex items-center justify-center">
                    {project.image && project.link ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="group/image relative inline-block"
                      >
                        <div
                          className={`absolute -inset-3 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover/image:opacity-60 transition-opacity duration-400`}
                        />
                        <div className="relative transform transition-transform duration-400 group-hover/image:scale-105 group-hover/image:rotate-3">
                          <Image
                            src={project.image}
                            alt={`${project.name} App Icon`}
                            width={90}
                            height={90}
                            className="rounded-3xl shadow-xl border-4 border-white/40"
                          />
                        </div>
                      </Link>
                    ) : (
                      <div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-4xl shadow-xl`}
                      >
                        {project.icon}
                      </div>
                    )}
                  </div>

                  {/* Title + description */}
                  <h3 className="text-2xl font-semibold mb-3 text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {project.name}
                    {project.link && (
                      <ExternalLink className="inline-block w-4 h-4 ml-2 align-middle opacity-60 group-hover:opacity-100" />
                    )}
                  </h3>

                  <p className="text-[var(--text)] leading-relaxed mb-4 opacity-90 text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Link button */}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition-shadow`}
                    >
                      View on App Store
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}