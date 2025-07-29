"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient de fond avec les nouvelles couleurs Fixify */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#e6f3ff]"></div>
      
      {/* Particules flottantes avec la couleur #0677bf */}
      <div className="absolute inset-0">
        {/* Grandes formes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#0677bf]/10 to-[#0056a0]/5 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-[#e6f3ff] rounded-full opacity-40 animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-[#0677bf]/8 to-[#0056a0]/4 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
        
        {/* Petites formes */}
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#0677bf]/30 rounded-full opacity-40 animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#0677bf]/20 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-[#0677bf]/25 rounded-full opacity-50 animate-bounce" style={{animationDelay: '4s'}}></div>
        
        {/* Formes géométriques */}
        <div className="absolute top-1/4 left-1/2 w-6 h-6 bg-[#e6f3ff] rotate-45 opacity-30 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-8 h-8 bg-gradient-to-br from-[#0677bf]/8 to-[#0056a0]/4 rotate-12 opacity-25 animate-pulse" style={{animationDelay: '2.5s'}}></div>
        
        {/* Cercles Fixify */}
        <div className="absolute top-1/2 left-1/6 w-16 h-16 border-2 border-[#0677bf]/20 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/5 right-1/5 w-12 h-12 border border-[#0677bf]/15 rounded-full opacity-40 animate-bounce" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
      </div>
      
      {/* Grille subtile */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 119, 191, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 119, 191, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  )
}