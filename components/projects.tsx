import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
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
              <div className="relative h-full bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[var(--border-color)] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-center">
                    {project.image && project.link ? (
                      <Link 
                        href={project.link} 
                        target="_blank" 
                        className="group/image relative inline-block"
                      >
                        <div className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover/image:opacity-50 transition-opacity duration-500`}></div>
                        <div className="relative transform transition-all duration-500 group-hover/image:scale-110 group-hover/image:rotate-6">
                          <Image
                            src={project.image}
                            alt={`${project.name} App Icon`}
                            width={100}
                            height={100}
                            className="rounded-3xl shadow-2xl border-4 border-white/20"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover/image:opacity-100 transition-opacity"></div>
                        </div>
                      </Link>
                    ) : (
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-5xl shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        {project.icon}
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300 flex items-center gap-2">
                    {project.name}
                    {project.link && (
                      <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </h3>

                  <p className="text-[var(--text)] leading-relaxed mb-4 opacity-90">
                    {project.description}
                  </p>

                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}