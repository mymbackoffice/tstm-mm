import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local vinext previews do not expose Cloudflare's ASSETS/IMAGES bindings.
  // Serve the supplied school photographs directly instead of proxying them
  // through the image optimizer, which keeps local and hosted rendering equal.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
