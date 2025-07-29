"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Users, Clock, Shield } from "lucide-react"

export function AnimatedStats() {
  const [mounted, setMounted] = useState(false)
  const [animatedValues, setAnimatedValues] = useState({
    repairs: 0,
    rating: 0,
    time: 0,
    satisfaction: 0
  })

  useEffect(() => {
    setMounted(true)
    
    const targets = {
      repairs: 10000,
      rating: 4.9,
      time: 24,
      satisfaction: 98
    }

    const animateValue = (key: keyof typeof targets, target: number, duration: number) => {
      const start = performance.now()
      const animate = (currentTime: number) => {
        const elapsed = currentTime - start
        const progress = Math.min(elapsed / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = target * easeOutQuart
        
        setAnimatedValues(prev => ({
          ...prev,
          [key]: key === 'rating' ? Math.round(currentValue * 10) / 10 : Math.round(currentValue)
        }))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }

    // Démarrer les animations avec des délais décalés
    setTimeout(() => animateValue('repairs', targets.repairs, 2000), 500)
    setTimeout(() => animateValue('rating', targets.rating, 1500), 800)
    setTimeout(() => animateValue('time', targets.time, 1000), 1100)
    setTimeout(() => animateValue('satisfaction', targets.satisfaction, 1800), 1400)
  }, [])

  if (!mounted) return null

  const stats = [
    {
      icon: TrendingUp,
      value: animatedValues.repairs.toLocaleString(),
      suffix: '+',
      label: 'Réparations réussies',
      color: 'text-[#0677bf]'
    },
    {
      icon: Users,
      value: animatedValues.rating.toFixed(1),
      suffix: '/5',
      label: 'Note client',
      color: 'text-yellow-500'
    },
    {
      icon: Clock,
      value: animatedValues.time.toString(),
      suffix: 'h',
      label: 'Délai moyen',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      value: animatedValues.satisfaction.toString(),
      suffix: '%',
      label: 'Satisfaction',
      color: 'text-[#0677bf]'
    }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-fixify hover-lift animate-fadeInUp"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className={`p-2 rounded-full bg-gray-50 ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-2xl lg:text-3xl text-gray-900 gradient-text">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs lg:text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}