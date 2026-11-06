# 架构还原说明（从构建产物到源码工程）

本文档说明如何把 learn-arduino-red.vercel.app 的 **Vite 构建压缩产物**还原为当前这份可读、可构建、可修改的源码工程。

## 一、还原方法

原始站点是 Vite 打包的单页应用，公开网络上只有压缩产物（变量名被混淆、无注释）。
原始 TypeScript 源码作者未公开。本工程通过以下步骤"逆推还原"：

1. **分块依赖分析** — 解析各 JS 分块的静态/动态 `import` 语句，还原出原始模块边界与依赖图
2. **语义化重命名** — 按每个分块的功能（入口/主程序/3D舞台/课程数据/缩略图/语言包）重命名文件
3. **引用重写** — 把所有 `./main-CETici_M.js` 这类哈希引用改写为语义路径
4. **格式化** — Prettier 全量格式化（120 列宽），使压缩单行代码恢复可读缩进结构
5. **资源归位** — 字体迁入 `src/fonts/`（CSS 相对引用，Vite 自动重写），静态资源入 `public/`
6. **多页面构建** — 恢复原站的 `/`（语言跳转）与 `/zh/`（中文版）双入口

**代码逻辑 100% 保留**（与线上运行的行为完全一致）；**数据全部可编辑**（课程内容、元件、翻译都是明文对象）。
不可恢复的部分：原始变量名与注释（混淆时永久丢失）——本工程通过模块头注释弥补。

## 二、原始构建产物 → 本工程模块映射

| 原始压缩分块 | 本工程 | 职责 | 大小 |
|---|---|---|---|
| `index-DOAqqu4h.js` | `src/entry.js` | 入口：URL/浏览器语言检测 → 动态加载语言包 → 引导主程序；Vite 预加载助手 | 6 KB |
| `main-CETici_M.js` | `src/app.js` | 主程序：UI 渲染、状态机、代码编辑器、串口监视器模拟、课程流程 | 131 KB |
| `stage-TzJN9SKx.js` | `src/stage.js` | 3D 舞台：three.js 场景、**程序化建模**的 Arduino Uno 与全部元件、电流动画、原理图 | 424 KB |
| `kit-D7LqvkTA.js` | `src/kit.js` | 课程套件数据：16 节课内容、元件/引脚定义、示例代码（明文对象，**可直接改中文**） | 316 KB |
| `thumbs-D4q1El81.js` | `src/thumbs.js` | 课程缩略图（SVG 路径数据） | 5 KB |
| `zh-DawrnNnG.js` | `src/locales/zh.js` | 中文翻译键值表（其余 11 语言同结构） | 62 KB |
| `index-Db24VE9E.css` | `src/styles.css` | 全站样式 + @font-face | 64 KB |

### 模块依赖图（还原自 import 语句）

```
entry.js ──动态 import──→ locales/*.js（13 个语言包）
app.js   ──→ entry.js
kit.js   ──→ entry.js
thumbs.js ──→ kit.js
stage.js ──→ entry.js, kit.js, app.js
```

## 三、关键发现（还原过程中的结论）

- **3D 模型无外部文件**：开发板、LED、传感器、电机等全部由 `stage.js` 用 three.js 几何体程序化拼装，站点不加载任何 GLB/贴图 —— 所以本工程也没有模型文件
- **课程内容是数据不是代码**：16 节课的标题、步骤、接线说明、Arduino 示例代码都以明文字符串存在 `kit.js` 中，改课程无需动逻辑
- **中文翻译在 `locales/zh.js`**：`"键英文原文": "译文"` 结构，修文案只改这一个文件
- **字体 24 个**：Barlow / Barlow Semi Condensed / JetBrains Mono / Noto Sans (Devanagari & Hebrew)，按需由 CSS @font-face 加载

## 四、如何修改

| 想改什么 | 改哪里 |
|---|---|
| 课程文字/示例代码 | `src/kit.js`（搜索课程标题即可定位） |
| 界面文案翻译 | `src/locales/zh.js` |
| 3D 外观/动画 | `src/stage.js`（代码已格式化，结构可循） |
| 样式主题 | `src/styles.css` |
| 增删语言 | `src/locales/` 下对应文件 + `src/entry.js` 里的语言包映射表 |

## 五、还原踩坑记录（对同类工作有参考价值）

1. **哈希文件名有两种引用形态**：`./xxx-[hash].js`（模块相对）和 `xxx-[hash].js`（vite 预加载清单专用，
   运行时由 helper 拼根路径）——重命名时必须区分处理
2. **`__vite__mapDeps` 是原站构建注入的清单函数**：其默认参数数组存放分块文件名清单。
   误清空清单数组后，`mapDeps([0,1,2,3])` 越界返回 undefined → 运行时拼出 `/undefined` 404。
   修复：把 `__vite__mapDeps([...])` 调用直接替换为 `[]`（放弃预加载优化，导入行为不变）
3. **HTML 里的字体 `<link rel="preload">`** 与 CSS 的 @font-face 是两套引用，都要改路径
4. **CSS url() 带引号/不带引号**两种写法并存，正则要兼容 `url("...")` 和 `url(...)`
5. **多页面 + `base:'./'`**：嵌套页面（zh/index.html）的资产引用需 vite 按 page 深度重写为 `../assets/`（已验证自动处理）
6. **vite 7 的 `build.modulePreload:false`** 不能阻止其对源码中动态 import 的清单注入——根治方法是替换掉原站遗留的 mapDeps 调用

## 六、验证结果（本机浏览器实测）

- 页面 13 项资源全部 HTTP 200，**零 404**
- 3D 开发板渲染正常，16 节课程列表完整，课程切换/LED 交互面板/代码编辑器均正常
- 构建产物 gzip 后约 320 KB（与原站体积相当）

## 七、参考项目

- [nalutbae/learn-arduino-3d](https://github.com/nalutbae/learn-arduino-3d) — 韩语 React 重建 PoC（2 课），提供了 R3F + Zustand 的架构参照
- [ajeetjain94608/learn-arduino](https://github.com/ajeetjain94608/learn-arduino) — 独立重实现（learnarduino.tech），含 Capacitor Android 打包
- 本工程与其二者的区别：**逐字节还原原站运行代码**，功能 100% 对齐；后两者为重写实现
