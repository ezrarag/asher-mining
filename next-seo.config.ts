import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  titleTemplate: '%s | Asher Mining',
  defaultTitle: 'Asher Mining — Crypto Mining & Consulting',
  description:
    'Asher Mining specializes in 24/7 Bitcoin mining operations and consulting: mining education, investment advisory, and partnership consulting.',
  additionalMetaTags: [
    { name: 'theme-color', content: '#0b0f1a' },
    { name: 'keywords', content: 'Bitcoin, mining, crypto, consulting, blockchain, Puerto Rico, Minnesota' }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashermining.com',
    siteName: 'Asher Mining',
    title: 'Asher Mining — Crypto Mining & Consulting',
    description:
      '24/7 Bitcoin mining operations. Consulting services across education, investment advisory, and partnerships.',
  },
  twitter: {
    handle: '@ashermining',
    site: '@ashermining',
    cardType: 'summary_large_image',
  },
}

export default config

