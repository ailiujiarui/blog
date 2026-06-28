import { readFileSync } from 'node:fs';

const files = {
  index: readFileSync('src/pages/index.astro', 'utf8'),
  styles: readFileSync('src/styles/global.css', 'utf8'),
  header: readFileSync('src/components/Header.astro', 'utf8'),
  postCard: readFileSync('src/components/PostCard.astro', 'utf8'),
  search: readFileSync('src/components/Search.astro', 'utf8'),
};

const required = [
  ['index', 'FIELD NOTES / CODE / LIFE'],
  ['index', 'build note'],
  ['index', 'aplus-marquee'],
  ['index', 'aplus-side'],
  ['index', 'Build fast, learn faster'],
  ['index', 'heatmap-section'],
  ['index', 'heatmap-layout'],
  ['index', 'heatmap-panel'],
  ['index', 'heat-cell'],
  ['index', '开源之夏'],
  ['index', '随笔'],
  ['styles', 'paperScan'],
  ['styles', 'paper-grid'],
  ['styles', 'aplus-post'],
  ['styles', 'aplus-post-meta'],
  ['styles', 'heatmap-grid'],
  ['styles', 'heatmap-layout'],
  ['styles', 'heatmap-panel'],
  ['styles', 'heat-cell'],
  ['styles', 'position: sticky'],
  ['header', 'site-status'],
  ['postCard', 'aplus-post'],
  ['postCard', 'aplus-post-meta'],
  ['search', 'search-footnote'],
];

const forbidden = [
  ['index', '欢迎来到极光博客'],
  ['index', 'text-gradient'],
  ['index', '技术笔记'],
  ['index', '设计实验'],
  ['search', 'npm run build'],
  ['postCard', '装饰性渐变光晕'],
  ['header', 'bg-gradient-to-br'],
];

const failures = [];

for (const [file, needle] of required) {
  if (!files[file].includes(needle)) {
    failures.push(`Missing ${needle} in ${file}`);
  }
}

for (const [file, needle] of forbidden) {
  if (files[file].includes(needle)) {
    failures.push(`Forbidden ${needle} still present in ${file}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('A+ editorial design markers verified.');
