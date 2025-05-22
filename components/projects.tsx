'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  comingSoon?: boolean
  color: string
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects: Project[] = [
    {
      id: 1,
      title: 'Study Tools & Learning Platform',
      description:
        'A flashcard-based learning platform that helps students memorize and review information effectively through spaced repetition and interactive study sessions.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'NestJS'],
      liveUrl: 'https://brainflip.vercel.app',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and team features.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website built with modern web technologies.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Coming Soon',
      description:
        'A new exciting project is in the works. Stay tuned for updates!',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['Next.js', 'TypeScript', 'AI'],
      comingSoon: true,
      color: 'from-emerald-500 to-green-500'
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section
      id='projects'
      className='py-20 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-900'
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
            My Projects
          </h2>
          <div className='mt-2 h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto'></div>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Here are some of the projects I've worked on. Each one has taught me
            something new and helped me grow as a developer.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'
          variants={container}
          initial='hidden'
          animate={isInView ? 'show' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className='h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800/50 border-0 shadow-md'>
                <div className='relative h-48 overflow-hidden'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 z-10`}
                  ></div>
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-500 hover:scale-105'
                  />
                  {project.comingSoon && (
                    <div className='absolute inset-0 bg-black/50 flex items-center justify-center z-20'>
                      <Badge
                        className={`text-lg py-2 px-4 bg-gradient-to-r ${project.color} hover:opacity-90 border-0`}
                      >
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader
                  className={`border-t-4 border-gradient-to-r ${project.color}`}
                >
                  <CardTitle>{project.title}</CardTitle>
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant='secondary'
                        className='bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base'>
                    {project.description}
                  </CardDescription>
                </CardContent>
                {!project.comingSoon && (
                  <CardFooter className='flex gap-2'>
                    {project.githubUrl && (
                      <Button
                        variant='outline'
                        size='sm'
                        asChild
                        className='border-gray-300 dark:border-gray-600'
                      >
                        <a
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-1'
                        >
                          <Github className='h-4 w-4' />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size='sm'
                        asChild
                        className={`bg-gradient-to-r ${project.color} hover:opacity-90 border-0`}
                      >
                        <a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-1'
                        >
                          <ExternalLink className='h-4 w-4' />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
