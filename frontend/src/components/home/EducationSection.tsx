import { education } from '../../content/education'
import { Container } from '../layout/Container'
import { Heading } from '../ui/Heading'
import { Text } from '../ui/Text'

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Heading id="education-heading" level={2} variant="heading-large">
          Education
        </Heading>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {education.map((record) => {
            const headingId = `education-${record.id}-heading`
            const period = [record.period?.start, record.period?.end]
              .filter(Boolean)
              .join(' – ')
            const details = 'details' in record ? record.details : undefined

            return (
              <article
                key={record.id}
                aria-labelledby={headingId}
                className="min-w-0 rounded-xl border border-border bg-surface p-6 sm:p-8"
              >
                <Heading
                  id={headingId}
                  level={3}
                  variant="heading-small"
                  className="break-words"
                >
                  {record.qualification}
                </Heading>
                <Text className="mt-2 font-medium">{record.institution}</Text>
                {period && (
                  <Text variant="body-small" tone="muted" className="mt-2">
                    {period}
                  </Text>
                )}
                {details && details.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-body-small text-muted-foreground">
                    {details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
