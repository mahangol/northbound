import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic', 'normal'],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://northbound.agency'),
  title: {
    default: 'Northbound — Marketing that compounds',
    template: '%s — Northbound',
  },
  description:
    'Northbound is a performance marketing partner for B2B and DTC brands that treats every dollar of spend like capital allocation. SEO, paid media, lifecycle and conversion systems built to compound.',
  keywords: [
    'digital marketing agency',
    'performance marketing',
    'SEO agency',
    'Google Ads management',
    'Meta Ads agency',
    'conversion rate optimization',
    'marketing automation',
    'B2B growth agency',
  ],
  authors: [{ name: 'Northbound' }],
  openGraph: {
    title: 'Northbound — Marketing that compounds',
    description:
      'A performance marketing partner that treats every dollar of spend like capital allocation.',
    url: 'https://northbound.agency',
    siteName: 'Northbound',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northbound — Marketing that compounds',
    description:
      'A performance marketing partner that treats every dollar of spend like capital allocation.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#182350',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-paper text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
