# 纸边集

一个基于 Jekyll 与 GitHub Pages 的中文技术博客，记录 GIS、空间数据、前端工程和问题复盘。文章放在 `_posts/`，以 Markdown 维护。

## 页面

- 首页：最新文章、文章列表和本地搜索
- [文章归档](https://dltsam.github.io/blog/archive/)：按年份浏览、搜索标题与主题
- [关于](https://dltsam.github.io/blog/about/)：写作方向与联系方式
- [RSS](https://dltsam.github.io/blog/feed.xml)：订阅更新

## 写文章

在 `_posts/` 新建 `YYYY-MM-DD-short-title.md`，例如：

```yaml
---
title: 文章标题
date: 2026-09-26 10:00:00 +0800
categories: [前端工程]
excerpt: 一句话说明文章讨论的问题。
reading_time: 5
---
```

正文使用 Markdown。写实际案例时，请去除单位名称、内部地址、账号凭据和不适合公开的源数据；示例数据需明确为示意。

## 本地预览

使用与 GitHub Pages 的 Jekyll 3 兼容的 Ruby 环境，安装 Bundler 后运行：

```sh
bundle install
bundle exec jekyll serve
```

打开终端显示的本地地址。部署前可运行 `bundle exec jekyll build`，检查生成的 `_site/`。

## 发布

仓库使用 `main` 分支的根目录作为 GitHub Pages 来源。GitHub Pages 配置位于仓库的 Settings → Pages；站点地址为 <https://dltsam.github.io/blog/>。站点内容公开，提交前请检查文章与“关于”页。
