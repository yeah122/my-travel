const buildHash = Date.now(); // 정적 리소스 로딩 시 캐싱 방지

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_HASH: buildHash,
  },
};

export default nextConfig;
