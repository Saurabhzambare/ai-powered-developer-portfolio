import { projects } from '../../content/projects'
import { Container } from '../layout/Container'
import { ProjectCard } from '../projects/ProjectCard'
import { Heading } from '../ui/Heading'

export function DataProjectsSection() {
  const bankingProject = projects.find(
    (project) => project.id === 'market-analysis-banking',
  )
  const mercedesProject = projects.find(
    (project) => project.id === 'mercedes-benz-greener-manufacturing',
  )
  const realEstateProject = projects.find(
    (project) => project.id === 'real-estate-mortgage-analytics',
  )

  return (
    <section
      id="data-projects"
      aria-labelledby="data-machine-learning-projects-heading"
      className="bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Heading
          id="data-machine-learning-projects-heading"
          level={2}
          variant="heading-large"
        >
          Data & Machine Learning Projects
        </Heading>
        {(bankingProject || mercedesProject || realEstateProject) && (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {bankingProject && <ProjectCard project={bankingProject} />}
            {mercedesProject && <ProjectCard project={mercedesProject} />}
            {realEstateProject && <ProjectCard project={realEstateProject} />}
          </div>
        )}
      </Container>
    </section>
  )
}
