import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Standalone output for Namecheap/cPanel Node.js Selector deployment
  // (see scripts/deploy-cpanel.mjs). Produces .next/standalone/server.js.
  output: 'standalone',
  // Defaults to .next. Set NEXT_DIST_DIR to build into a separate directory, so a
  // production build can be verified without disturbing a running `next dev`
  // (dev owns .next/dev, and clearing .next takes the dev server down with it).
  distDir: process.env.NEXT_DIST_DIR || '.next',
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
