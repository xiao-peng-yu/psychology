import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "生活中的心理学",
  description: "一个由 VitePress 构建的心理学学习空间。",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "专题",
        items: [
          { text: "基础", link: "/guide/foundations" },
          { text: "心智与大脑", link: "/guide/mind-brain" },
          { text: "情绪专题", link: "/guide/emotion" },
          { text: "沟通专题", link: "/guide/communication" },
          { text: "信念专题", link: "/guide/beliefs" },
          { text: "原生家庭", link: "/guide/family-of-origin" },
          { text: "社会心理", link: "/guide/social" },
          { text: "发展与人格", link: "/guide/development" },
          { text: "应用", link: "/guide/applied" },
          { text: "研究方法（选读）", link: "/guide/methods" }
        ]
      }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "入门",
          items: [
            { text: "基础", link: "/guide/foundations" },
            { text: "心智与大脑", link: "/guide/mind-brain" }
          ]
        },
        {
          text: "核心专题",
          items: [
            { text: "情绪专题", link: "/guide/emotion" },
            { text: "沟通专题", link: "/guide/communication" },
            { text: "信念专题", link: "/guide/beliefs" },
            { text: "原生家庭", link: "/guide/family-of-origin" },
            { text: "社会心理", link: "/guide/social" },
            { text: "发展与人格", link: "/guide/development" },
            { text: "应用", link: "/guide/applied" }
          ]
        },
        {
          text: "方法与证据（选读）",
          items: [{ text: "研究方法", link: "/guide/methods" }]
        }
      ]
    },
    search: {
      provider: "local"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/" }
    ],
    footer: {
      message: "为好奇的心灵准备的心理学笔记。",
      copyright: "Copyright 2026"
    }
  }
});
