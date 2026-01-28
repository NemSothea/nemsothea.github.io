import { GraduationCap, Award, BookOpen } from 'lucide-react'

const education = [
  {
    degree: "Master's degree of Science, Computer Science",
    institution: 'Asia Euro University',
    period: 'August - Present',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    degree: 'Bachelor of Science, Computer Science',
    institution: 'Royal University of Phnom Penh',
    period: '2011 - 2016',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
  },
  {
    degree: 'Advanced Software Development',
    institution: 'Korea Software HRD Center',
    period: '2016 - 2017',
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
  },
  {
    degree: 'App Development with JAVA',
    institution: 'Training Program',
    period: '2015-2016',
    icon: Award,
    color: 'from-orange-500 to-red-500',
  },
  {
    degree: 'Web Application Development',
    institution: 'Training Program',
    period: '2017',
    icon: Award,
    color: 'from-indigo-500 to-blue-500',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-3xl p-8 md:p-12 shadow-xl border border-[var(--border-color)] hover:shadow-2xl transition-all duration-500">
              <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed mb-6">
                Hello! I'm <strong className="text-[var(--accent)]">Nem Sothea</strong>, based in Phnom Penh, Cambodia.
              </p>
              <p className="text-lg text-[var(--text)] leading-relaxed opacity-90">
                I am passionate about building impactful mobile experiences and leading teams to deliver high-quality iOS applications. My journey in tech has taken me from hands-on development to mentoring and guiding others, always with a focus on innovation and collaboration.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[var(--text)]">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative"
                >
                  <div className="relative h-full bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--border-color)] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                            {item.degree}
                          </h3>
                          <p className="text-[var(--text)] opacity-80 font-semibold mb-1">
                            {item.institution}
                          </p>
                          <p className="text-sm text-[var(--text)] opacity-60">
                            {item.period}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity`}></div>
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