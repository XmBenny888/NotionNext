import { siteConfig } from '@/lib/config'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="py-20 px-4 text-center bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          Professional Patient Care
        </h1>
        <p className="text-[clamp(1.5rem,3vw,2rem)] text-blue-600 dark:text-blue-400 mb-6 font-light">
          Compassion in Action, Health in Focus
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          We provide expert, reliable, and empathetic care to enhance the quality of life for every client.
        </p>
        <Link
          href="/services"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
        >
          Explore Our Services
        </Link>
      </div>
    </section>
  )
}