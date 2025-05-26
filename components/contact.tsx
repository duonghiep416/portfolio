'use client'

import type React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Github, Linkedin, Mail } from 'lucide-react'
import { toast } from 'sonner'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isLoading, setIsLoading] = useState(false)

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className='h-6 w-6' />,
      url: 'https://github.com/duonghiep416',
      color: 'from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className='h-6 w-6' />,
      url: 'https://www.linkedin.com/in/d%C6%B0%C6%A1ng-hi%E1%BB%87p-963608217/',
      color: 'from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail className='h-6 w-6' />,
      url: 'mailto:duonghiep416@gmail.com',
      color: 'from-red-500 to-orange-500 dark:from-red-400 dark:to-orange-400'
    }
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    try {
      await emailjs.send(
        'service_ipiwtnx', // Thay thế bằng Service ID của bạn
        'template_ciia4sl', // Thay thế bằng Template ID của bạn
        {
          name: data.name,
          email: data.email,
          message: data.message,
          to_name: 'Duong Hiep',
          to_email: 'duonghiep416@gmail.com'
        },
        '3AdBfvgjT878R2qjz' // Thay thế bằng Public Key của bạn
      )

      toast.success('Message sent successfully!')
      form.reset()
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id='contact'
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
            Get In Touch
          </h2>
          <div className='mt-2 h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto'></div>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className='p-6 dark:bg-gray-800/50 border-0 shadow-lg relative overflow-hidden'>
              <div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-pink-600'></div>
              <div className='absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl opacity-30 -z-10'></div>

              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                  >
                    Name
                  </label>
                  <Input
                    id='name'
                    name='name'
                    placeholder='Your name'
                    required
                    className='border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-purple-500 dark:focus:ring-purple-400'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                  >
                    Email
                  </label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='your.email@example.com'
                    required
                    className='border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-purple-500 dark:focus:ring-purple-400'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                  >
                    Message
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Your message'
                    rows={5}
                    required
                    className='border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-purple-500 dark:focus:ring-purple-400'
                  />
                </div>
                <Button
                  type='submit'
                  disabled={isLoading}
                  className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0'
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className='p-6 dark:bg-gray-800/50 h-full border-0 shadow-lg relative overflow-hidden'>
              <div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-pink-600'></div>
              <div className='absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-30 -z-10'></div>

              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                Connect With Me
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-6'>
                You can also reach out to me on social media or via email. I'm
                always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className='space-y-4'>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <a
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group'
                    >
                      <div
                        className={`text-white p-2 rounded-full bg-gradient-to-r ${link.color} group-hover:scale-110 transition-transform`}
                      >
                        {link.icon}
                      </div>
                      <span className='text-gray-700 dark:text-gray-300'>
                        {link.name}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
