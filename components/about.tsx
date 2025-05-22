'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'NextJS',
    'TailwindCSS',
    'Redux',
    'NestJS',
    'PostgreSQL'
  ]

  // Define colors for skill badges
  const skillColors = [
    'from-orange-500 to-red-500',
    'from-blue-500 to-cyan-500',
    'from-yellow-500 to-amber-500',
    'from-cyan-500 to-blue-500',
    'from-green-500 to-lime-500',
    'from-red-500 to-pink-500',
    'from-purple-500 to-pink-500',
    'from-red-500 to-blue-500',
    'from-blue-600 to-indigo-600'
  ]

  return (
    <section
      id='about'
      className='py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/30'
      ref={ref}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text'>
            About Me
          </h2>
          <div className='mt-2 h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='relative'
          >
            <div className='absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900/30 dark:to-purple-900/30 rounded-full blur-3xl opacity-50 -z-10'></div>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              Who I Am
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
              I'm a passionate full-stack developer with a focus on creating
              intuitive and performant web applications. With a strong
              foundation in both front-end and back-end technologies, I enjoy
              bringing ideas to life through code.
            </p>
            <p className='text-gray-600 dark:text-gray-400'>
              My journey in web development started several years ago, and I've
              been continuously learning and adapting to new technologies ever
              since. I believe in writing clean, maintainable code and creating
              user experiences that are both functional and delightful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='relative'
          >
            <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full blur-3xl opacity-50 -z-10'></div>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              My Skills
            </h3>
            <div className='flex flex-wrap gap-3'>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className={`bg-gradient-to-r ${
                    skillColors[index % skillColors.length]
                  } rounded-full px-4 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg transition-shadow`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
