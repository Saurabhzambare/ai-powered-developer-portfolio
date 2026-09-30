import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection'
import { HeroSection } from '../components/home/HeroSection'
import { SkillsSection } from '../components/home/SkillsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <SkillsSection />
    </>
  )
}
