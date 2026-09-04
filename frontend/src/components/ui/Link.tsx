import type { AnchorHTMLAttributes, ReactNode } from 'react'
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from 'react-router'

type LinkVariant = 'text' | 'primary' | 'secondary'

interface SharedLinkProps {
  children: ReactNode
  className?: string
  variant?: LinkVariant
}

type InternalLinkProps = SharedLinkProps &
  Omit<RouterLinkProps, 'children' | 'className' | 'to'> & {
    href?: never
    to: RouterLinkProps['to']
  }

type NativeLinkProps = SharedLinkProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'children' | 'className' | 'href'
  > & {
    href: string
    to?: never
  }

type LinkProps = InternalLinkProps | NativeLinkProps

const ctaClassName =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-body-small font-semibold no-underline'

const variantClassNames: Record<LinkVariant, string> = {
  text: 'text-primary underline decoration-1 underline-offset-4 visited:text-muted-foreground hover:text-foreground active:text-foreground',
  primary: `${ctaClassName} border-primary bg-primary text-primary-foreground hover:border-primary/90 hover:bg-primary/90 active:border-primary/85 active:bg-primary/85`,
  secondary: `${ctaClassName} border-border bg-transparent text-foreground hover:bg-surface active:bg-surface-elevated`,
}

function isInternalLink(props: LinkProps): props is InternalLinkProps {
  return props.to !== undefined
}

export function Link(props: LinkProps) {
  if (isInternalLink(props)) {
    const {
      children,
      className,
      to,
      variant = 'text',
      ...routerLinkProps
    } = props
    const linkClassName = [variantClassNames[variant], className]
      .filter(Boolean)
      .join(' ')

    return (
      <RouterLink to={to} className={linkClassName} {...routerLinkProps}>
        {children}
      </RouterLink>
    )
  }

  const { children, className, href, variant = 'text', ...anchorProps } = props
  const linkClassName = [variantClassNames[variant], className]
    .filter(Boolean)
    .join(' ')

  return (
    <a href={href} className={linkClassName} {...anchorProps}>
      {children}
    </a>
  )
}
