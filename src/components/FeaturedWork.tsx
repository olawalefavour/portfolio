import { featuredWork } from '../data/content'

export default function FeaturedWork() {
  return (
    <div className="flex gap-5 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4">
      {featuredWork.map((item) => (
        <div
          key={item.name}
          className="min-w-[240px] md:min-w-0 border border-line p-5 hover:bg-accenttint transition-colors shrink-0"
        >
          <span className="inline-block font-mono text-[10px] text-accent border border-accent/30 px-2 py-0.5 mb-4">
            {item.type}
          </span>
          <h3 className="font-display font-semibold text-base mb-2 leading-snug">{item.name}</h3>
          <p className="text-sm text-muted leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  )
}