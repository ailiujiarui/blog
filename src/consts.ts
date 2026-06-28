// 站点全局配置 —— 把这里改成你自己的信息即可
export const SITE = {
  /** 站点名称（显示在导航栏和 Logo） */
  title: '歌鱼',
  /** 站点副标题 / 一句话描述 */
  description: '我思故我在',
  /** 作者名 */
  author: '歌鱼',
  /** 邮箱（用于 RSS / SEO） */
  email: 'you@example.com',
  /** 站点语言 */
  lang: 'zh-CN',
  /** 首页每页文章数 */
  pageSize: 6,
  /** 社交链接（留空字符串则不显示） */
  social: {
    github: 'https://github.com/ailiujiarui',
    twitter: '',
    email: 'mailto:you@example.com',
  },
} as const;

/** 顶部导航（路径相对站点根，部署到子路径时会自动加 base） */
export const NAV_LINKS = [
  { text: '首页', href: '/' },
  { text: '文章', href: '/posts' },
  { text: '标签', href: '/tags' },
  { text: '关于', href: '/about' },
] as const;

/** 预先展示的标签：即使暂时没有文章，也会生成标签页 */
export const MANUAL_TAGS = ['Godot学习'] as const;
