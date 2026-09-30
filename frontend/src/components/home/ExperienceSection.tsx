import { professionalExperience } from '../../content/experience'
import { Container } from '../layout/Container'
import { Heading } from '../ui/Heading'
import { Text } from '../ui/Text'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="professional-experience-heading"
      className="bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Heading
          id="professional-experience-heading"
          level={2}
          variant="heading-large"
        >
          Professional Experience
        </Heading>
        {professionalExperience.map((experience) => {
          const headingId = `experience-${experience.id}-heading`
          const period = [experience.period?.start, experience.period?.end]
            .filter(Boolean)
            .join(' – ')

          return (
            <article
              key={experience.id}
              aria-labelledby={headingId}
              className="mt-8 max-w-4xl rounded-xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div>
                  <Heading id={headingId} level={3} variant="heading-small">
                    {experience.role}
                  </Heading>
                  <Text className="mt-1 font-medium">
                    {experience.organization}
                  </Text>
                </div>
                {period && (
                  <Text
                    variant="body-small"
                    tone="muted"
                    className="shrink-0 sm:text-right"
                  >
                    {period}
                  </Text>
                )}
              </div>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-body text-muted-foreground">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </Container>
    </section>
  )
}
