import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'
import SocialButton from './SocialButton'

/**
 * 网站顶部
 * @returns
 */
export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">PCT Care</span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
