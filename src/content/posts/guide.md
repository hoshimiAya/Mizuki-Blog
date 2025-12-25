---
title: 指南
published: 2025-12-25
updated: 2025-12-25T08:00:00
description: 博客模板
tags: [Mizuki, 教学]
category: 指南
draft: false
---

这款博客模板是基于 [Astro](https://astro.build/) 构建的。对于本指南未涉及的内容，你可以在 [Astro 官方文档](https://docs.astro.build/) 中找到答案。

## 文章的 Front-matter 示例

```yaml
---
title: 指南
published: 2025-12-25
description: 博客模板
image: "./cover.jpeg"
tags: ["Mizuki", "教学"]
category: Guides
draft: false
---

```

| 属性名        | 说明 |
|---------------|------|
| `title`       | 文章标题。 |
| `published`   | 文章的发布日期。 |
| `updated`     | 文章的最后更新时间。 |
| `pinned`      | 是否将文章置顶显示。 |
| `description` | 文章的简短描述，会显示在首页或文章列表中。 |
| `image`       | 文章的封面图片路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：使用 `public` 目录下的图片<br/>3. 无前缀：相对于 Markdown 文件的本地路径 |
| `tags`        | 文章的标签，用于分类和搜索。 |
| `category`    | 文章所属的分类。 |
| `licenseName` | 文章内容的授权协议名称。 |
| `author`      | 文章作者。 |
| `sourceLink`  | 文章内容的来源链接或参考资料。 |
| `draft`       | 是否为草稿，草稿不会在博客中显示。 |
| `encrypted`   | 是否启用加密。如果为 `true`，文章内容需要密码才能访问。 |
| `password`    | 当 `encrypted` 为 `true` 时，访问文章所需的密码。 |


## 文章文件的存放位置

你的文章文件应放在 src/content/posts/ 目录下。你也可以创建子目录来更好地组织文章和资源文件。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```