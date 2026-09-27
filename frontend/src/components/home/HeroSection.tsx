import { motion, useReducedMotion } from 'motion/react'
import { candidateProfile } from '../../content/candidateProfile'
import { resumeAsset } from '../../content/resumeAsset'
import { Container } from '../layout/Container'
import { Heading } from '../ui/Heading'
import { Link } from '../ui/Link'
import { Text } from '../ui/Text'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-label="Introduction"
      className="w-full border-b border-border bg-surface py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <motion.div
          className="flex max-w-3xl flex-col gap-5 sm:gap-6"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <Text variant="body-large" className="font-semibold text-primary">
            {candidateProfile.headline}
          </Text>
          <Heading level={1} variant="display" className="text-balance">
            {candidateProfile.name}
          </Heading>
          <Text variant="body-large" tone="muted" className="max-w-2xl">
            {candidateProfile.summary}
          </Text>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="#projects" variant="primary">
              View Projects
            </Link>
            <Link
              href={resumeAsset.url}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
