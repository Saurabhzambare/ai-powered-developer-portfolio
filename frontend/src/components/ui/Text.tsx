import type { HTMLAttributes, ReactNode } from 'react'

type TextVariant = 'body-small' | 'body' | 'body-large'

type TextTone = 'default' | 'muted'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  tone?: TextTone
  variant?: TextVariant
}

const variantClassNames: Record<TextVariant, string> = {
  'body-small': 'text-body-small',
  body: 'text-body',
  'body-large': 'text-body-large',
}

const toneClassNames: Record<TextTone, string> = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
}

export function Text({
  children,
  className,
  tone = 'default',
  variant = 'body',
  ...props
}: TextProps) {
  const textClassName = [
    variantClassNames[variant],
    toneClassNames[tone],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <p className={textClassName} {...props}>
      {children}
    </p>
  )
}
