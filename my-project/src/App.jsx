import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* 主内容区 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* 1. 布局与间距示例 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              1. 布局与间距
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  卡片 1
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  使用 grid 和 gap 实现响应式布局
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  卡片 2
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  自动适配不同屏幕尺寸
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  卡片 3
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  使用 p-6、rounded-xl、shadow-md
                </p>
              </div>
            </div>
          </section>

          {/* 2. 按钮样式示例 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              2. 按钮样式
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-purple-600 text-black rounded-full hover:bg-purple-700 shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-600/60 transition-all duration-300">
                主要按钮
              </button>
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                成功按钮
              </button>
              <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
                危险按钮
              </button>
              <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
                次要按钮
              </button>
              <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-200">
                边框按钮
              </button>
            </div>
          </section>

          {/* 3. 计数器示例 - 交互与状态 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              3. 交互示例：计数器
            </h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md">
              <div className="text-center">
                <div className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  {count}
                </div>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setCount(count - 1)}
                    className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition-all duration-150"
                  >
                    减少
                  </button>
                  <button
                    onClick={() => setCount(0)}
                    className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 active:scale-95 transition-all duration-150"
                  >
                    重置
                  </button>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition-all duration-150"
                  >
                    增加
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 4. 表单示例 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              4. 表单元素
            </h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    用户名
                  </label>
                  <input
                    type="text"
                    placeholder="请输入用户名"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    消息
                  </label>
                  <textarea
                    rows="4"
                    placeholder="请输入您的消息..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none resize-none transition-all duration-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:scale-98 transition-all duration-200 font-medium"
                >
                  提交表单
                </button>
              </form>
            </div>
          </section>

          {/* 5. Flexbox 示例 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              5. Flexbox 布局
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-purple-400 to-pink-500 rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      用户名称
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      user@example.com
                    </p>
                  </div>
                </div>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  关注
                </button>
              </div>
            </div>
          </section>

          {/* 6. 徽章与标签 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              6. 徽章与标签
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Vite
              </span>
              <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                Hot
              </span>
            </div>
          </section>

          {/* 7. 提示信息 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              7. 提示信息
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-blue-800 dark:text-blue-200">
                  ℹ️ 这是一条信息提示
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 rounded-r-lg">
                <p className="text-green-800 dark:text-green-200">
                  ✅ 操作成功完成！
                </p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded-r-lg">
                <p className="text-yellow-800 dark:text-yellow-200">
                  ⚠️ 请注意这个警告信息
                </p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 rounded-r-lg">
                <p className="text-red-800 dark:text-red-200">
                  ❌ 发生了一个错误
                </p>
              </div>
            </div>
          </section>

        </main>

        {/* 底部 */}
        <footer className="bg-white dark:bg-gray-800 shadow-lg mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-600 dark:text-gray-400">
              🎨 Tailwind CSS 入门教程 - 探索更多工具类来创建精美界面
            </p>
          </div>
        </footer>

    </div>
  )
}

export default App
