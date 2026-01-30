import Link from 'next/link'
import { Phone, Mail, Linkedin, Github, Download } from 'lucide-react'

const contactItems = [
  {
    label: 'Phone',
    value: '010-552-563',
    href: 'tel:010552563',
    icon: Phone,
    color: 'from-green-500 to-emerald-500',
  },
  {
    label: 'Email',
    value: 'nemsothea13@gmail.com',
    href: 'mailto:nemsothea13@gmail.com',
    icon: Mail,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nem-sothea',
    href: 'https://linkedin.com/in/nem-sothea',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700',
    external: true,
    hideValue: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/nemsothea',
    href: 'https://github.com/nemsothea',
    icon: Github,
    color: 'from-gray-700 to-gray-900',
    external: true,
    hideValue: true,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      data-aos="zoom-in-up"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-[var(--text)] opacity-80">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={index}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative"
                >
                  <div className="relative h-full bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--border-color)] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-[var(--text)] opacity-60 mb-1">
                            {item.label}
                          </div>
                          {!('hideValue' in item && item.hideValue) && (
                            <div className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                              {item.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 animate-shimmer"></div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay={400}>
            <Link
              href="/pdf/Nem_Sothea_Portfolio.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-gradient"
            >
              <Download className="w-6 h-6" />
              Download My Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}