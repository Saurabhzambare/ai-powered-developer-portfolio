import { candidateProfile } from '../../content/candidateProfile'
import { Container } from '../layout/Container'
import { Heading } from '../ui/Heading'
import { Text } from '../ui/Text'

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Heading id="about-heading" level={2} variant="heading-large">
          About
        </Heading>
        <div className="mt-8 max-w-3xl space-y-4">
          {candidateProfile.about.map((paragraph) => (
            <Text key={paragraph} tone="muted">
              {paragraph}
            </Text>
          ))}
        </div>
      </Container>
    </section>
  )
}
