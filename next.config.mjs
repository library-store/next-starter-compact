import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

/** @type {import('next').NextConfig} */
export default withNextIntlConfig({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    
  },
  webpack: (config) => {
    config.externals.push({
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
    });

    return config;
  },
});
