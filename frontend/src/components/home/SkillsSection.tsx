import { skillCategories } from '../../content/skills'
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
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const headingId = `skill-category-${category.id}`

            return (
              <article
                key={category.id}
                aria-labelledby={headingId}
                className="min-w-0 rounded-xl border border-border bg-surface-elevated p-5 sm:p-6"
              >
                <Heading
                  id={headingId}
                  level={3}
                  variant="heading-small"
                  className="break-words"
                >
                  {category.title}
                </Heading>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="min-w-0 break-words rounded-lg border border-border bg-surface px-3 py-1 text-body-small text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
