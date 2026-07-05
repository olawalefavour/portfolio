import { experience } from '../data/content'

export default function Experience() {
  return (
    <section className="px-6 md:px-16 pt-16 md:pt-24 pb-20 max-w-3xl">
      <p className="font-mono text-sm text-accent mb-4">Experience</p>
      <h1 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-6">
        Where I've worked
      </h1>
      <p className="text-muted max-w-xl mb-16 leading-relaxed">
        From my first sales role during COVID to creative direction, teaching, and building
        products from scratch — every one of these shaped how I think about the work I do now.
      </p>

      <div className="space-y-16">
        {experience.map((job) => (
          <div key={job.company} className="pb-16 border-b border-line last:border-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h2 className="font-display font-semibold text-2xl">{job.company}</h2>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <p className="font-mono text-sm text-accent mb-4">{job.role}</p>
            <p className="text-muted leading-relaxed mb-5 max-w-xl">{job.summary}</p>
            {job.highlights.length > 0 && (
              <ul className="space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-ink/80">
                    <span className="text-accent font-mono">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}