// next.config.mjs
const isGithubPages = process.env.GITHUB_PAGES === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? 'export' : undefined,
  basePath: isGithubPages ? '/todo-app' : '',
  trailingSlash: isGithubPages,
  images: {
    unoptimized: isGithubPages,
  },
}

export default nextConfig
