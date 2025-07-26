import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { MenuList } from './MenuList'

/**
 * 网站顶部
 * LOGO 和 菜单
 * @returns
 */
export const Header = props => {
  return (
    <header className='w-full px-6 bg-white  dark:bg-black relative z-20'>
      <div className='mx-auto max-w-4xl md:flex justify-between items-center'>
        <Link
          href='/'
          className='logo py-6 w-full text-center md:text-left md:w-auto text-gray-dark no-underline flex justify-center items-center'>
          {siteConfig('TITLE')}
        </Link>
        <div className='w-full md:w-auto text-center md:text-right'>
          {/* 右侧文字 */}
        </div>
      </div>

      {/* 菜单 */}
      <MenuList {...props} />
    </header>
  )
}

<Link
  href="/"
  className="menu-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500 dark:text-gray-300 dark:hover:text-white transition-all duration-200"
  // 添加过渡动画
>
{siteConfig('TITLE')}
</Link>
