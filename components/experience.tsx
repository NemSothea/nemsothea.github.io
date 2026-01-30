import { Briefcase, Trophy, Award } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[var(--secondary)] dark:bg-[var(--secondary)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-[var(--text)] opacity-80">My professional journey</p>
        </div>

        <div className="mb-16" data-aos="fade-up">
          <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-3xl p-8 md:p-12 shadow-xl border border-[var(--border-color)] hover:shadow-2xl transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg">
                <Briefcase className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">
                  KOSIGN [Korea Software Innovation Global Network]
                </h3>
                <p className="text-lg text-[var(--text)] opacity-80 mb-4">
                  March 2017 - Present | Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Lead development of enterprise-level iOS applications utilizing Swift and SwiftUI',
                'Oversea team operations as Leader of the Mobile Department',
                'Implement and optimize modern architecture patterns (MVVM, Clean Architecture)',
                'Pioneered adoption of SwiftUI for UI development across multiple projects',
                'Supervised project delegation and provided mentorship to junior iOS developers',
                'Experience utilizing AI tools (Claude, ChatGPT, Cursor x Figma)',
                'Experience in building CI/CD pipelines and deployment automation using Fastlane',
                'Recognized with "CEO AWARD WINNER" (December 2024) for contributions to iOS development',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[var(--secondary)] dark:bg-[var(--secondary)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-300 group"
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2 group-hover:scale-150 transition-transform"></div>
                  <p className="text-[var(--text)] flex-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-[var(--text)]">
              Academic Recognitions & Awards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Best CEO Award',
                description: 'Presented by Seol WookHwan (CEO), KOSIGN, December 2024',
                icon: Award,
                color: 'from-yellow-400 to-orange-500',
              },
              {
                title: 'LinkedIn Skill Assessments',
                description: 'iOS Development, Web Development',
                icon: Trophy,
                color: 'from-blue-400 to-cyan-500',
              },
            ].map((award, index) => {
              const Icon = award.icon
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative"
                >
                  <div className="relative h-full bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--border-color)] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${award.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                            {award.title}
                          </h4>
                          <p className="text-[var(--text)] opacity-80">{award.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}