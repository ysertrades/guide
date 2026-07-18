import React from 'react'

interface ListProps {
  items: string[]
  className?: string
}

const List: React.FC<ListProps> = ({ items, className = '' }) => {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span
            className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
            style={{ background: 'rgba(100, 200, 180, 0.7)' }}
          />
          <span className="text-secondary-alpha text-sm leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default List
