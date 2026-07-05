import SwapMark from '../components/SwapMark'
import { contactLinks } from '../data/content'

export default function Contact() {
  return (
    <section className="px-6 md:px-16 pt-16 md:pt-24 pb-20 max-w-2xl">
      <p className="font-mono text-sm text-accent mb-4">Contact</p>
      <h1 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-8">
        Let's trade something
      </h1>
      <p className="text-muted leading-relaxed mb-12 max-w-lg">
        Whether it's frontend work, design, or something in between — reach out and I'll get
        back to you.
      </p>

      <div className="flex flex-col gap-1">
        {contactLinks.map((c) => (
          <a // <--- Fixed: Added the opening 'a' tag here
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group flex items-center justify-between gap-4 py-4 border-b border-line hover:bg-accenttint transition-colors px-2 -mx-2"
          >
            <span className="flex items-center gap-3">
              <SwapMark size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-xs text-muted uppercase tracking-wide w-24 shrink-0">
                {c.label}
              </span>
              <span className="font-body text-base">{c.value}</span>
            </span>
            <span className="font-mono text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
              up-right
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}