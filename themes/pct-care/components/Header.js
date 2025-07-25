import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = (props) => {
  const router = useRouter()

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo区域 */}
          <Link href="/" className="flex items-center space-x-3">
            <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8v-2h3V7h2v4h3v2h-3v4h-2z"/>
            </svg>
            <span className="text-2xl font-serif font-bold text-foreground">PCT Care</span>
          </Link>

          {/* 导航链接 - 桌面版 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">Home</Link>
            <Link href="#services" className="text-gray-600 hover:text-primary transition-colors duration-300">Services</Link>
            <Link href="#articles" className="text-gray-600 hover:text-primary transition-colors duration-300">Articles</Link>
            <Link 
              href="#contact"
              className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </nav>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button className="text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header