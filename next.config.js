/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/tekken-frame-data'
}
// config確認のため
console.log('nextConfig: ', nextConfig);
console.log('process.env: ', process.env);
module.exports = nextConfig
