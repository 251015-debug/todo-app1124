// lib/nav.js
export function isCurrentPath(pathname, href) {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  return normalized === href
}
