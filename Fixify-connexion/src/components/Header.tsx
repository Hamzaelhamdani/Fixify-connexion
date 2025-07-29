"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Fixify - exactement comme dans l'image */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#0677bf] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl text-gray-900">Fixify</span>
          </div>

          {/* Navigation desktop - identique à l'image */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#0677bf] transition-colors">
              Accueil
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0677bf] transition-colors">
              Nos services
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0677bf] transition-colors">
              Marketplace
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0677bf] transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0677bf] transition-colors">
              Aide
            </a>
          </nav>

          {/* Actions desktop - style exact de l'image */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              className="text-[#0677bf] hover:text-[#0677bf] hover:bg-[#e6f3ff] px-4 py-2 rounded-lg"
            >
              Connexion
            </Button>
            
            <Button className="bg-[#0677bf] hover:bg-[#0056a0] text-white px-4 py-2 rounded-lg transition-all duration-200">
              Créer un compte
            </Button>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#0677bf]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <nav className="px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-600 hover:text-[#0677bf] transition-colors py-2">
                Accueil
              </a>
              <a href="#" className="block text-gray-600 hover:text-[#0677bf] transition-colors py-2">
                Nos services
              </a>
              <a href="#" className="block text-gray-600 hover:text-[#0677bf] transition-colors py-2">
                Marketplace
              </a>
              <a href="#" className="block text-gray-600 hover:text-[#0677bf] transition-colors py-2">
                Contact
              </a>
              <a href="#" className="block text-gray-600 hover:text-[#0677bf] transition-colors py-2">
                Aide
              </a>
              
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Button variant="outline" className="w-full border-[#0677bf] text-[#0677bf] hover:bg-[#e6f3ff]">
                  Connexion
                </Button>
                <Button className="w-full bg-[#0677bf] hover:bg-[#0056a0] text-white">
                  Créer un compte
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}