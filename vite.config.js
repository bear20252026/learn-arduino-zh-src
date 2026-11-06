import { defineConfig } from "vite";

export default defineConfig({
  // 相对路径 base：构建产物可部署到任意子路径（本地根路径 / 或 GitHub Pages 子目录）
  base: "./",
  build: {
    // 多页面：根路径（英文默认/语言跳转）+ 中文版 /zh/
    rollupOptions: {
      input: {
        main: "index.html",
        zh: "zh/index.html",
      },
    },
    // 关闭动态 import 的预加载注入：本工程的动态导入自带预加载助手（源自原站），
    // vite 再注入一层清单会产生悬空的 /undefined 预加载请求
    modulePreload: false,
    assetsInlineLimit: 0,
  },
  server: { port: 8123 },
});
