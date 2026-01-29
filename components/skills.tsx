// Primary skill “chips” with icons and accent gradients
const skills = [
  { name: 'Swift', icon: '⚡', color: 'from-orange-500 to-red-500' },
  { name: 'SwiftUI', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
  { name: 'iOS Development', icon: '📱', color: 'from-gray-700 to-gray-900' },
  { name: 'Project Leadership', icon: '👥', color: 'from-purple-500 to-pink-500' },
  { name: 'UI/UX Design', icon: '✨', color: 'from-pink-500 to-rose-500' },
  { name: 'Web Development', icon: '🌐', color: 'from-green-500 to-emerald-500' },
  { name: 'Team Collaboration', icon: '🤝', color: 'from-indigo-500 to-blue-500' },
]

const developmentFocus = [
  'Enterprise iOS Application Architecture',
  'Modern UI Implementation (iPhone, iPad, MacOS)',
  'Prototyping & Design Systems',
  'RESTful API Integration',
  'Backend & System Integration',
  'Mentoring & Team Growth',
]

const tools = [
  'Xcode, Git, GitHub, GitLab, CI/CD',
  'Figma (UI/UX Design)',
  'Database Design & Implementation',
  'MVVM, Clean Architecture',
]

const languages = [
  { name: 'Khmer (Native)', flag: '🇰🇭', level: 100 },
  { name: 'English (Proficiency)', flag: '🇬🇧', level: 95 },
  { name: 'Korean (Intermediate)', flag: '🇰🇷', level: 70 },
]

const researchInterests = [
  'Artificial Intelligence integration in mobile applications',
  'Machine Learning for personalized user experiences',
  'Advanced Mobile Architecture design patterns',
  'Emerging Technologies in software development',
  'Cross-platform Development methodologies',
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-gradient-to-br from-[var(--accent)] via-blue-600 to-purple-600 dark:from-[var(--primary)] dark:via-[var(--primary)] dark:to-[var(--primary)] text-white relative overflow-hidden"
    >
      {/* Very soft background blobs for motion without distraction */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Skills &amp; Expertise</span>
          </h2>
          <p className="text-xl opacity-90">Technologies and areas I focus on</p>
        </div>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
              className="group relative"
            >
              <div className="relative px-7 py-3 glass rounded-2xl font-bold border-2 border-white/30 hover:border-white transition-all duration-300 cursor-default overflow-hidden min-w-[150px] text-center">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                />
                <div className="absolute inset-0 transform scale-0 group-hover:scale-105 transition-transform duration-400 bg-white/10 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Development focus */}
        <div className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-6 text-center">Development Focus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {developmentFocus.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="group glass rounded-xl p-4 hover:bg-white/10 transition-all duration-300 cursor-default border border-white/20 hover:border-white/40"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 mt-2 group-hover:scale-150 transition-transform" />
                  <p className="flex-1">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-6 text-center">Tools &amp; Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="px-6 py-3 glass rounded-xl font-semibold border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Languages with progress bars */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center">Languages</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {languages.map((lang, index) => (
              <div
                key={lang.name}
                data-aos="flip-left"
                data-aos-delay={index * 120}
                className="group relative"
              >
                <div className="glass rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all duration-300 min-w-[200px]">
                  <div className="text-4xl mb-2 text-center">{lang.flag}</div>
                  <div className="font-bold text-center mb-3">{lang.name}</div>
                  <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-700"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                  <div className="text-sm text-center mt-2 opacity-80">{lang.level}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research interests */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchInterests.map((interest, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="group glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 cursor-default border border-white/20 hover:border-white/40 hover:translate-x-1"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔬</span>
                  <p className="flex-1">{interest}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}