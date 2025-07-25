import { siteConfig } from '@/lib/config'

export const ServicePillars = () => {
  const services = [
    {
      title: 'Daily Living Assistance',
      description: 'Ensuring comfort and dignity through personal and mobility support.',
      icon: 'fas fa-home'
    },
    {
      title: 'Health Monitoring',
      description: 'Regularly tracking vital signs to promptly identify any health status changes.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Emotional Support',
      description: 'Providing compassionate companionship to alleviate feelings of loneliness and anxiety.',
      icon: 'fas fa-hand-holding-heart'
    },
    {
      title: 'Professional Training',
      description: 'Offering certified training programs for aspiring Patient Care Technicians.',
      icon: 'fas fa-graduation-cap'
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Our Core Service Pillars</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We focus on four key areas to provide comprehensive support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className={`${service.icon} text-xl text-blue-600 dark:text-blue-400`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}