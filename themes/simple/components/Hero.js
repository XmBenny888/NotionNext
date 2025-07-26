import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useGlobal } from '@/lib/global'

export default function Hero() {
  // 删除未使用的pageData变量
  // const { pageData } = useGlobal()
  const heroConfig = siteConfig('SIMPLE_HERO_CONFIG') || {
    title: 'Professional Patient Care',
    subtitle: 'Compassion in Action, Health in Focus',
    description: 'We provide expert, reliable, and empathetic care to enhance the quality of life for every client.',
    buttonText: 'Explore Our Services',
    buttonLink: '/services'
  }

  // 添加配置参数验证
  if (typeof heroConfig !== 'object' || heroConfig === null) {
    heroConfig = {
      title: 'Professional Patient Care',
      subtitle: 'Compassion in Action, Health in Focus',
      description: 'We provide expert, reliable, and empathetic care to enhance the quality of life for every client.',
      buttonText: 'Explore Our Services',
      buttonLink: '/services'
    };
  }

  // 确保链接格式正确
  if (!heroConfig.buttonLink || typeof heroConfig.buttonLink !== 'string') {
    heroConfig.buttonLink = '/services';
  }

  return (
    <section className="py-12 md:py-24 bg-blue-50 dark:bg-blue-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
            {heroConfig.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-300 mb-6">
            {heroConfig.subtitle}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {heroConfig.description}
          </p>
          <div className="flex justify-center">
            <Link
              href={heroConfig.buttonLink}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              {heroConfig.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}