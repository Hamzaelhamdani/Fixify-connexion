"use client"

import { useEffect, useState } from "react"
import { Wrench, Smartphone, Laptop, Tablet, Monitor, Headphones } from "lucide-react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const icons = [Wrench, Smartphone, Laptop, Tablet, Monitor, Headphones]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Éléments flottants avec icônes de réparation */}
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute opacity-5 text-[#0677bf]"
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index * 12)}%`,
            animation: `float${index + 1} ${6 + index}s ease-in-out infinite`,
            animationDelay: `${index * 0.8}s`,
          }}
        >
          <Icon className="w-8 h-8" />
        </div>
      ))}

      {/* Cercles décoratifs */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#0677bf]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-[#0677bf]/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#0677bf]/4 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Lignes géométriques */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100">
          <defs>
            <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="0.5" fill="#0677bf" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    </div>
  )
}