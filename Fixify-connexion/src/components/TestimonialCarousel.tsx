"use client"

import { useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"
import { ImageWithFallback } from './figma/ImageWithFallback'

export function TestimonialCarousel() {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Propriétaire d'iPhone",
      content: "Service exceptionnel ! Mon écran a été réparé en moins de 2 heures avec une qualité parfaite.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c2b1?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Pierre Martin",
      role: "Entrepreneur",
      content: "Fixify a sauvé ma journée ! Réparation rapide et prix très compétitif pour mon laptop.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Sophie Chen",
      role: "Étudiante",
      content: "Excellente communication et suivi en temps réel. Je recommande vivement !",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ]

  useEffect(() => {
    setMounted(true)
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  if (!mounted) return null

  return (
    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-fixify hover-lift">
      <div className="flex items-center justify-between mb-4">
        <Quote className="w-8 h-8 text-[#0677bf]/20" />
        <div className="flex space-x-1">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#0677bf]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}