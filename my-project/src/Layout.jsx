import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Layout() {
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation()
  
  // 判断当前路径是否激活
  const isActive = (path) => location.pathname === path

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* 导航栏 */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
              🎨 Tailwind 教程
            </Link>
            
            {/* 导航链接 */}
            <div className="flex items-center gap-6">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                基础教程
              </Link>
              <Link 
                to="/advanced" 
                className={`font-medium transition-colors ${
                  isActive('/advanced') 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                高级示例
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                关于
              </Link>
              
              {/* 深色模式切换 */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 text-sm"
              >
                {darkMode ? '🌞 浅色' : '🌙 深色'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <Outlet />
    </div>
  )
}

export default Layout

