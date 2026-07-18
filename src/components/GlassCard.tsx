import React from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-panel p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
