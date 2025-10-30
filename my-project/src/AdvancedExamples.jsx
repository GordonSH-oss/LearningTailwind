import { useState } from 'react'

/**
 * Tailwind CSS 高级示例组件
 * 这个文件包含更多实用的组件示例
 */

export default function AdvancedExamples() {
  const [activeTab, setActiveTab] = useState('profile')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    { id: 1, text: '新消息来自张三', type: 'info', read: false },
    { id: 2, text: '订单已发货', type: 'success', read: false },
    { id: 3, text: '账户余额不足', type: 'warning', read: true },
  ])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 1. 标签页（Tabs） */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            1. 标签页组件
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* 标签头 */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-4 font-medium transition-colors duration-200 ${
                  activeTab === 'profile'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                个人资料
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-6 py-4 font-medium transition-colors duration-200 ${
                  activeTab === 'settings'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                设置
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`px-6 py-4 font-medium transition-colors duration-200 ${
                  activeTab === 'notifications'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                通知
              </button>
            </div>

            {/* 标签内容 */}
            <div className="p-6">
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    个人资料
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    这里显示用户的个人信息和资料设置。
                  </p>
                </div>
              )}
              {activeTab === 'settings' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    账户设置
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    这里可以修改密码、邮箱等账户设置。
                  </p>
                </div>
              )}
              {activeTab === 'notifications' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    通知设置
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    管理您的通知偏好设置。
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 2. 下拉菜单 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            2. 下拉菜单
          </h2>
          <div className="relative inline-block">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2"
            >
              菜单选项
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* 下拉内容 */}
            {isMenuOpen && (
              <div className="absolute top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  📊 仪表盘
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  ⚙️ 设置
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  👤 个人资料
                </a>
                <div className="border-t border-gray-200 dark:border-gray-700"></div>
                <a
                  href="#"
                  className="block px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  🚪 退出登录
                </a>
              </div>
            )}
          </div>
        </section>

        {/* 3. 通知列表 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            3. 通知列表
          </h2>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start gap-4 p-4 rounded-lg border transition-all duration-200 ${
                  notification.read
                    ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                    : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                }`}
              >
                {/* 图标 */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    notification.type === 'info'
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                      : notification.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
                  }`}
                >
                  {notification.type === 'info' && '📧'}
                  {notification.type === 'success' && '✅'}
                  {notification.type === 'warning' && '⚠️'}
                </div>

                {/* 内容 */}
                <div className="flex-1">
                  <p className="text-gray-800 dark:text-white font-medium">
                    {notification.text}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    2 小时前
                  </p>
                </div>

                {/* 未读标记 */}
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-2"></div>
                )}

                {/* 操作按钮 */}
                <button
                  onClick={() => {
                    setNotifications(
                      notifications.map((n) =>
                        n.id === notification.id ? { ...n, read: !n.read } : n
                      )
                    )
                  }}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {notification.read ? '标为未读' : '标为已读'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 价格卡片 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            4. 价格卡片
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 基础版 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                基础版
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                适合个人使用
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800 dark:text-white">
                  ¥99
                </span>
                <span className="text-gray-600 dark:text-gray-400">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 mr-2">✓</span>
                  基础功能
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 mr-2">✓</span>
                  5GB 存储空间
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 mr-2">✓</span>
                  邮件支持
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
                选择计划
              </button>
            </div>

            {/* 专业版（推荐） */}
            <div className="bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl shadow-2xl p-8 transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-bold">
                推荐
              </div>
              <h3 className="text-xl font-bold text-white mb-2">专业版</h3>
              <p className="text-blue-100 mb-6">适合团队使用</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">¥299</span>
                <span className="text-blue-100">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  所有基础功能
                </li>
                <li className="flex items-center text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  50GB 存储空间
                </li>
                <li className="flex items-center text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  优先支持
                </li>
                <li className="flex items-center text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  高级分析
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                立即开始
              </button>
            </div>

            {/* 企业版 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                企业版
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                适合大型组织
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800 dark:text-white">
                  定制
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 mr-2">✓</span>
                  所有专业功能
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 mr-2">✓</span>
                  无限存储
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 支持
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 mr-2">✓</span>
                  专属客户经理
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
                联系销售
              </button>
            </div>
          </div>
        </section>

        {/* 5. 进度条 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            5. 进度指示器
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  项目进度
                </span>
                <span className="text-gray-600 dark:text-gray-400">75%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div className="bg-linear-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-500 w-3/4"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  存储使用
                </span>
                <span className="text-gray-600 dark:text-gray-400">45%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div className="bg-linear-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-500"
                     style={{ width: '45%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  任务完成
                </span>
                <span className="text-gray-600 dark:text-gray-400">90%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div className="bg-linear-to-r from-purple-500 to-pink-600 h-full rounded-full transition-all duration-500"
                     style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 统计数据卡片 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            6. 数据统计
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-3xl font-bold mb-1">2,543</div>
              <div className="text-blue-100">总用户数</div>
            </div>

            <div className="bg-linear-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-3xl font-bold mb-1">+12.5%</div>
              <div className="text-green-100">增长率</div>
            </div>

            <div className="bg-linear-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-3xl font-bold mb-1">¥89,432</div>
              <div className="text-purple-100">总收入</div>
            </div>

            <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-3xl font-bold mb-1">4.8</div>
              <div className="text-orange-100">平均评分</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

