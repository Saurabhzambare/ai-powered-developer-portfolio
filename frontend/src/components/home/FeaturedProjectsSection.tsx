import { Container } from '../layout/Container'
import { Heading } from '../ui/Heading'

export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Heading
          id="featured-projects-heading"
          level={2}
          variant="heading-large"
        >
          Featured Projects
        </Heading>
      </Container>
    </section>
  )
}
