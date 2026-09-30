import { AboutSection } from '../components/home/AboutSection'
import { ContactCtaSection } from '../components/home/ContactCtaSection'
import { DataProjectsSection } from '../components/home/DataProjectsSection'
import { EducationSection } from '../components/home/EducationSection'
import { ExperienceSection } from '../components/home/ExperienceSection'
import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection'
import { HeroSection } from '../components/home/HeroSection'
import { ProfessionalLearningSection } from '../components/home/ProfessionalLearningSection'
import { SkillsSection } from '../components/home/SkillsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <DataProjectsSection />
      <EducationSection />
      <ProfessionalLearningSection />
      <AboutSection />
      <ContactCtaSection />
    </>
  )
}
