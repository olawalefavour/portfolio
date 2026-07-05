import { useState, useEffect, useCallback } from 'react'
import { experience } from '../data/content'

export default function CompanySlideshow() {
  const [index, setIndex] = useState(0)
  const count = experience.length

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  return (
    <div className="border border-line">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {experience.map((job) => (
            <div key={job.company} className="w-full shrink-0 p-8 md:p-12">
              <p className="font-mono text-xs text-accent mb-3">{job.period}</p>
              <h3 className="font-display font-semibold text-2xl md:text-3xl mb-2">
                {job.company}
              </h3>
              <p className="font-mono text-sm text-muted mb-4">{job.role}</p>
              <p className="text-muted max-w-md leading-relaxed">{job.summary}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-8 md:px-12 py-4 border-t border-line">
        <div className="flex gap-2">
          {experience.map((job, i) => (
            <button
              key={job.company}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${job.company}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-accent' : 'w-1.5 bg-line'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous company"
            className="w-8 h-8 flex items-center justify-center border border-line hover:border-accent hover:text-accent transition-colors font-mono"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next company"
            className="w-8 h-8 flex items-center justify-center border border-line hover:border-accent hover:text-accent transition-colors font-mono"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}