![Cover](./cover.png)

<h1 align="center">bilibili-stats</h1>

<p align="center">
  <img alt="Vercel" src="https://vercelbadge.vercel.app/api/kaichii/bilibili-stats" />
  <a href="https://img.shields.io/github/languages/code-size/kaichii/bilibili-stats">
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/kaichii/bilibili-stats">
  </a>
  <a href="https://github.com/kaichii/bilibili-stats/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/kaichii/bilibili-stats">
  </a>
  <a href="https://github.com/kaichii/bilibili-stats/issues">
    <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/kaichii/bilibili-stats">
  </a>
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/kaichii/bilibili-stats?style=social">
</p>

B 站数据卡片生成器，使用 B 站用户数据生成资料卡片（Generate bilibili stats card by free bilibili API）。

### 如何使用（How to use）?

**嵌入 Markdown（Embed in Markdown）**

```md
![bili-card](https://bilibili-readme-stats.vercel.app/api?id=12951817)
```

![bili-card](https://bilibili-readme-stats.vercel.app/api?id=12951817)

或者使用 `<img>` (or use `<img>` tag)，添加自定义样式（apply style attrs）。

```md
<img style="[styles]" alt="bili-card" src="https://bilibili-readme-stats.vercel.app/api?id=12951817"></img>
```

### 主题（Themes）

- 默认（Default）

```md
![bili-card](https://bilibili-readme-stats.vercel.app/api?id=12951817&card=default)
```

![bili-card](https://bilibili-readme-stats.vercel.app/api?id=12951817&card=default)

- B 站粉（Pink）

```md
![bili-card](https://bilibili-readme-stats.vercel.app/api?id=12951817&card=pink)
```

![bili-card](https://bilibili-readme-stats.vercel.app/api?id=12951817&card=pink)

没有你想要的样式？去[自定义](https://github.com/kaichii/bilibili-stats/edit/main/src/cards.js)自己的卡片样式（[DIY](https://github.com/kaichii/bilibili-stats/edit/main/src/cards.js)）。

### 参数（Params）

| 参数（Param） | 描述（description） | 是否必填（Mandatory） | 例子（Sample）                                                                                     |
| ------------- | ------------------- | --------------------- | -------------------------------------------------------------------------------------------------- |
| id            | B 站 `uid`          | true                  | `uid`：12951817                                                                                    |
| card          | 支持的卡片          | false                 | 默认：default，更多：pink、[more...](https://github.com/kaichii/bilibili-stats/edit/main/src/cards.js) |
| cache_seconds | 缓存                | false                 | 默认：14400                                                                                        |

### 相关项目（Related）

- 灵感来源（Inspired by） [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) by [@anuraghazra](https://github.com/anuraghazra)

### 开源许可（License）

[MIT](https://github.com/kaichii/bilibili-stats/blob/main/LICENSE) © [Kaichi](https://github.com/kaichii)
