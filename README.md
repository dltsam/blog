# 纸边集 · 个人博客 Demo

一个基于 Jekyll 和 GitHub Pages 的中文博客起始站。文章使用 Markdown 编写，提交到 main 分支后由 GitHub Pages 自动构建和发布。

## 页面

- 首页：博客介绍、置顶文章、最近文章和本地搜索
- 文章归档：按年份浏览，支持标题、摘要和主题搜索
- 关于：可替换的示例作者介绍
- 每篇文章：独立阅读页
- RSS：https://dltsam.github.io/blog/feed.xml

## 发布到 GitHub Pages

仓库名使用 blog。进入仓库 Settings → Pages，在 Build and deployment 中选择 Deploy from a branch，分支选择 main，目录选择 /(root)，保存后访问 https://dltsam.github.io/blog/。

GitHub Pages 站点是公开网页。发布前请替换示例作者介绍和示例邮箱。

## 写新文章

在 _posts 目录新建 YYYY-MM-DD-short-title.md，文件开头加入 YAML 信息：

    ---
    title: 文章标题
    date: 2026-09-25 10:00:00 +0800
    categories: [随笔]
    excerpt: 一句话摘要。
    ---

后面直接写 Markdown 正文。文章时间按 Asia/Shanghai 展示。

## 本地预览

安装 Ruby 与 Bundler 后，在项目目录运行 bundle install，再运行 bundle exec jekyll serve。终端会显示本地预览地址。

## 改成自己的博客

先改 _config.yml 里的标题、简介和站点 URL，再替换 about.md 中的示例介绍、删除或改写 _posts 中的示例文章。域名可先使用 github.io 地址，之后再绑定自定义域名。
