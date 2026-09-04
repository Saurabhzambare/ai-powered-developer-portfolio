import type { HTMLAttributes, ReactNode } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}

const baseClassName =
  'inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-body-small text-foreground'

export function Badge({ children, className, ...props }: BadgeProps) {
  const badgeClassName = [baseClassName, className].filter(Boolean).join(' ')

  return (
    <span className={badgeClassName} {...props}>
      {children}
    </span>
  )
}
