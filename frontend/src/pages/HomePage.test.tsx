import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { AppRoutes } from '../app/router'
import { candidateProfile } from '../content/candidateProfile'
import { credentials } from '../content/credentials'
import { education } from '../content/education'
import { professionalExperience } from '../content/experience'
import { projects } from '../content/projects'
import { resumeAsset } from '../content/resumeAsset'
import { skillCategories } from '../content/skills'

describe('HomePage', () => {
  it('renders a named hero region on the homepage without starter content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>,
    )

    const main = screen.getByRole('main')

    const hero = within(main).getByRole('region', { name: 'Introduction' })

    expect(hero).toBeInTheDocument()
    expect(
      within(hero).getByRole('heading', {
        level: 1,
        name: candidateProfile.name,
      }),
    ).toBeInTheDocument()
    expect(
      within(hero).getByText(candidateProfile.headline),
    ).toBeInTheDocument()
    expect(within(hero).getByText(candidateProfile.summary)).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    const projectsLink = within(hero).getByRole('link', {
      name: 'View Projects',
    })
    expect(projectsLink).toHaveAttribute('href', '#projects')

    const projectsSection = within(main).getByRole('region', {
      name: 'Featured Projects',
    })
    expect(projectsSection).toHaveAttribute('id', 'projects')
    expect(
      within(projectsSection).getByRole('heading', {
        level: 2,
        name: 'Featured Projects',
      }),
    ).toBeInTheDocument()
    const projectCards = within(projectsSection).getAllByRole('article')
    expect(projectCards).toHaveLength(2)

    const disciplineCard = projectCards[0]
    expect(
      within(disciplineCard).getByRole('heading', {
        level: 3,
        name: 'Discipline System',
      }),
    ).toBeInTheDocument()
    expect(
      within(disciplineCard).getByText(
        'Full-stack productivity application that turns habits into quests, levels, streaks, achievements, and social progression.',
      ),
    ).toBeInTheDocument()
    expect(
      within(disciplineCard).getByText('Django REST Framework'),
    ).toBeInTheDocument()
    expect(within(disciplineCard).getByText('PostgreSQL')).toBeInTheDocument()
    expect(
      within(disciplineCard).getByRole('link', { name: 'GitHub' }),
    ).toHaveAttribute(
      'href',
      'https://github.com/Saurabhzambare/discipline-system',
    )
    expect(
      within(disciplineCard).queryByRole('link', { name: 'Live Demo' }),
    ).toBeNull()
    expect(
      within(disciplineCard).queryByRole('link', { name: 'Case Study' }),
    ).toBeNull()
    expect(within(disciplineCard).queryByRole('img')).toBeNull()

    const epcCard = projectCards[1]
    expect(
      within(epcCard).getByRole('heading', {
        level: 3,
        name: 'EPC Project & Vendor Management System',
      }),
    ).toBeInTheDocument()
    expect(
      within(epcCard).getByText(
        'Implemented C# and .NET foundations for project and vendor management, alongside documented enterprise application design.',
      ),
    ).toBeInTheDocument()
    expect(
      within(epcCard).getByText(
        'C# foundations implemented; MVC application architecture documented.',
      ),
    ).toBeInTheDocument()
    expect(
      within(epcCard)
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toEqual(['C#', '.NET 8', 'LINQ', 'async/await', 'xUnit'])
    expect(
      within(epcCard).getByRole('link', { name: 'GitHub' }),
    ).toHaveAttribute(
      'href',
      'https://github.com/Saurabhzambare/epc-vendor-management',
    )
    expect(
      within(epcCard).queryByRole('link', { name: 'Live Demo' }),
    ).toBeNull()
    expect(
      within(epcCard).queryByRole('link', { name: 'Case Study' }),
    ).toBeNull()
    expect(within(epcCard).queryByRole('img')).toBeNull()
    expect(
      within(projectsSection).queryByRole('heading', {
        name: 'AI-Powered Developer Portfolio',
      }),
    ).toBeNull()

    const skillsSection = within(main).getByRole('region', {
      name: 'Core Technical Skills',
    })
    expect(skillsSection).toHaveAttribute('id', 'skills')
    expect(
      within(skillsSection).getByRole('heading', {
        level: 2,
        name: 'Core Technical Skills',
      }),
    ).toBeInTheDocument()
    const skillCategoryArticles = within(skillsSection).getAllByRole('article')
    expect(skillCategoryArticles).toHaveLength(skillCategories.length)
    expect(
      skillCategoryArticles.map(
        (article) =>
          within(article).getByRole('heading', { level: 3 }).textContent,
      ),
    ).toEqual(skillCategories.map((category) => category.title))

    for (const category of skillCategories) {
      const categoryArticle = within(skillsSection).getByRole('article', {
        name: category.title,
      })
      expect(
        within(categoryArticle).getByRole('heading', {
          level: 3,
          name: category.title,
        }),
      ).toBeInTheDocument()
      expect(
        within(categoryArticle)
          .getAllByRole('listitem')
          .map((item) => item.textContent),
      ).toEqual([...category.skills])
    }
    expect(within(skillsSection).getAllByRole('listitem')).toHaveLength(21)

    const experienceSection = within(main).getByRole('region', {
      name: 'Professional Experience',
    })
    expect(experienceSection).toHaveAttribute('id', 'experience')
    expect(
      within(experienceSection).getByRole('heading', {
        level: 2,
        name: 'Professional Experience',
      }),
    ).toBeInTheDocument()
    const experienceArticles = within(experienceSection).getAllByRole('article')
    expect(experienceArticles).toHaveLength(professionalExperience.length)

    for (const experience of professionalExperience) {
      const article = within(experienceSection).getByRole('article', {
        name: experience.role,
      })
      expect(
        within(article).getByRole('heading', {
          level: 3,
          name: experience.role,
        }),
      ).toBeInTheDocument()
      expect(
        within(article).getByText(experience.organization),
      ).toBeInTheDocument()
      expect(
        within(article).getByText(
          [experience.period.start, experience.period.end].join(' – '),
        ),
      ).toBeInTheDocument()
      expect(
        within(article)
          .getAllByRole('listitem')
          .map((item) => item.textContent),
      ).toEqual([...experience.highlights])
      expect(within(article).getAllByRole('listitem')).toHaveLength(
        experience.highlights.length,
      )
    }
    expect(experienceSection).not.toHaveTextContent('2021 – May 2026')

    const dataProjectsSection = within(main).getByRole('region', {
      name: 'Data & Machine Learning Projects',
    })
    expect(dataProjectsSection).toHaveAttribute('id', 'data-projects')
    expect(
      within(dataProjectsSection).getByRole('heading', {
        level: 2,
        name: 'Data & Machine Learning Projects',
      }),
    ).toBeInTheDocument()

    const dataProjectIds = [
      'market-analysis-banking',
      'mercedes-benz-greener-manufacturing',
      'real-estate-mortgage-analytics',
    ] as const
    const selectedProjects = dataProjectIds.map((id) =>
      projects.find((project) => project.id === id),
    )
    const dataProjectCards = within(dataProjectsSection).getAllByRole('article')
    expect(dataProjectCards).toHaveLength(3)
    expect(
      dataProjectCards.map(
        (card) => within(card).getByRole('heading', { level: 3 }).textContent,
      ),
    ).toEqual(selectedProjects.map((project) => project?.title))

    selectedProjects.forEach((project, index) => {
      expect(project).toBeDefined()
      if (!project) return

      const card = dataProjectCards[index]
      expect(
        within(card).getByRole('heading', { level: 3, name: project.title }),
      ).toBeInTheDocument()
      expect(within(card).getByText(project.summary)).toBeInTheDocument()
      expect(
        within(card)
          .getAllByRole('listitem')
          .map((item) => item.textContent),
      ).toEqual([...project.technologies])
      expect(
        within(card).getByRole('link', { name: 'GitHub' }),
      ).toHaveAttribute('href', project.links.githubUrl)
      expect(within(card).queryByRole('link', { name: 'Live Demo' })).toBeNull()
      expect(
        within(card).queryByRole('link', { name: 'Case Study' }),
      ).toBeNull()
      expect(within(card).queryByRole('img')).toBeNull()
    })
    for (const title of [
      'Discipline System',
      'EPC Project & Vendor Management System',
      'AI-Powered Developer Portfolio',
    ]) {
      expect(
        within(dataProjectsSection).queryByRole('heading', { name: title }),
      ).toBeNull()
    }

    const educationSection = within(main).getByRole('region', {
      name: 'Education',
    })
    expect(educationSection).toHaveAttribute('id', 'education')
    expect(
      within(educationSection).getByRole('heading', {
        level: 2,
        name: 'Education',
      }),
    ).toBeInTheDocument()
    const educationArticles = within(educationSection).getAllByRole('article')
    expect(educationArticles).toHaveLength(education.length)
    expect(
      educationArticles.map(
        (article) =>
          within(article).getByRole('heading', { level: 3 }).textContent,
      ),
    ).toEqual(education.map((record) => record.qualification))

    for (const record of education) {
      const article = within(educationSection).getByRole('article', {
        name: record.qualification,
      })
      expect(
        within(article).getByRole('heading', {
          level: 3,
          name: record.qualification,
        }),
      ).toBeInTheDocument()
      expect(within(article).getByText(record.institution)).toBeInTheDocument()
      expect(
        within(article).getByText(
          [record.period.start, record.period.end].join(' – '),
        ),
      ).toBeInTheDocument()

      if ('details' in record) {
        expect(
          within(article)
            .getAllByRole('listitem')
            .map((item) => item.textContent),
        ).toEqual([...record.details])
      } else {
        expect(within(article).queryByRole('list')).toBeNull()
      }
    }

    const learningSection = within(main).getByRole('region', {
      name: 'Selected Professional Learning',
    })
    expect(learningSection).toHaveAttribute('id', 'professional-learning')
    expect(
      within(learningSection).getByRole('heading', {
        level: 2,
        name: 'Selected Professional Learning',
      }),
    ).toBeInTheDocument()
    expect(
      credentials.every(
        (credential) => credential.kind === 'professional-learning',
      ),
    ).toBe(true)
    const credentialArticles = within(learningSection).getAllByRole('article')
    expect(credentialArticles).toHaveLength(credentials.length)
    expect(
      credentialArticles.map(
        (article) =>
          within(article).getByRole('heading', { level: 3 }).textContent,
      ),
    ).toEqual(credentials.map((credential) => credential.title))

    for (const credential of credentials) {
      const article = within(learningSection).getByRole('article', {
        name: credential.title,
      })
      expect(
        within(article).getByRole('heading', {
          level: 3,
          name: credential.title,
        }),
      ).toBeInTheDocument()
      expect(within(article).getByText(credential.issuer)).toBeInTheDocument()
      if (credential.issuedOn) {
        expect(
          within(article).getByText(credential.issuedOn),
        ).toBeInTheDocument()
      }
      expect(within(article).queryByRole('link')).toBeNull()
    }
    expect(learningSection).not.toHaveTextContent(
      /master(?:'s|s)? (?:degree|program)|postgraduate degree/i,
    )

    const resumeLink = within(hero).getByRole('link', { name: 'View Resume' })
    expect(resumeLink).toHaveAttribute('href', resumeAsset.url)
    expect(resumeLink).toHaveAttribute('target', '_blank')
    expect(resumeLink).toHaveAttribute('rel', 'noreferrer')
    expect(resumeLink).not.toHaveAttribute('download')

    expect(screen.queryByRole('heading', { name: 'Get started' })).toBeNull()
    expect(screen.queryByRole('button', { name: /count is/i })).toBeNull()
    expect(screen.queryByRole('link', { name: 'Explore Vite' })).toBeNull()
  })
})
