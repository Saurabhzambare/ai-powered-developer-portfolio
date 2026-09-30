import { credentials } from '../../content/credentials'
import { Container } from '../layout/Container'
import { Heading } from '../ui/Heading'
import { Text } from '../ui/Text'

export function ProfessionalLearningSection() {
  return (
    <section
      id="professional-learning"
      aria-labelledby="professional-learning-heading"
      className="bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Heading
          id="professional-learning-heading"
          level={2}
          variant="heading-large"
        >
          Selected Professional Learning
        </Heading>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {credentials.map((credential) => {
            const headingId = `credential-${credential.id}-heading`

            return (
              <article
                key={credential.id}
                aria-labelledby={headingId}
                className="min-w-0 rounded-xl border border-border bg-surface-elevated p-6 sm:p-8"
              >
                <Heading
                  id={headingId}
                  level={3}
                  variant="heading-small"
                  className="break-words"
                >
                  {credential.title}
                </Heading>
                <Text className="mt-2 font-medium">{credential.issuer}</Text>
                {credential.issuedOn && (
                  <Text variant="body-small" tone="muted" className="mt-2">
                    {credential.issuedOn}
                  </Text>
                )}
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
