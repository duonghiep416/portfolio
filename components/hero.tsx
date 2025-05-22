'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import { AnimatedText } from '@/components/animated-text'
import { useEffect, useState } from 'react'

export function Hero() {
  const [title, setTitle] = useState('')
  const titles = [
    'Full-stack Developer',
    'Frontend Developer',
    'Backend Developer'
  ]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (title.length < currentTitle.length) {
          setTitle(currentTitle.slice(0, title.length + 1))
          setTypingSpeed(100)
        } else {
          setTypingSpeed(1000) // Pause at the end
          setIsDeleting(true)
        }
      } else {
        if (title.length > 0) {
          setTitle(currentTitle.slice(0, title.length - 1))
          setTypingSpeed(50) // Faster when deleting
        } else {
          setIsDeleting(false)
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
          setTypingSpeed(500) // Pause before starting new word
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [title, currentTitleIndex, isDeleting, typingSpeed])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section
      id='home'
      className='relative h-screen flex items-center justify-center overflow-hidden'
    >
      <div className='absolute inset-0 z-0 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 dark:from-purple-950 dark:via-gray-900 dark:to-pink-950' />
        <div className='absolute inset-0 opacity-20 dark:opacity-30'>
          {/* Colorful grid pattern background */}
          <div className='h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]' />
        </div>

        {/* Colorful floating shapes */}
        <div className='absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900/30 dark:to-purple-900/30 blur-3xl opacity-30 animate-pulse' />
        <div
          className='absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200 to-teal-200 dark:from-blue-900/30 dark:to-teal-900/30 blur-3xl opacity-30 animate-pulse'
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 z-10'>
        <motion.div
          className='text-center'
          variants={container}
          initial='hidden'
          animate='show'
        >
          <motion.div variants={item}>
            <h2 className='text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400'>
              Hi, I&apos;m
            </h2>
          </motion.div>
          <motion.div variants={item}>
            <h1 className='mt-2 text-4xl md:text-6xl lg:text-7xl font-bold'>
              <span className='bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-transparent bg-clip-text'>
                Duong Hiep
              </span>
            </h1>
          </motion.div>
          <motion.div variants={item} className='relative'>
            <h2 className='mt-4 text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 min-h-[3rem]'>
              {title}
              <span className='inline-block w-1 h-8 bg-purple-600 dark:bg-purple-400 ml-1 animate-blink'></span>
            </h2>
          </motion.div>
          <motion.div variants={item}>
            <p className='mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              I build modern, responsive web applications with cutting-edge
              technologies.
            </p>
          </motion.div>
          <motion.div
            variants={item}
            className='mt-8 flex justify-center gap-4'
          >
            <Button
              size='lg'
              className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0'
            >
              <a href='CV-Duong-Duc-Hiep.pdf' download>
                View My CV
              </a>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-2 border-purple-500 dark:border-purple-400 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950'
            >
              <a href='#contact'>Contact Me</a>
            </Button>
          </motion.div>
          <motion.div variants={item} className='mt-10'>
            <AnimatedText
              text='TYPESCRIPT • REACT • NEXT.JS • TAILWIND • FRAMER MOTION • NODE.JS • POSTGRESQL'
              className='text-lg md:text-xl font-medium'
              speed={20}
              colorful={true}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <a href='#about' aria-label='Scroll down'>
          <ArrowDown className='h-6 w-6 text-purple-600 dark:text-purple-400' />
        </a>
      </motion.div>
    </section>
  )
}
