# 🐰 Labubu高清壁纸画廊 - React版本

基于React + Aceternity UI + Framer Motion构建的现代化壁纸画廊应用。

## ✨ 特性

- 🎨 **现代化UI**: 使用Aceternity UI组件和Tailwind CSS
- 🎭 **流畅动画**: Framer Motion提供丝滑的交互动画
- 📱 **响应式设计**: 完美适配桌面端和移动端
- 🔍 **智能搜索**: 支持标题和标签搜索
- 🏷️ **分类筛选**: 6大分类，精准筛选
- 📄 **智能分页**: 可调节页面大小，键盘导航
- 🖼️ **全屏预览**: 高清图片和视频预览
- ⬇️ **一键下载**: 支持高清原图下载
- ⌨️ **键盘快捷键**: 提升操作效率

## 🚀 快速开始

### 环境要求
- Node.js 16+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 🏗️ 技术栈

- **React 18** - 现代化React框架
- **Vite** - 快速构建工具
- **Tailwind CSS** - 实用优先的CSS框架
- **Framer Motion** - 专业动画库
- **Lucide React** - 精美图标库

## 📁 项目结构

```
src/
├── components/          # React组件
│   ├── Sidebar.jsx     # 侧边栏组件
│   ├── Gallery.jsx     # 画廊网格
│   ├── GalleryItem.jsx # 单个壁纸卡片
│   ├── Modal.jsx       # 预览模态框
│   └── Header.jsx      # 头部组件
├── hooks/              # 自定义Hooks
│   ├── useGallery.js   # 画廊数据管理
│   └── useModal.js     # 模态框管理
├── data/               # 数据文件
│   └── galleryData.js  # 壁纸数据
├── styles/             # 样式文件
│   └── index.css       # 全局样式
└── App.jsx             # 主应用组件
```

## 🎯 核心功能

### 数据管理
- 400+高清壁纸数据
- 智能筛选和搜索
- 分页加载优化

### 用户交互
- 流畅的动画效果
- 响应式布局适配
- 键盘快捷键支持

### 媒体处理
- 图片懒加载
- 视频预览支持
- 高清原图下载

## ⌨️ 键盘快捷键

- `Ctrl/Cmd + K` - 聚焦搜索框
- `←/→` - 上一页/下一页
- `Esc` - 关闭模态框

## 🎨 自定义主题

项目使用Tailwind CSS，可以在`tailwind.config.js`中自定义主题色彩：

```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#667eea', // 主色调
      },
      secondary: {
        500: '#764ba2', // 辅助色
      }
    }
  }
}
```

## 📱 响应式断点

- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+
- `2xl`: 1536px+

## 🔧 开发指南

### 添加新的壁纸数据
在`src/data/galleryData.js`中添加新的数据项：

```js
{
  id: 新ID,
  url: "图片URL",
  title: "标题",
  category: "分类",
  resolution: "分辨率",
  type: "image", // 或 "video"
  format: "jpg",
  tags: ["标签1", "标签2"]
}
```

### 自定义组件
所有组件都支持props传递，可以轻松扩展功能。

## 🚀 部署

### Vercel部署
```bash
npm run build
# 上传dist文件夹到Vercel
```

### Netlify部署
```bash
npm run build
# 上传dist文件夹到Netlify
```

## 📄 许可证

MIT License - 仅供学习和个人使用

## 🙏 致谢

- [React](https://reactjs.org/) - 用户界面库
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Lucide](https://lucide.dev/) - 图标库
- [Vite](https://vitejs.dev/) - 构建工具

---

**项目地址**: https://gitcode.com/LEEJHSE/react_code  
**原版项目**: 基于原生JavaScript版本重构  
**技术支持**: React + Aceternity UI生态系统
