/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
	// assetPrefix: isProd ? "/jaron-static-website" : undefined, 
	output: "export",
};

export default nextConfig;
