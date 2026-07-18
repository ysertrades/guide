import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-md'

  const variantClasses =
    variant === 'accent'
      ? 'bg-accent-alpha text-[rgba(100,200,180,0.9)]'
      : 'bg-accent-alpha text-[rgba(100,200,180,0.9)]'

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
