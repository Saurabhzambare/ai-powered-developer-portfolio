import { ProjectCard } from '../components/projects/ProjectCard'
import { Container } from '../components/layout/Container'
import { Heading } from '../components/ui/Heading'
import { Text } from '../components/ui/Text'
import { projects } from '../content/projects'

const featuredProjects = projects.filter(
  (project) => project.priority === 'featured',
)
const supportingProjects = projects.filter(
  (project) => project.priority === 'supporting',
)

export function ProjectsPage() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <Heading level={1} variant="display">
          Projects
        </Heading>
        <Text tone="muted" className="mt-5 max-w-3xl">
          Software development projects lead, with data and machine-learning
          work as supporting breadth.
        </Text>

        <section aria-labelledby="featured-projects-heading" className="mt-16">
          <Heading
            id="featured-projects-heading"
            level={2}
            variant="heading-large"
          >
            Featured Projects
          </Heading>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="supporting-projects-heading"
          className="mt-16"
        >
          <Heading
            id="supporting-projects-heading"
            level={2}
            variant="heading-large"
          >
            Data & Machine Learning Projects
          </Heading>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </Container>
    </section>
  )
}
