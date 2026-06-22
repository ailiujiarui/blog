---
title: 极光玻璃态设计指南
description: 拆解本博客使用的渐变 blob 背景、毛玻璃卡片与明暗主题配色方案。
pubDate: 2026-02-05
tags:
  - 设计
  - CSS
draft: false
---

这个博客的视觉由三个核心元素构成：**流动极光背景**、**毛玻璃卡片**、**渐变文字**。下面拆开来看每一块怎么做。

## 1. 流动极光背景

不用 Canvas、不用 JS，只用三个大色块加 `filter: blur()` 和位移动画。

```css
.aurora-blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
  animation: float 22s ease-in-out infinite;
}
```

关键点：

- 尺寸用 `vw`，让 blob 在大屏上也能铺满
- 三个 blob 用不同的紫、粉、青色 + 不同动画时长，避免节奏一致显得机械
- `will-change: transform` 让浏览器把它放到独立图层，性能更稳

## 2. 毛玻璃卡片

```css
.glass {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(20px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.6);
}
```

`backdrop-filter` 是玻璃质感的灵魂。`saturate(140%)` 让背景的色彩透过来时更鲜艳，避免发灰。

## 3. 渐变文字

```css
.text-gradient {
  background: linear-gradient(120deg, #a855f7, #ec4899, #38bdf8);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-x 6s ease infinite;
}
```

`background-position` 在 200% 的画布上左右滑动，文字的渐变色就流动起来了。

## 4. 明暗双主题

用 CSS 变量 + Tailwind 的 `darkMode: 'class'`：

- `:root` 定义亮色变量
- `.dark` 覆盖暗色变量
- 一个内联脚本在首屏前读 `localStorage` 决定加不加 `.dark`

```js
const stored = localStorage.getItem('theme');
const isDark = stored
  ? stored === 'dark'
  : matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.classList.toggle('dark', isDark);
```

## 小结

炫酷不等于堆特效。**克制的渐变 + 干净的留白 + 流畅的动效**，就是高级感的来源。
