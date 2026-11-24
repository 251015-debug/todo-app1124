'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { appName } from '@/lib/config'
import { isCurrentPath } from '@/lib/nav'

const links = [
  { href: '/', label: 'TODO' },
  { href: '/help', label: '使い方' },
  { href: '/about', label: 'このアプリについて' },
  { href: '/tips', label: 'コツ' } ,
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="header">
      <span className="app-name">{appName}</span>
      <nav>
        {links.map((link) => (
	  const isCurrent = isCurrentPath(pathname,link.pref)
          <Link
            key={link.href}
            href={link.href}
            className={isCurrent ? 'nav-link active' : 'nav-link'}
            aria-current={isCurrent ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
