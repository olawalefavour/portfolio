import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountingStatProps {
  value: string
}

export default function CountingStat({ value }: CountingStatProps) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView || target === 0) return
    let current = 0
    const stepTime = Math.max(Math.floor(1200 / target), 20)
    const timer = setInterval(() => {
      current += 1
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}