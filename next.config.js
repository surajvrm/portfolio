// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const repoName = 'portfolio'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : undefined,
}

module.exports = nextConfig