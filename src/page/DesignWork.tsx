import TiltCard from '../components/TiltCard'
import { designWork } from '../data/content'

export default function DesignWork() {
  return (
    <section className="px-6 md:px-16 pt-16 md:pt-24 pb-20 max-w-5xl">
      <p className="font-mono text-sm text-accent mb-4">Design Work</p>
      <h1 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-4">
        Design, in parallel
      </h1>
      <p className="text-muted max-w-lg mb-16">
        Flyers and campaign graphics for the places I teach at and the projects I run.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {designWork.map((d) => (
          <TiltCard key={d.file}>
            <div className="border border-line bg-paper overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden bg-accenttint">
                <img
                  src={`/designs/${encodeURIComponent(d.file)}.png`}
                  alt={d.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h2 className="font-display font-semibold text-base mb-1.5">{d.title}</h2>
                <p className="text-muted text-sm leading-relaxed">{d.description}</p>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}