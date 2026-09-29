import { projects } from '../../content/projects'
import { Container } from '../layout/Container'
import { ProjectCard } from '../projects/ProjectCard'
import { Heading } from '../ui/Heading'

export function FeaturedProjectsSection() {
  const disciplineProject = projects.find(
    (project) => project.id === 'discipline-system',
  )

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
        {disciplineProject && (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ProjectCard project={disciplineProject} />
          </div>
        )}
      </Container>
    </section>
  )
}
