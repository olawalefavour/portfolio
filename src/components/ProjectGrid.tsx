import { frontendProjects } from '../data/content'

export default function ProjectGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {frontendProjects.map((p) => {
        return (
          <div key={p.name} className="border border-line group">
            <div className="relative aspect-[16/10] overflow-hidden bg-accenttint border-b border-line">
              <iframe
                src={p.link}
                title={p.name}
                loading="lazy"
                className="pointer-events-none border-0"
                style={{
                  width: '250%',
                  height: '250%',
                  transform: 'scale(0.4)',
                  transformOrigin: 'top left',
                }}
              />
              
              <a // <--- Fixed: Added the opening 'a' tag here
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-ink/0 group-hover:bg-ink/40 transition-colors"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-paper text-ink font-mono text-xs px-4 py-2">
                  Visit site
                </span>
              </a>
            </div>

            <div className="p-6">
              <h2 className="font-display font-semibold text-xl mb-3">{p.name}</h2>
              <p className="text-muted text-sm leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => {
                  return (
                    <span
                      key={s}
                      className="font-mono text-[11px] text-accent border border-accent/30 px-2 py-1"
                    >
                      {s}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}