import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useEffect } from 'react'
import CONFIG from './config'
import { Style } from './style'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import LatestArticles from './components/LatestArticles'
import Footer from './components/Footer'

// 基础布局组件
const LayoutBase = (props) => {
  const { children } = props
  const { isDarkMode } = useGlobal()

  return (
    <div className={`bg-${CONFIG.BACKGROUND_COLOR} font-${CONFIG.FONT_SANS} text-${CONFIG.TEXT_BODY_COLOR} antialiased min-h-screen`}>
      <Style />
      <Header {...props} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

// 首页布局
const LayoutIndex = (props) => {
  return (
    <LayoutBase {...props}>
      <Hero {...props} />
      <Services {...props} />
      <LatestArticles {...props} />
    </LayoutBase>
  )
}

export default {
  LayoutBase,
  LayoutIndex,
  LayoutPostList: LayoutIndex,
  LayoutPost: LayoutBase,
  // 其他布局导出...
}