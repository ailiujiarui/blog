import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// 部署到用户站 https://<用户名>.github.io/ 时 base 用 '/'
// 部署到项目站 https://<用户名>.github.io/<仓库名>/ 时改成 '/<仓库名>/'
// site 改成你的最终访问域名（含 base 路径）
export default defineConfig({
  site: 'https://ailiujiarui.github.io',
  base: '/blog/',
  integrations: [tailwind(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
