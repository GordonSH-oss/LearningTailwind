# Tailwind CSS 快速参考手册 ⚡

## 常用类名速查表

### 📐 布局

```jsx
// Display
block inline inline-block flex grid hidden

// Flexbox
flex-row flex-col flex-wrap
justify-start justify-center justify-between justify-around
items-start items-center items-end items-stretch
gap-4 gap-x-4 gap-y-4

// Grid
grid-cols-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3
col-span-2 row-span-2

// Position
relative absolute fixed sticky
top-0 right-0 bottom-0 left-0
z-10 z-20 z-50

// Overflow
overflow-hidden overflow-auto overflow-scroll
```

### 📏 间距（Spacing）

**规则：数字 × 0.25rem = 实际大小**
- `4` = 1rem = 16px
- `8` = 2rem = 32px

```jsx
// Padding
p-4      // 全部内边距
px-4     // 左右内边距
py-4     // 上下内边距
pt-4     // 上内边距
pr-4     // 右内边距
pb-4     // 下内边距
pl-4     // 左内边距

// Margin
m-4      // 全部外边距
mx-auto  // 水平居中
my-4     // 上下外边距
mt-4     // 上外边距
-mt-4    // 负上外边距

// Space Between
space-x-4  // 子元素水平间距
space-y-4  // 子元素垂直间距
```

### 📐 尺寸（Sizing）

```jsx
// Width
w-full w-screen w-1/2 w-1/3 w-1/4
w-16 w-32 w-64 w-96
max-w-sm max-w-md max-w-lg max-w-xl max-w-7xl

// Height
h-full h-screen h-16 h-32 h-64
min-h-screen max-h-screen
```

### 🎨 颜色

**格式：`{属性}-{颜色}-{深度}`**

```jsx
// 背景色
bg-white bg-gray-100 bg-blue-500 bg-red-600

// 文字颜色
text-white text-gray-800 text-blue-600

// 边框颜色
border-gray-300 border-blue-500

// 常用颜色深度
50   // 最浅
100 200 300 400 500 600 700 800 900
950  // 最深
```

**颜色调色板：**
```
gray slate zinc neutral stone
red orange amber yellow
lime green emerald teal cyan
sky blue indigo violet purple
fuchsia pink rose
```

### ✏️ 文字（Typography）

```jsx
// 字号
text-xs text-sm text-base text-lg text-xl
text-2xl text-3xl text-4xl text-5xl text-6xl

// 字重
font-thin font-light font-normal
font-medium font-semibold font-bold font-black

// 对齐
text-left text-center text-right text-justify

// 行高
leading-none leading-tight leading-normal leading-loose

// 其他
italic underline line-through
uppercase lowercase capitalize
truncate  // 文字截断
```

### 🔲 边框（Borders）

```jsx
// 边框宽度
border border-2 border-4 border-8
border-t border-r border-b border-l

// 边框样式
border-solid border-dashed border-dotted

// 圆角
rounded rounded-sm rounded-md rounded-lg rounded-xl
rounded-2xl rounded-3xl rounded-full
rounded-t-lg rounded-b-lg  // 上下圆角
```

### 🌫️ 阴影和效果

```jsx
// 阴影
shadow-sm shadow shadow-md shadow-lg shadow-xl shadow-2xl
shadow-inner shadow-none

// 透明度
opacity-0 opacity-50 opacity-75 opacity-100

// 模糊
blur blur-sm blur-md blur-lg
backdrop-blur backdrop-blur-sm
```

### 🎭 变换和过渡

```jsx
// Scale
scale-95 scale-100 scale-105 scale-110

// Rotate
rotate-45 rotate-90 rotate-180 -rotate-45

// Translate
translate-x-4 translate-y-4 -translate-x-4

// Transform Origin
origin-center origin-top origin-bottom

// 过渡
transition transition-all transition-colors
transition-transform transition-opacity
duration-150 duration-200 duration-300 duration-500
ease-in ease-out ease-in-out
```

### 🖱️ 交互状态

```jsx
// Hover
hover:bg-blue-700 hover:text-white hover:scale-105

// Focus
focus:ring-2 focus:ring-blue-500 focus:outline-none

// Active
active:scale-95 active:bg-blue-800

// Disabled
disabled:opacity-50 disabled:cursor-not-allowed

// Group Hover（父元素悬停时）
group-hover:translate-x-2
```

### 📱 响应式断点

```jsx
// 移动优先（默认小屏幕）
<div className="w-full md:w-1/2 lg:w-1/3">

// 断点对照
默认      // < 640px
sm:      // ≥ 640px
md:      // ≥ 768px
lg:      // ≥ 1024px
xl:      // ≥ 1280px
2xl:     // ≥ 1536px
```

### 🌙 深色模式

```jsx
dark:bg-gray-800 dark:text-white
dark:border-gray-700 dark:hover:bg-gray-700
```

## 实用组合模式

### 按钮

```jsx
// 主要按钮
className="px-6 py-3 bg-blue-600 text-white rounded-lg 
           hover:bg-blue-700 active:scale-95 
           transition-all duration-200"

// 次要按钮
className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg 
           hover:bg-gray-300 transition-colors"

// 边框按钮
className="px-6 py-3 border-2 border-blue-600 text-blue-600 
           rounded-lg hover:bg-blue-50 transition-colors"
```

### 卡片

```jsx
className="bg-white rounded-xl shadow-md p-6 
           hover:shadow-xl transition-shadow duration-300"
```

### 输入框

```jsx
className="w-full px-4 py-3 border border-gray-300 rounded-lg 
           focus:ring-2 focus:ring-blue-500 focus:border-transparent 
           outline-none transition-all"
```

### 导航栏

```jsx
// 容器
className="bg-white shadow-lg"

// 内容区
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// 链接
className="text-gray-700 hover:text-blue-600 transition-colors"
```

### 居中容器

```jsx
// 水平居中
className="mx-auto"

// 完全居中
className="flex items-center justify-center"

// 页面居中
className="min-h-screen flex items-center justify-center"
```

### 响应式网格

```jsx
// 自动响应
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// 固定列数，自动适配
className="grid grid-cols-auto-fit gap-4"
```

## 实用技巧

### 1. 条件类名

```jsx
// 使用模板字符串
className={`base-classes ${condition ? 'true-classes' : 'false-classes'}`}

// 示例
className={`px-4 py-2 rounded-lg ${
  isActive 
    ? 'bg-blue-600 text-white' 
    : 'bg-gray-200 text-gray-800'
}`}
```

### 2. 组合多个条件

```jsx
className={`
  px-4 py-2 rounded-lg
  ${isActive && 'bg-blue-600 text-white'}
  ${isDisabled && 'opacity-50 cursor-not-allowed'}
  ${isLoading && 'animate-pulse'}
`}
```

### 3. 使用 clsx/classnames 库

```bash
npm install clsx
```

```jsx
import clsx from 'clsx'

className={clsx(
  'px-4 py-2 rounded-lg',
  isActive && 'bg-blue-600 text-white',
  isDisabled && 'opacity-50 cursor-not-allowed'
)}
```

### 4. 提取重复样式

```jsx
// 定义常量
const buttonBase = "px-6 py-3 rounded-lg transition-colors duration-200"
const buttonPrimary = `${buttonBase} bg-blue-600 text-white hover:bg-blue-700`
const buttonSecondary = `${buttonBase} bg-gray-200 text-gray-800 hover:bg-gray-300`

// 使用
<button className={buttonPrimary}>主要按钮</button>
<button className={buttonSecondary}>次要按钮</button>
```

## 调试技巧

### 查看元素边界

```jsx
// 临时添加边框
className="border border-red-500"

// 临时添加背景
className="bg-red-100"
```

### 查看所有子元素

```jsx
// 给所有子元素添加边框
className="[&>*]:border [&>*]:border-blue-500"
```

## VS Code 插件推荐

1. **Tailwind CSS IntelliSense** - 自动补全和提示
2. **PostCSS Language Support** - 语法高亮
3. **Headwind** - 自动排序类名

## 常见问题解决

### 样式不生效？

1. 检查类名拼写
2. 确保没有使用动态字符串拼接（Tailwind 无法识别）
3. 检查是否有冲突的 CSS

### 类名太长？

```jsx
// ❌ 避免
<div className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200">

// ✅ 推荐：提取为组件
<Button variant="primary">点击我</Button>
```

### 深色模式不工作？

确保最外层容器有 `dark` 类：

```jsx
<div className={darkMode ? 'dark' : ''}>
  <div className="bg-white dark:bg-gray-900">
    {/* 内容 */}
  </div>
</div>
```

## 记忆口诀

- **间距**：p = padding，m = margin，x = 水平，y = 垂直
- **颜色**：数字越大越深（50最浅，950最深）
- **响应式**：移动优先，从小到大
- **状态**：hover > focus > active
- **组合**：属性-颜色-深度（如：bg-blue-500）

---

💡 **提示**：将此文档加入书签，开发时随时查阅！

