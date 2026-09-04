import type { HTMLAttributes, ReactNode } from 'react'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type HeadingVariant = 'display' | 'heading-large' | 'heading' | 'heading-small'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  level: HeadingLevel
  variant?: HeadingVariant
}

const headingElements = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const

const variantClassNames: Record<HeadingVariant, string> = {
  display: 'text-display',
  'heading-large': 'text-heading-large',
  heading: 'text-heading',
  'heading-small': 'text-heading-small',
}

export function Heading({
  children,
  className,
  level,
  variant = 'heading',
  ...props
}: HeadingProps) {
  const HeadingElement = headingElements[level]
  const headingClassName = [
    variantClassNames[variant],
    'text-foreground',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <HeadingElement className={headingClassName} {...props}>
      {children}
    </HeadingElement>
  )
}
