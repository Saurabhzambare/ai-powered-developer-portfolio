import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const baseClassName = 'rounded-xl border border-border bg-surface p-6'

export function Card({ children, className, ...props }: CardProps) {
  const cardClassName = [baseClassName, className].filter(Boolean).join(' ')

  return (
    <div className={cardClassName} {...props}>
      {children}
    </div>
  )
}
