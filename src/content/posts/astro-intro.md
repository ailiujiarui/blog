---
title: 用 Astro 5 分钟搭一个极速博客
description: 从 Content Collections 到动态路由，演示如何用 Astro 高效组织内容站点。
pubDate: 2026-03-18
tags:
  - Astro
  - 前端
  - 教程
draft: false
---

[Astro](https://astro.build) 是当下构建内容站点的利器：默认零 JS、构建快、SEO 友好。这篇用本博客的真实结构，讲清楚三件最关键的事。

## 1. Content Collections：给文章加类型

在 `src/content/config.ts` 定义 schema：

```ts
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
```

写文章时 frontmatter 写错字段，编辑器和构建都会报错，体验非常安心。

## 2. 动态路由：一篇文章一个 URL

`src/pages/posts/[...slug].astro` 一个文件搞定所有文章页：

```astro
---
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('posts');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

const post = Astro.props;
const { Content } = await post.render();
---
<Content />
```

## 3. 标签页：自动枚举

`src/pages/tags/[tag].astro` 用 `getStaticPaths` 枚举所有标签，每个标签生成一个列表页，无需手写。

## 为什么不用框架

Astro 的 Islands 架构意味着：

- 文章正文是纯静态 HTML，秒开
- 只在需要交互的地方（比如搜索框）才注入 JS
- Lighthouse 性能分轻松拉满

## 下一步

试试 `npm run dev`，在 `src/content/posts/` 下新建一个 `.md`，刷新就能看到新文章。这就是 Astro 的魔法。
