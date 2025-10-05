import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable fully static export
  output: "export",
  // Ensure <Image> works without the image optimizer in static export
  images: {
    unoptimized: true,
  },
  // Configure for custom domain
  trailingSlash: true,
  // Base path if needed (leave empty for root domain)
  basePath: "",
  // Asset prefix for static files
  assetPrefix: "",
  // Disable x-powered-by header
  poweredByHeader: false,
  // Configure for production domain
  env: {
    CUSTOM_DOMAIN: "sancarlosbahais.org",
  },
};

export default nextConfig;
