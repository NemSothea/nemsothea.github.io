import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-br from-[var(--accent)] via-blue-600 to-purple-600 dark:from-[var(--primary)] dark:via-[var(--primary)] dark:to-[var(--primary)] text-white py-16 md:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 animate-slide-in">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
            <Image
              src="/images/profile.png"
              alt="Nem Sothea"
              width={220}
              height={220}
              className="relative rounded-full border-4 border-white shadow-2xl animate-float transform transition-transform group-hover:scale-110"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              Hello, I'm <span className="gradient-text">Nem Sothea</span> 👋
            </h2>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-blue-100 animate-scale-in">
              Senior iOS Software Engineer & Team Leader Mobile
            </p>
            <p className="mb-8 text-blue-50 leading-relaxed max-w-2xl">
              Senior iOS Software Engineer with expertise in enterprise mobile
              applications and team leadership as Mobile Department Leader at
              KOSIGN. Skilled in modern architecture patterns and mentoring.
              Seeking advanced studies in AI and emerging technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="https://linkedin.com/in/nem-sothea"
                target="_blank"
                className="group px-6 py-3 glass rounded-xl hover-lift font-medium relative overflow-hidden"
              >
                <span className="relative z-10">LinkedIn</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
              <Link
                href="https://github.com/nemsothea"
                target="_blank"
                className="group px-6 py-3 glass rounded-xl hover-lift font-medium relative overflow-hidden"
              >
                <span className="relative z-10">GitHub</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
              <Link
                href="/pdf/Nem_Sothea_Portfolio.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl hover-lift font-medium shadow-lg animate-gradient relative overflow-hidden group"
              >
                <span className="relative z-10">📄 Download CV</span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}