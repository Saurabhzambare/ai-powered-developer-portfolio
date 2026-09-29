import type { PortfolioProject } from '../../content/types'
import { Heading } from '../ui/Heading'
import { Link } from '../ui/Link'
import { Text } from '../ui/Text'

interface ProjectCardProps {
  project: PortfolioProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryMedia = project.media?.[0]
  const hasLinks =
    project.links?.githubUrl ||
    project.links?.demoUrl ||
    project.links?.caseStudyUrl

  return (
    <article className="w-full min-w-0 space-y-5 rounded-xl border border-border bg-surface p-6">
      {primaryMedia && (
        <figure>
          <img
            src={primaryMedia.src}
            alt={primaryMedia.alt}
            loading="lazy"
            className="h-auto w-full rounded-lg border border-border"
          />
          {primaryMedia.caption && (
            <figcaption className="mt-2 text-body-small text-muted-foreground">
              {primaryMedia.caption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="space-y-3">
        <Heading level={3} variant="heading" className="break-words">
          {project.title}
        </Heading>
        <Text tone="muted">{project.summary}</Text>
        {project.status && (
          <Text variant="body-small" tone="muted">
            {project.status}
          </Text>
        )}
      </div>

      {project.technologies.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="min-w-0 break-words rounded-lg border border-border bg-surface-elevated px-3 py-1 text-body-small text-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>
      )}

      {hasLinks && (
        <div className="flex flex-wrap gap-3">
          {project.links?.githubUrl && (
            <Link
              href={project.links.githubUrl}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          )}
          {project.links?.demoUrl && (
            <Link
              href={project.links.demoUrl}
              variant="primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </Link>
          )}
          {project.links?.caseStudyUrl && (
            <Link href={project.links.caseStudyUrl} variant="secondary">
              Case Study
            </Link>
          )}
        </div>
      )}
    </article>
  )
}
