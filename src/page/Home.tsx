import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profile-photo.png'
import StackedCompanyCards from '../components/StackedCompanyCards'
import ProjectGrid from '../components/ProjectGrid'
import FeaturedWork from '../components/FeaturedWork'
import CountingStat from '../components/CountingStat'
import { stats } from '../data/content'

export default function Home() {
  return (
    <section className="relative mx-auto px-6 md:px-16 pt-16 md:pt-24 pb-20 max-w-5xl">
      <div className="relative z-10 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 mb-20">
        <div className="md:max-w-sm">
          <p className="font-mono text-sm text-accent mb-4">Frontend Developer & Systems Thinker</p>
          <h1 className="font-display font-semibold text-[2.2rem] md:text-5xl leading-[1.1] tracking-tight mb-6">
            Kolade Favour Olawale
          </h1>
          <p className="text-lg text-muted mb-8">
            I build the interfaces people use and the systems that make them work — including the
            website for Bola Adebowale & Co — and I've designed 200+ pieces along the way, from
            campaign flyers to brand assets.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 font-mono text-sm hover:bg-accent transition-colors">
              See the work
            </Link>
            <Link to="/story" className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm hover:border-accent hover:text-accent transition-colors">
              Read the story
            </Link>
          </div>
        </div>
        <img
          src={profilePhoto}
          alt="Kolade Favour Olawale"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border border-line shrink-0 md:mr-4"
        />
      </div>

      <div className="relative z-10 mb-20">
        <p className="font-mono text-xs text-muted uppercase tracking-wide mb-4">Where I've worked</p>
        <StackedCompanyCards />
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-line mb-20">
        {stats.map(([stat, label]) => (
          <div key={label}>
            <p className="font-display text-3xl font-semibold text-accent">
              <CountingStat value={stat} />
            </p>
            <p className="text-sm text-muted mt-1">{label}</p>
          </div>
        ))}
      </div>

      <div className="relative z-10 mb-20">
        <div className="flex items-baseline justify-between mb-4">
          <p className="font-mono text-xs text-muted uppercase tracking-wide">Projects</p>
          <Link to="/projects" className="font-mono text-xs text-accent hover:underline">
            View all →
          </Link>
        </div>
        <ProjectGrid />
      </div>

      <div className="relative z-10 mb-20">
        <p className="font-mono text-xs text-muted uppercase tracking-wide mb-4">Featured design work</p>
        <FeaturedWork />
      </div>
    </section>
  )
}