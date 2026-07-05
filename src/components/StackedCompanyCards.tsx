import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/content'

const STACK_SIZE = 3

export default function StackedCompanyCards() {
  const [index, setIndex] = useState(0)
  const count = experience.length

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 4000)
    return () => clearInterval(t)
  }, [count])

  const visible = Array.from(
    { length: Math.min(STACK_SIZE, count) },
    (_, i) => experience[(index + i) % count]
  )

  return (
    <div className="relative h-64 md:h-52">
      {visible
        .slice()
        .reverse()
        .map((job, revIdx) => {
          const pos = visible.length - 1 - revIdx
          return (
            <motion.div
              key={job.company}
              className="absolute inset-x-0 border border-line bg-paper p-6"
              animate={{
                top: pos * 14,
                scale: 1 - pos * 0.04,
                opacity: pos === 0 ? 1 : 0.55 - pos * 0.15,
              }}
              style={{ zIndex: 10 - pos }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="font-mono text-xs text-accent mb-2">{job.period}</p>
              <h3 className="font-display font-semibold text-xl mb-1">{job.company}</h3>
              <p className="font-mono text-sm text-muted mb-2">{job.role}</p>
              <p className="text-muted text-sm leading-relaxed line-clamp-2">{job.summary}</p>
            </motion.div>
          )
        })}
    </div>
  )
}