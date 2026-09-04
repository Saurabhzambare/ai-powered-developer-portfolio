import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  const containerClassName = [
    'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={containerClassName}>{children}</div>
}
