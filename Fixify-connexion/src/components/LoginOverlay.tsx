"use client"

import { useEffect, useState } from "react"
import { LoginForm } from "./LoginForm"
import { X, ArrowLeft } from "lucide-react"

interface LoginOverlayProps {
  isOpen: boolean
  onClose: () => void
  onLogin?: (email: string, password: string) => void
}

export function LoginOverlay({ isOpen, onClose, onLogin }: LoginOverlayProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <>
      {/* Overlay backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-[2px] transition-all duration-500 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Modal container */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`relative transform transition-all duration-500 ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
        }`}>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 group"
            aria-label="Fermer"
          >
            <X className="h-5 w-5 text-gray-600 group-hover:text-gray-800" />
          </button>
          
          {/* Back button for mobile */}
          <button
            onClick={onClose}
            className="absolute -top-4 -left-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 group md:hidden"
            aria-label="Retour"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600 group-hover:text-gray-800" />
          </button>
          
          {/* Modal content with glassmorphism effect */}
          <div className="relative max-w-md w-full mx-auto">
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"></div>
            
            {/* Content */}
            <div className="relative p-8">
              <LoginForm onSubmit={onLogin} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}