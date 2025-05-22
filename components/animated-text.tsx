'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  speed?: number
  colorful?: boolean
}

export function AnimatedText({
  text,
  className,
  speed = 25,
  colorful = false
}: AnimatedTextProps) {
  // Create an array with the text repeated multiple times to ensure continuous animation
  const repeatedText = Array(10).fill(text).join(' • ')

  return (
    <div className='w-full overflow-hidden my-4'>
      <motion.div
        className={cn(
          'whitespace-nowrap inline-block',
          colorful
            ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text font-bold'
            : '',
          className
        )}
        animate={{
          x: [0, -1000] // Animate from 0 to a negative value (width of the text)
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear'
          }
        }}
      >
        {repeatedText}
      </motion.div>
    </div>
  )
}
