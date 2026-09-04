import type { ComponentPropsWithRef } from 'react'

type TextareaProps = Omit<ComponentPropsWithRef<'textarea'>, 'children'>

const baseClassName =
  'w-full min-h-32 resize-y rounded-lg border border-border bg-background px-3 py-2 text-body text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive'

export function Textarea({ className, ...props }: TextareaProps) {
  const textareaClassName = [baseClassName, className].filter(Boolean).join(' ')

  return <textarea className={textareaClassName} {...props} />
}
