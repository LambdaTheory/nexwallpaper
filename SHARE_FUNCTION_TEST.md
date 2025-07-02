# 🔗 分享功能测试指南

## 📊 功能说明

修改后的分享功能现在会生成指向首页特定壁纸详情页的链接，而不是直接分享壁纸图片URL。

## 🛠️ 实现原理

### 1. 分享链接格式
```
https://localhost:3000?wallpaper=WALLPAPER_ID
```

### 2. 功能流程
1. 用户点击分享按钮
2. 生成包含壁纸ID的分享链接
3. 通过Web Share API或剪贴板分享
4. 其他用户点击链接访问首页
5. 自动检测URL参数并打开对应壁纸详情页

## 🧪 测试步骤

### 测试方法1：手动测试
1. 打开 http://localhost:3000
2. 点击任意壁纸打开详情页
3. 点击分享按钮
4. 复制生成的分享链接
5. 在新标签页中打开该链接
6. 验证是否自动打开对应壁纸的详情页

### 测试方法2：直接URL测试
直接在浏览器中访问以下测试链接：

```
http://localhost:3000?wallpaper=labubu_001
http://localhost:3000?wallpaper=labubu_002
http://localhost:3000?wallpaper=labubu_003
```

### 预期效果
- ✅ 页面加载后自动打开对应壁纸的详情页
- ✅ URL参数被清除，保持地址栏干净
- ✅ 分享链接包含完整的壁纸信息

## 🎯 技术特点

### 分享内容优化
- **标题**: `壁纸名称 - Labubu壁纸画廊`
- **描述**: `查看这张精美的XXX壁纸`
- **链接**: `首页 + 壁纸ID参数`

### 兼容性处理
1. **Web Share API**: 现代浏览器原生分享
2. **剪贴板API**: 自动复制链接
3. **降级处理**: prompt手动复制

### 用户体验
- 自动打开详情页（500ms延迟确保加载完成）
- 清除URL参数保持地址栏干净
- 友好的分享提示信息

## 🔍 代码修改点

### Modal.jsx
```javascript
// 构建分享链接：首页 + 壁纸ID参数
const shareUrl = `${window.location.origin}?wallpaper=${item.id}`;
const shareTitle = `${item.title} - Labubu壁纸画廊`;
```

### App.jsx
```javascript
// 处理分享链接 - 检查URL参数中的wallpaper ID
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const wallpaperId = urlParams.get('wallpaper');
  
  if (wallpaperId && items.length > 0) {
    const targetWallpaper = items.find(item => item.id === wallpaperId);
    if (targetWallpaper) {
      setTimeout(() => {
        openModal(targetWallpaper);
        window.history.replaceState({}, document.title, window.location.pathname);
      }, 500);
    }
  }
}, [items, openModal]);
```

## 📱 移动端支持

- iOS Safari: 支持Web Share API
- Android Chrome: 支持Web Share API  
- 其他浏览器: 自动降级到剪贴板复制

---

**修改时间**: 2025年7月2日  
**功能状态**: ✅ 已完成  
**测试地址**: http://localhost:3000
