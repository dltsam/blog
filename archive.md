---
layout: default
title: 文章归档
description: 按时间翻阅纸边集里写下的文章。
permalink: /archive/
---
<div class="page-wrap archive-page">
  <header class="page-heading">
    <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"></span>文章索引 · {{ site.posts.size }} 篇</p>
    <h1>慢慢翻，<em>总会遇见。</em></h1>
    <p>所有文章都从这里开始，也都可以从这里重新读起。</p>
  </header>
  <div class="search-row archive-search">
    <label class="search-box">
      <span class="sr-only">搜索文章归档</span>
      <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5"/><path d="m13 13 4 4"/></svg>
      <input type="search" data-post-search placeholder="按标题或主题搜索" autocomplete="off">
    </label>
    <button class="search-clear" type="button" data-search-clear disabled>清除</button>
  </div>
  <p class="search-status" data-search-status aria-live="polite">共 {{ site.posts.size }} 篇文章</p>
  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  <div class="archive-list">
    {% for year in posts_by_year %}
    <section class="archive-year" aria-labelledby="year-{{ year.name }}">
      <h2 id="year-{{ year.name }}">{{ year.name }}<span>年</span></h2>
      <div class="post-list" data-post-list>
        {% for post in year.items %}
        <article class="post-row" data-search-item data-search-value="{{ post.title | append: ' ' | append: post.excerpt | append: ' ' | append: post.categories | strip_html | downcase | escape }}">
          <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%m.%d" }}</time>
          <div class="post-row-copy">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
            <p>{{ post.excerpt | strip_html | escape }}</p>
          </div>
          <span class="post-category">{{ post.categories.first | default: "随笔" }}</span>
        </article>
        {% endfor %}
      </div>
    </section>
    {% endfor %}
    <p class="empty-search" data-search-empty hidden>没有找到匹配的文章，换个关键词试试。</p>
  </div>
</div>
