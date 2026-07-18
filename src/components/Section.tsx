import React from 'react'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
}

const Section: React.FC<SectionProps> = ({ children, id, className = '' }) => {
  return (
    <section
      id={id}
      className={`w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}

export default Section
