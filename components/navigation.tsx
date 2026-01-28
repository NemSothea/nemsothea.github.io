'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const navLinks = [
    { href: '#about', label: 'About Me' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-[var(--primary)] dark:bg-[var(--primary)] text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container flex justify-between items-center">
        <h1 className="text-2xl font-bold whitespace-nowrap">Nem Sothea</h1>
        <div className="flex items-center gap-4">
          <ul
            className={`hidden md:flex gap-6 ${
              menuOpen
                ? 'fixed top-0 right-0 w-64 h-screen bg-[var(--primary)] flex flex-col p-8 shadow-2xl z-50'
                : ''
            }`}
          >
            {menuOpen && (
              <li className="md:hidden mb-4">
                <button
                  onClick={closeMenu}
                  className="text-3xl hover:text-[var(--accent)] transition-colors"
                >
                  <X size={24} />
                </button>
              </li>
            )}
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="hover:text-[var(--accent)] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
      {menuOpen && (
        <ul className="fixed top-0 right-0 w-64 h-screen bg-[var(--primary)] flex flex-col p-8 shadow-2xl z-50 md:hidden">
          <li className="mb-4">
            <button
              onClick={closeMenu}
              className="text-3xl hover:text-[var(--accent)] transition-colors"
            >
              <X size={24} />
            </button>
          </li>
          {navLinks.map((link) => (
            <li key={link.href} className="mb-4">
              <Link
                href={link.href}
                onClick={closeMenu}
                className="hover:text-[var(--accent)] transition-colors font-medium text-lg"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
