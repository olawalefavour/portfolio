import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import SwapMark from './SwapMark'

const links = [
  { to: '/', label: 'Home' },
  { to: '/story', label: 'Story' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/system-design', label: 'System Design' },
  { to: '/design-work', label: 'Design Work' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <div className="flex items-center justify-between px-6 md:px-16 h-20">
        <NavLink to="/" className="flex items-center gap-2 font-display font-semibold text-base">
          <SwapMark size={20} className="text-accent" />
          <span>Kolade Favour Olawale</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-1.5 font-mono text-sm transition-colors ${
                  isActive ? 'text-accent' : 'text-muted hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <SwapMark size={12} />}
                  {l.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
        >
          <span className={`block h-[1.5px] w-6 bg-ink transition-transform ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-ink transition-transform ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-6 pb-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 py-2.5 font-mono text-sm ${isActive ? 'text-accent' : 'text-muted'}`
              }
            >
              {({ isActive }) => (<>{isActive && <SwapMark size={14} />}{l.label}</>)}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}