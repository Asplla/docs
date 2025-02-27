# TailwindCSS 安装及配置
## 创建您的项目
如果您还没有设置新的Vite项目，请先创建一个。最常见的方法是使用Create Vite。
```bash
npm create vite@latest my-project -- --template react
cd my-project
```
## 安装 TailwindCSS
安装tailwindcss及其对等依赖项，然后生成tailwind.config.js和postcss.config.js文件。

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
## 配置 TailwindCSS
打开tailwind.config.js文件并将其配置为以下内容：
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
打开 vite.config.ts文件并配置为以下内容：
```ts
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
```
## 添加 TailwindCSS 到您的 CSS
打开src/index.css文件并将其配置为以下内容：
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## 启动您的项目
```bash
npm run dev
```
