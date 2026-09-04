import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
}

const baseClassName =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-body-small font-semibold disabled:cursor-not-allowed disabled:opacity-50'

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    'border-primary bg-primary text-primary-foreground enabled:hover:border-primary/90 enabled:hover:bg-primary/90 enabled:active:border-primary/85 enabled:active:bg-primary/85',
  secondary:
    'border-border bg-transparent text-foreground enabled:hover:bg-surface enabled:active:bg-surface-elevated',
}

export function Button({
  children,
  className,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  const buttonClassName = [baseClassName, variantClassNames[variant], className]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={buttonClassName} {...props}>
      {children}
    </button>
  )
}
