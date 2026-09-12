import { ReactNode } from 'react'

export interface Route {
  path: string
  label: string
  icon?: string
  component?: ReactNode
  children?: Route[]
}

export const routes: Route[] = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/compliance',
    label: 'Compliance',
    children: [
      {
        path: '/compliance',
        label: 'Regulatory & Compliance',
      },
      {
        path: '/licences',
        label: 'Licences & Registrations',
      },
      {
        path: '/consumer-protection',
        label: 'Consumer Protection',
      },
    ],
  },
  {
    path: '/legal',
    label: 'Legal',
    children: [
      {
        path: '/privacy-policy',
        label: 'Privacy Policy',
      },
      {
        path: '/terms-conditions',
        label: 'Terms & Conditions',
      },
      {
        path: '/cookie-policy',
        label: 'Cookie Policy',
      },
      {
        path: '/data-protection',
        label: 'Data Protection',
      },
      {
        path: '/disclaimer',
        label: 'Disclaimer',
      },
      {
        path: '/acceptable-use',
        label: 'Acceptable Use Policy',
      },
    ],
  },
]
