// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import("next").NextConfig} */
module.exports = {
    reactStrictMode: false,
  
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
    },
  };
  