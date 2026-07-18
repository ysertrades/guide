import React from 'react'

interface GlowBlobProps {
  className?: string
  color?: string
}

const GlowBlob: React.FC<GlowBlobProps> = ({
  className = '',
  color = 'rgba(100, 200, 180, 1)',
}) => {
  return (
    <div
      className={`absolute glow-blob ${className}`}
      style={{ background: color }}
    />
  )
}

export default GlowBlob
