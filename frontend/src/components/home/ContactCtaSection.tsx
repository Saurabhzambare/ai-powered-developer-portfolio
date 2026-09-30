import { contactInfo } from '../../content/contactInfo'
import { resumeAsset } from '../../content/resumeAsset'
import { Container } from '../layout/Container'
import { Heading } from '../ui/Heading'
import { Link } from '../ui/Link'
import { Text } from '../ui/Text'

export function ContactCtaSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <Heading id="contact-heading" level={2} variant="heading-large">
            Let's Connect
          </Heading>
          {contactInfo.location && (
            <Text variant="body-small" tone="muted" className="mt-4">
              {contactInfo.location}
            </Text>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={resumeAsset.url}
              variant="primary"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </Link>
            {contactInfo.email && (
              <Link href={`mailto:${contactInfo.email}`} variant="secondary">
                Email Me
              </Link>
            )}
            {contactInfo.links.map((profile) => (
              <Link
                key={profile.url}
                href={profile.url}
                variant="text"
                className="inline-flex min-h-11 items-center px-2"
                target="_blank"
                rel="noreferrer"
              >
                {profile.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
