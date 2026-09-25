---
version: alpha
colors:
  paper: "#F2F5F2"
  surface: "#FAFBF9"
  ink: "#182A28"
  muted: "#66736F"
  line: "#D6DEDA"
  blue: "#3548B8"
  lime: "#D8E568"
typography:
  display:
    fontFamily: "Iowan Old Style, Noto Serif CJK SC, Songti SC, serif"
    lineHeight: "1.16"
  body:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    lineHeight: "1.8"
  utility:
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, monospace"
    lineHeight: "1.4"
spacing:
  pageGutter: "clamp(1.25rem, 5vw, 4rem)"
rounded:
  small: "2px"
  control: "3px"
omitted:
  - section: components
    reason: "This static blog demo uses semantic HTML and page-specific editorial styles."
  - section: elevation
    reason: "Flat paper surfaces and rules carry hierarchy without shadows."
---

## Overview

**North Star:** a contemporary writer's field notebook, organized with the quiet precision of a small reading-room catalogue. The audience is a reader arriving for a thoughtful, unhurried personal blog. This is a content-first brand surface, not an application dashboard.

**Signature:** a pale ruled-paper note with one chartreuse tab and a deep-blue index mark. Use this motif in the home introduction and small navigation details; keep article pages calm.

**References:** learn from the text-first article discovery and tag/search patterns in [Chirpy](https://chirpy.cotes.page/) and the responsive navigation/content hierarchy in [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/). Keep the final layout lighter and more typographic than either theme.

**Anti-references:** generic gradient hero banners, pill-card grids, decorative stock imagery, and app-dashboard chrome.

## Colors

Use the cool paper and ink colors for the reading surface. Blue is the navigation and link color. Chartreuse is a small index accent only; it must not carry meaning by color alone. Keep body text at ink and muted text at a contrast that remains readable.

## Typography

Use a CJK-capable system sans for body copy and a system serif stack for large editorial titles. Use the utility face only for dates, issue labels, and small metadata. Avoid remote font dependencies.

## Layout

The home page uses a wide editorial introduction above a two-column article-and-notes layout. Long-form articles use one centered, narrow reading column. At phone widths, stack the columns, preserve generous line-height, and keep all navigation available.

## Elevation & Depth

Prefer thin rules, aligned baselines, and one tinted note surface. Do not use drop shadows for static content.

## Shapes

Use square corners or a 2–3px control radius. Avoid rounded cards and pill-shaped labels.

## Components

Links remain visibly underlined or use the blue index color. Buttons use a plain outline or text treatment. Every interactive element has a visible keyboard focus state.

## Do's and Don'ts

- Keep the blog title, article title, and date hierarchy clear.
- Use the sample author copy as editable demo content.
- Keep motion limited to short color transitions; respect reduced-motion settings.
- Do not add image dependencies or tracking scripts to the starter.
