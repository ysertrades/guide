import React from 'react'

interface GridProps {
  children: React.ReactNode
  cols?: 2 | 3
  className?: string
}

const Grid: React.FC<GridProps> = ({ children, cols = 2, className = '' }) => {
  const gridClass =
    cols === 3
      ? 'grid-cols-1 md:grid-cols-3'
      : 'grid-cols-1 md:grid-cols-2'

  return (
    <div className={`grid ${gridClass} gap-6 ${className}`}>{children}</div>
  )
}

export default Grid
