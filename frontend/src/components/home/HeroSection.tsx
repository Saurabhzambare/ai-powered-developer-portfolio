import { candidateProfile } from '../../content/candidateProfile'
import { Container } from '../layout/Container'
import { Heading } from '../ui/Heading'
import { Text } from '../ui/Text'

export function HeroSection() {
  return (
    <section
      aria-label="Introduction"
      className="w-full border-b border-border bg-surface py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="flex max-w-3xl flex-col gap-5 sm:gap-6">
          <Text variant="body-large" className="font-semibold text-primary">
            {candidateProfile.headline}
          </Text>
          <Heading level={1} variant="display" className="text-balance">
            {candidateProfile.name}
          </Heading>
          <Text variant="body-large" tone="muted" className="max-w-2xl">
            {candidateProfile.summary}
          </Text>
        </div>
      </Container>
    </section>
  )
}
