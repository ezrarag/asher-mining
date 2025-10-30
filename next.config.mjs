/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    turbo: {
      rules: {
        "*.ts": {},
        "*.tsx": {}
      }
    }
  }
};

export default nextConfig;

