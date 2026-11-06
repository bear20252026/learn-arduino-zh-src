# Learn Arduino（中文版）· 源码工程

由 [learn-arduino-red.vercel.app](https://learn-arduino-red.vercel.app/zh/) 的构建产物**逆推还原**的可读源码工程——
代码逻辑与线上行为 100% 一致，全部模块语义化命名并经 Prettier 格式化，课程数据明文可改。

> 还原方法与"压缩分块 → 源码模块"的完整映射见 [ARCHITECTURE-REVERSE.md](ARCHITECTURE-REVERSE.md)

## 快速开始

```bash
npm install     # 安装 vite + prettier（仅构建工具，运行时零依赖）
npm run dev     # 开发服务器 http://localhost:8123/zh/
npm run build   # 构建到 dist/
npm run preview # 预览构建产物
```

无框架、无运行时依赖——就是原生 ES Module + three.js（已内联在 `src/stage.js`）。

## 目录结构

```
├── index.html            # 根入口（按浏览器语言跳转 / 或 /zh/）
├── zh/index.html         # 中文版入口
├── src/
│   ├── entry.js          # 入口：语言检测 → 加载语言包 → 启动主程序
│   ├── app.js            # 主程序：UI / 状态 / 代码编辑器 / 串口监视器模拟
│   ├── stage.js          # 3D 舞台：three.js 程序化建模的 Arduino Uno 全部元件
│   ├── kit.js            # ★ 16 节课程数据（标题/步骤/接线/示例代码）——改课程改这里
│   ├── thumbs.js         # 课程缩略图 SVG
│   ├── locales/zh.js     # ★ 中文翻译表——改文案改这里
│   ├── locales/*.js      # 其余 11 种语言包（可整文件删除不需要的）
│   ├── styles.css        # 全站样式 + @font-face
│   └── fonts/            # 24 个 woff2 字体文件
└── public/               # 图标 / PWA manifest
```

## 与"压缩克隆版"的关系

同仓库作者的另一份仓库 [learn-arduino-zh](https://github.com/bear20252026/learn-arduino-zh)
存放的是**逐字节原样的构建产物克隆**（不可读、不可改、但 1:1 原样）。
本仓库 = 同一份代码的**还原可读版**，构建后行为一致。

## 声明与致谢

- 原站设计与开发：**Dilum Sanjaya**（[x.com/DilumSanjaya](https://x.com/DilumSanjaya) · [github.com/dilums](https://github.com/dilums)）
- 原站源码未公开，本工程为对其**公开构建产物**的格式化还原，仅供个人学习与离线使用
- 如原作者认为不妥，将立即删除
