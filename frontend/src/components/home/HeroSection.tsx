import { Container } from '../layout/Container'

export function HeroSection() {
  return (
    <section
      aria-label="Introduction"
      className="w-full border-b border-border bg-surface py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="max-w-3xl" />
      </Container>
    </section>
  )
}
