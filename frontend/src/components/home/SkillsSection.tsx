import { Container } from '../layout/Container'
import { Heading } from '../ui/Heading'

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="core-technical-skills-heading"
      className="bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Heading
          id="core-technical-skills-heading"
          level={2}
          variant="heading-large"
        >
          Core Technical Skills
        </Heading>
      </Container>
    </section>
  )
}
