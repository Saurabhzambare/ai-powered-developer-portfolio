import type { ContactInfo } from './types'

export const contactInfo = {
  email: 'zambaresaurabh10@gmail.com',
  location: 'Vadodara, Gujarat, India',
  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/Saurabhzambare',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saurabh-zambare-b29b851b4/',
    },
  ],
} as const satisfies ContactInfo
