import { Container } from '../layout/Container'
import { Heading } from '../ui/Heading'

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
      </Container>
    </section>
  )
}
