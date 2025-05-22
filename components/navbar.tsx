'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <Link href='/' className='text-xl font-bold flex items-center'>
      <span className='relative'>
        <span className='bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-pulse'>
          Dev
        </span>
        <span className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-shimmer' />
      </span>
      <span className='text-gray-800 dark:text-white animate-bounce-subtle'>
        Portfolio
      </span>
    </Link>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className='relative text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
                  onClick={() => setActiveSection(link.href.substring(1))}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className='absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600'
                      layoutId='navbar-indicator'
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                </Link>
              )
            })}
            <ModeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className='flex md:hidden items-center'>
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='ml-2 p-2 rounded-md text-gray-700 dark:text-gray-200'
              aria-label='Toggle menu'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg'>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
                    : 'text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                }`}
                onClick={() => {
                  setActiveSection(link.href.substring(1))
                  setIsOpen(false)
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </motion.div>
    </motion.header>
  )
}
