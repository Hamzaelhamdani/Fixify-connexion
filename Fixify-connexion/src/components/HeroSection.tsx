"use client"

import { Button } from "./ui/button"
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Star, Shield, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Badge garantie en haut à gauche */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center space-x-2 bg-[#e6f3ff] text-[#0677bf] px-4 py-2 rounded-full shadow-sm">
          <Shield className="w-4 h-4" />
          <span className="text-sm">Réparation en 24h garantie</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Section gauche - Contenu */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Réparez votre{" "}
                <span className="text-[#0677bf]">appareil</span>
                <br />
                en toute confiance
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg">
                Trouvez un réparateur certifié ou commandez vos pièces en quelques clics.{" "}
                <span className="text-[#0677bf]">Plus de 10,000 réparations réussies</span>
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#0677bf] hover:bg-[#0056a0] text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 hover:shadow-lg">
                <span>Demander une réparation</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
              
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Devenir réparateur</span>
              </Button>
            </div>

            {/* Statistiques */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl text-gray-900">10K+</div>
                <div className="text-sm text-gray-500">Réparations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-gray-900">4.9</div>
                <div className="text-sm text-gray-500">Note moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-gray-900">24h</div>
                <div className="text-sm text-gray-500">Délai garanti</div>
              </div>
            </div>
          </div>

          {/* Section droite - Image/Vidéo */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#e6f3ff] to-[#cce7ff] rounded-3xl p-8 shadow-2xl">
              {/* Simulation de l'image de réparation */}
              <div className="aspect-video bg-white rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop&crop=center"
                  alt="Technicien réparant un appareil électronique"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay avec informations */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 text-white rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Certifié</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">4.9/5</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">24h</span>
                    </div>
                  </div>
                </div>

                {/* Bouton play simulé */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-[#0677bf] ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#0677bf] rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}