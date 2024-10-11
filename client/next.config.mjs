/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3-inventorydatadashboard.s3.amazonaws.com",
                port: "",
                pathname: "/**"

            }
        ]
    }
};

export default nextConfig;
