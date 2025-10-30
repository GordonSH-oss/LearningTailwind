# 🛣️ 路由使用指南

## 📍 URL 路径对应关系

您的应用现在有以下页面：

| URL 路径 | 组件文件 | 页面内容 |
|---------|---------|---------|
| `/` | `App.jsx` | 基础教程 - 7个实用示例 |
| `/advanced` | `AdvancedExamples.jsx` | 高级示例 - 6个复杂组件 |
| `/about` | `About.jsx` | 关于页面 - 项目介绍 |

## 🚀 访问方式

### 方法 1：直接在浏览器输入

```
http://localhost:5173/           ← 首页（基础教程）
http://localhost:5173/advanced   ← 高级示例
http://localhost:5173/about      ← 关于页面
```

### 方法 2：点击导航栏

所有页面顶部都有统一的导航栏，点击链接即可切换页面！

```
🎨 Tailwind 教程  [基础教程] [高级示例] [关于] [🌙 深色]
```

## 🎯 路由配置文件说明

### 1. `main.jsx` - 路由核心配置

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />           {/* 首页 */}
      <Route path="advanced" element={<AdvancedExamples />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
</BrowserRouter>
```

**说明：**
- `BrowserRouter` - 启用浏览器路由
- `Routes` - 路由规则容器
- `Route` - 单个路由规则
- `path="/"` + `element={<Layout />}` - 所有页面使用 Layout 布局
- 嵌套的 Route - 具体页面内容

### 2. `Layout.jsx` - 统一布局

```jsx
<Layout>
  ├── 导航栏（固定在顶部）
  │   ├── Logo
  │   ├── 导航链接
  │   └── 深色模式切换
  └── <Outlet /> ← 这里会被替换成具体页面内容
</Layout>
```

**功能：**
- ✅ 统一的导航栏
- ✅ 深色模式全局控制
- ✅ 当前页面高亮显示
- ✅ 响应式设计

### 3. 页面组件

```
App.jsx              ← 基础教程页面
AdvancedExamples.jsx ← 高级示例页面
About.jsx            ← 关于页面
```

## 💡 如何添加新页面？

### 步骤 1：创建新组件

```jsx
// src/NewPage.jsx
function NewPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold">新页面</h1>
    </div>
  )
}

export default NewPage
```

### 步骤 2：添加路由

在 `main.jsx` 中添加：

```jsx
import NewPage from './NewPage.jsx'

// ...

<Route path="new" element={<NewPage />} />
```

### 步骤 3：添加导航链接（可选）

在 `Layout.jsx` 的导航栏中添加：

```jsx
<Link 
  to="/new" 
  className="text-gray-700 hover:text-indigo-600 transition-colors"
>
  新页面
</Link>
```

完成！现在访问 `http://localhost:5173/new` 就能看到新页面了！

## 🔗 React Router 核心概念

### Link - 导航链接

```jsx
<Link to="/about">关于</Link>
// 点击后跳转，不会刷新页面！
```

**vs 传统 `<a>` 标签：**
- `<a href="/about">` - 会刷新整个页面 ❌
- `<Link to="/about">` - 只替换内容，不刷新 ✅

### useLocation - 获取当前路径

```jsx
import { useLocation } from 'react-router-dom'

function MyComponent() {
  const location = useLocation()
  console.log(location.pathname) // 输出: "/advanced"
}
```

### useNavigate - 编程式导航

```jsx
import { useNavigate } from 'react-router-dom'

function MyComponent() {
  const navigate = useNavigate()
  
  const goToAbout = () => {
    navigate('/about')
  }
  
  return <button onClick={goToAbout}>前往关于页面</button>
}
```

### Route 嵌套

```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />      {/* / */}
  <Route path="about" element={<About />} />  {/* /about */}
  
  {/* 可以进一步嵌套 */}
  <Route path="products" element={<Products />}>
    <Route path=":id" element={<ProductDetail />} />  {/* /products/123 */}
  </Route>
</Route>
```

## 📝 常见问题

### Q: 刷新页面后 404？

**原因：** Vite 开发服务器默认配置正确，不会有这个问题。

### Q: 如何传递参数？

**URL 参数：**
```jsx
// 路由配置
<Route path="user/:id" element={<User />} />

// User 组件中
import { useParams } from 'react-router-dom'

function User() {
  const { id } = useParams()
  return <div>用户 ID: {id}</div>
}
```

**查询参数：**
```jsx
// URL: /search?keyword=react
import { useSearchParams } from 'react-router-dom'

function Search() {
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') // 'react'
}
```

### Q: 如何设置默认重定向？

```jsx
import { Navigate } from 'react-router-dom'

<Route path="/" element={<Navigate to="/home" replace />} />
```

### Q: 404 页面怎么做？

```jsx
// 创建 NotFound.jsx
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-4">页面不存在</p>
        <Link to="/" className="text-blue-600 mt-4 inline-block">
          返回首页
        </Link>
      </div>
    </div>
  )
}

// 在路由最后添加
<Route path="*" element={<NotFound />} />
```

## 🎨 样式提示

导航链接的激活状态可以这样实现：

```jsx
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation()
  
  return (
    <Link 
      to="/about"
      className={`
        px-4 py-2 transition-colors
        ${location.pathname === '/about' 
          ? 'text-indigo-600 font-bold' 
          : 'text-gray-600 hover:text-indigo-600'
        }
      `}
    >
      关于
    </Link>
  )
}
```

## 🔗 资源链接

- [React Router 官方文档](https://reactrouter.com/)
- [React Router 教程](https://reactrouter.com/docs/en/v6/getting-started/tutorial)

---

现在您的项目已经是一个完整的多页面应用了！🎉

使用导航栏或直接输入 URL 来浏览不同的页面吧！

