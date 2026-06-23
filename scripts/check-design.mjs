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
  ['index', '把想清楚的事'],
  ['styles', 'paperScan'],
  ['styles', 'paper-grid'],
  ['styles', 'aplus-post'],
  ['header', 'site-status'],
  ['postCard', 'aplus-post'],
  ['search', 'search-footnote'],
];

const forbidden = [
  ['index', '欢迎来到极光博客'],
  ['index', 'text-gradient'],
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
