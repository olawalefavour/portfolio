import ProjectGrid from '../components/ProjectGrid'

export default function Projects() {
  return (
    <section className="px-6 md:px-16 pt-16 md:pt-24 pb-20 max-w-5xl">
      <p className="font-mono text-sm text-accent mb-4">Projects</p>
      <h1 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-4">
        Things I've built
      </h1>
      <p className="text-muted max-w-lg mb-16">
        Frontend work spanning a founder-led product and client engagements.
      </p>
      <ProjectGrid />
    </section>
  )
}