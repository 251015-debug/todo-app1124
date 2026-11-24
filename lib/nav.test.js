// lib/nav.test.js
import { isCurrentPath } from './nav'

test.each([
  ['/', '/', true],
  ['/about', '/about', true],
  ['/about/', '/about', true],
  ['/about/', '/', false],
  ['/', '/about', false],
])('pathname %s と href %s → %s', (pathname, href, expected) => {
  expect(isCurrentPath(pathname, href)).toBe(expected)
})
