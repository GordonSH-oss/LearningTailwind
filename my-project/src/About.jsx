function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            关于本项目 📚
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            一个完整的 Tailwind CSS 学习教程
          </p>
        </div>

        {/* 主要内容卡片 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            🎯 项目简介
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            这是一个专为学习 Tailwind CSS 设计的完整教程项目。通过实际的代码示例和详细的文档，
            帮助您快速掌握 Tailwind CSS 的核心概念和实用技巧。
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            项目包含基础教程、高级示例以及可复用的组件模式，让您在实践中学习，边做边学。
          </p>
        </div>

        {/* 特性网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              快速上手
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              清晰的代码示例和详细的注释，让您能够快速理解和应用 Tailwind CSS。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              实用示例
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              涵盖按钮、表单、卡片、导航等常见组件，直接应用到您的项目中。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-4">🌙</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              深色模式
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              所有示例都支持深色模式，学习如何构建现代化的自适应界面。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              响应式设计
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              学习如何使用 Tailwind 的断点系统创建完美适配各种屏幕的界面。
            </p>
          </div>
        </div>

        {/* 技术栈 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            🛠️ 技术栈
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium">
              React 19
            </span>
            <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full font-medium">
              Tailwind CSS v4
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full font-medium">
              Vite 7
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-medium">
              React Router
            </span>
            <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full font-medium">
              ESLint
            </span>
          </div>
        </div>

        {/* 学习资源 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            📖 学习资源
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📄</span>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">START_HERE.md</h3>
                <p className="text-gray-600 dark:text-gray-300">快速开始指南和学习路径</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">TAILWIND_GUIDE.md</h3>
                <p className="text-gray-600 dark:text-gray-300">完整的 Tailwind CSS 教程文档</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">QUICK_REFERENCE.md</h3>
                <p className="text-gray-600 dark:text-gray-300">常用类名速查手册</p>
              </div>
            </div>
          </div>
        </div>

        {/* 底部提示 */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            💡 使用顶部导航栏浏览不同的教程页面
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Made with ❤️ for learning Tailwind CSS
          </p>
        </div>

      </div>
    </div>
  )
}

export default About

