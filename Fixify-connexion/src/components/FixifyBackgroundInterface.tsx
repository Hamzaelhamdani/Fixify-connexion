"use client"

import { Search, Bell, ShoppingCart, User, MapPin, Filter } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function FixifyBackgroundInterface() {
  return (
    <div className="w-full h-full min-h-screen bg-white relative">
      {/* Content exact de l'image Figma avec nouvelle palette */}
      <div className="relative z-10 p-6">
        {/* Header exact comme dans l'image */}
        <header className="flex items-center justify-between mb-16">
          {/* Logo Fixify avec nouvelle palette */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-fixify-blue rounded-full flex items-center justify-center hover:bg-fixify-blue-dark transition-colors duration-300">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3L4 14h5l-2 7 9-11h-5l2-7z" />
              </svg>
            </div>
            <div>
              <div className="text-xl text-fixify-blue">Fixify</div>
              <div className="text-sm text-fixify-blue-dark">Réparations pros</div>
            </div>
          </div>

          {/* Navigation icons avec nouvelle palette */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Bell className="w-6 h-6 text-fixify-blue-dark hover:text-fixify-blue transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <ShoppingCart className="w-6 h-6 text-fixify-blue-dark hover:text-fixify-blue transition-colors duration-300" />
            <User className="w-6 h-6 text-fixify-blue-dark hover:text-fixify-blue transition-colors duration-300" />
          </div>
        </header>

        {/* Badge processus révolutionnaire avec nouvelle palette */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-2 bg-fixify-blue-lighter text-fixify-navy px-4 py-2 rounded-full border border-fixify-blue-light hover:bg-fixify-blue-light transition-colors duration-300">
            <div className="w-2 h-2 bg-fixify-blue rounded-full animate-pulse"></div>
            <span className="text-sm">Processus révolutionnaire</span>
            <div className="w-2 h-2 bg-fixify-blue rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main content avec nouvelle palette */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl text-fixify-navy leading-tight">
              Réparateurs disponibles
              <br />
              <span className="text-fixify-blue">dans votre région</span>
            </h1>
            
            <p className="text-lg text-fixify-blue-dark max-w-2xl mx-auto">
              Trouvez le <span className="text-fixify-blue">meilleur réparateur</span> pour vos besoins en quelques clics
            </p>
          </div>

          {/* Search section avec nouvelle palette */}
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Search bar avec nouvelle palette */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fixify-blue-light w-5 h-5" />
                <Input
                  placeholder="Rechercher..."
                  className="pl-12 h-14 text-lg border-2 border-fixify-blue-light focus:border-fixify-blue bg-white rounded-lg hover:border-fixify-blue-dark transition-colors duration-300"
                />
              </div>
              <Button className="h-14 px-8 bg-fixify-blue hover:bg-fixify-blue-dark text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Rechercher
              </Button>
            </div>

            {/* Filter buttons avec nouvelle palette */}
            <div className="flex items-center justify-center space-x-4">
              <Button 
                variant="default" 
                className="bg-fixify-blue hover:bg-fixify-blue-dark text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Tous
              </Button>
              
              <Button 
                variant="outline" 
                className="border-fixify-blue-light text-fixify-blue-dark hover:border-fixify-blue hover:text-fixify-blue hover:bg-fixify-blue-lighter px-6 py-2 rounded-lg transition-all duration-300"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Ville
              </Button>
              
              <Button 
                variant="outline" 
                className="border-fixify-blue-light text-fixify-blue-dark hover:border-fixify-blue hover:text-fixify-blue hover:bg-fixify-blue-lighter px-6 py-2 rounded-lg transition-all duration-300"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtres avancés
              </Button>
            </div>
          </div>

          {/* Services populaires avec nouvelle palette */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-xl text-fixify-navy mb-6">Services populaires</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['📱 Smartphones', '💻 Ordinateurs', '🏠 Électroménager', '🚗 Automobiles'].map((service, index) => (
                <div 
                  key={index}
                  className="bg-fixify-blue-lighter/60 border border-fixify-blue-light rounded-xl p-4 hover:bg-fixify-blue-lighter hover:border-fixify-blue transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl"
                >
                  <span className="text-sm text-fixify-navy group-hover:text-fixify-blue transition-colors duration-300">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}