import type { ComponentPropsWithRef } from 'react'

type InputProps = Omit<ComponentPropsWithRef<'input'>, 'children'>

const baseClassName =
  'w-full min-h-11 rounded-lg border border-border bg-background px-3 py-2 text-body text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring'

export function Input({ className, type = 'text', ...props }: InputProps) {
  const inputClassName = [baseClassName, className].filter(Boolean).join(' ')

  return <input type={type} className={inputClassName} {...props} />
}
