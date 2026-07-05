import { motion } from 'framer-motion'
import { storyChapters } from '../data/content'

export default function Story() {
  return (
    <section className="px-6 md:px-16 pt-16 md:pt-24 pb-20 max-w-3xl">
      <p className="font-mono text-sm text-accent mb-4">Story</p>
      <h1 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-16">
        Five roles, one thread
      </h1>

      <div className="space-y-14">
        {storyChapters.map((chapter, i) => (
          <motion.div
            key={chapter.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="grid md:grid-cols-[140px_1fr] gap-3 md:gap-8 pb-14 border-b border-line last:border-0"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-wide">{chapter.label}</p>
            <div>
              <h2 className="font-display font-semibold text-xl md:text-2xl mb-3">
                {chapter.title}
              </h2>
              <p className="text-muted leading-relaxed">{chapter.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}