import React, { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Overview', target: 'hero' },
  { label: 'Basics', target: 'basics' },
  { label: 'Sessions', target: 'sessions' },
  { label: 'Cycle', target: 'cycle' },
  { label: 'GxT', target: 'gxt' },
  { label: 'Liquidity', target: 'liquidity' },
  { label: 'SMT', target: 'smt' },
  { label: 'Profiles', target: 'profiles' },
  { label: 'Risk', target: 'risk' },
  { label: 'Psy', target: 'psychology' },
  { label: 'Plan', target: 'plan' },
]

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    )

    navLinks.forEach(({ target }) => {
      const el = document.getElementById(target)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (target: string) => {
    const el = document.getElementById(target)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center"
      style={{
        height: '48px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'rgba(0,0,0,0.45)',
        borderBottom: '0.4px solid rgba(176,176,176,0.1)',
      }}
    >
      <div className="flex items-center gap-1 px-4 overflow-x-auto no-scrollbar max-w-full">
        {navLinks.map(({ label, target }) => {
          const isActive = activeSection === target
          return (
            <button
              key={target}
              onClick={() => handleClick(target)}
              className={`relative px-3 py-1.5 text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors duration-200 ${
                isActive ? 'text-white' : 'text-secondary-alpha hover:text-white/80'
              }`}
            >
              {label}
              {isActive && (
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full"
                  style={{ background: 'rgba(100,200,180,0.7)' }}
                />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
