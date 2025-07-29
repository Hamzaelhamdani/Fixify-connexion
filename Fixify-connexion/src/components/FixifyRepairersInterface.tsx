"use client"

import { Bell, ShoppingCart, User, Star } from "lucide-react"
import { Button } from "./ui/button"

export function FixifyRepairersInterface() {
  const repairers = [
    {
      id: 1,
      name: "Ahmed Bennani",
      specialty: "Réparateur smartphones",
      location: "Casablanca",
      rating: 4.9,
      reviewCount: 127,
      badge: "Agréé",
      badgeColor: "gray",
      price: 45,
      description: "Solutions rapides et fiables pour tous vos besoins de réparation."
    },
    {
      id: 2,
      name: "Youssef Alami",
      specialty: "Électronique générale",
      location: "Rabat",
      rating: 4.8,
      reviewCount: 89,
      badge: "Top Rated",
      badgeColor: "blue",
      price: 35,
      description: "Solutions rapides et fiables pour tous vos besoins de réparation."
    },
    {
      id: 3,
      name: "Fatima Zahra",
      specialty: "Réparation ordinateurs",
      location: "Casablanca",
      rating: 4.7,
      reviewCount: 156,
      badge: "Disponible aujourd'hui",
      badgeColor: "green",
      price: 40,
      description: "Solutions rapides et fiables pour tous vos besoins de réparation."
    },
    {
      id: 4,
      name: "Hassan Moradi",
      specialty: "Électroménager",
      location: "Marrakech",
      rating: 4.6,
      reviewCount: 74,
      badge: "Agréé",
      badgeColor: "gray",
      price: 30,
      description: "Solutions rapides et fiables pour tous vos besoins de réparation."
    }
  ]

  const getBadgeStyles = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-fixify-dark-accent text-white"
      case "green":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-100 text-fixify-dark-secondary border border-gray-200"
    }
  }

  return (
    <div className="w-full h-full min-h-screen bg-gray-50 relative">
      {/* Header simplifié */}
      <header className="flex items-center justify-between p-4 bg-white shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-fixify-dark-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <div>
            <div className="text-lg text-fixify-dark-primary font-semibold">Fixify</div>
            <div className="text-xs text-fixify-dark-secondary">Réparations pros</div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-5 h-5 text-fixify-dark-secondary" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <ShoppingCart className="w-5 h-5 text-fixify-dark-secondary" />
          <User className="w-5 h-5 text-fixify-dark-secondary" />
        </div>
      </header>

      {/* Content principal avec design inspiré de l'image */}
      <div className="p-4">
        <div className="max-w-7xl mx-auto">
          {/* Grid des cartes inspirées de l'image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {repairers.map((repairer, index) => (
              <div
                key={repairer.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-fixify-light/50"
              >
                {/* Badge en haut comme dans l'image */}
                <div className="flex justify-start mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${getBadgeStyles(repairer.badgeColor)}`}>
                    {repairer.badge}
                  </span>
                </div>

                {/* Avatar et informations compactes comme dans l'image */}
                <div className="text-center mb-3">
                  <div className="relative mx-auto w-16 h-16 mb-3">
                    <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                      <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {/* Indicateur en ligne vert comme dans l'image */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <h3 className="font-medium text-fixify-dark-primary mb-1 text-sm">
                    {repairer.name}
                  </h3>
                  <p className="text-xs text-fixify-dark-secondary mb-2">
                    {repairer.specialty}
                  </p>
                  
                  {/* Localisation compacte */}
                  <div className="flex items-center justify-center space-x-1 text-fixify-light text-xs mb-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{repairer.location}</span>
                  </div>

                  {/* Rating compact comme dans l'image */}
                  <div className="flex items-center justify-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(repairer.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-xs font-medium text-fixify-dark-primary ml-1">
                      {repairer.rating}
                    </span>
                    <span className="text-xs text-fixify-light">
                      ({repairer.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Description courte */}
                <p className="text-xs text-fixify-dark-secondary text-center mb-4 leading-relaxed">
                  {repairer.description}
                </p>

                {/* Prix et bouton compacts comme dans l'image */}
                <div className="space-y-3">
                  <div className="text-center">
                    <span className="text-xs text-fixify-light">À partir de </span>
                    <span className="text-lg font-bold text-fixify-dark-primary">{repairer.price}</span>
                    <span className="text-xs text-fixify-light">€</span>
                  </div>

                  <Button className="w-full h-10 bg-fixify-dark-accent hover:bg-fixify-dark-primary text-white rounded-xl transition-all duration-300 text-sm">
                    Voir plus →
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Ligne supplémentaire pour remplir l'écran */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 opacity-70">
            {repairers.map((repairer, index) => (
              <div
                key={`row2-${repairer.id}`}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex justify-start mb-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-fixify-dark-secondary border border-gray-200">
                    Vérifié
                  </span>
                </div>

                <div className="text-center mb-3">
                  <div className="relative mx-auto w-16 h-16 mb-3">
                    <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <h3 className="font-medium text-fixify-dark-primary mb-1 text-sm">
                    {repairer.name}
                  </h3>
                  <p className="text-xs text-fixify-dark-secondary mb-2">
                    {repairer.specialty}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-1 text-fixify-light text-xs mb-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{repairer.location}</span>
                  </div>

                  <div className="flex items-center justify-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(repairer.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-xs font-medium text-fixify-dark-primary ml-1">
                      {repairer.rating}
                    </span>
                    <span className="text-xs text-fixify-light">
                      ({repairer.reviewCount})
                    </span>
                  </div>
                </div>

                <p className="text-xs text-fixify-dark-secondary text-center mb-4 leading-relaxed">
                  {repairer.description}
                </p>

                <div className="space-y-3">
                  <div className="text-center">
                    <span className="text-xs text-fixify-light">À partir de </span>
                    <span className="text-lg font-bold text-fixify-dark-primary">{repairer.price + 10}</span>
                    <span className="text-xs text-fixify-light">€</span>
                  </div>

                  <Button className="w-full h-10 bg-fixify-dark-accent hover:bg-fixify-dark-primary text-white rounded-xl transition-all duration-300 text-sm">
                    Voir plus →
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Troisième ligne pour couvrir tout l'écran */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 opacity-50">
            {repairers.slice(0, 4).map((repairer, index) => (
              <div
                key={`row3-${repairer.id}`}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex justify-start mb-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-fixify-dark-secondary border border-gray-200">
                    Expert
                  </span>
                </div>

                <div className="text-center mb-3">
                  <div className="relative mx-auto w-16 h-16 mb-3">
                    <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <h3 className="font-medium text-fixify-dark-primary mb-1 text-sm">
                    {repairer.name}
                  </h3>
                  <p className="text-xs text-fixify-dark-secondary mb-2">
                    {repairer.specialty}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-1 text-fixify-light text-xs mb-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{repairer.location}</span>
                  </div>

                  <div className="flex items-center justify-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(repairer.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-xs font-medium text-fixify-dark-primary ml-1">
                      {repairer.rating}
                    </span>
                    <span className="text-xs text-fixify-light">
                      ({repairer.reviewCount})
                    </span>
                  </div>
                </div>

                <p className="text-xs text-fixify-dark-secondary text-center mb-4 leading-relaxed">
                  {repairer.description}
                </p>

                <div className="space-y-3">
                  <div className="text-center">
                    <span className="text-xs text-fixify-light">À partir de </span>
                    <span className="text-lg font-bold text-fixify-dark-primary">{repairer.price + 15}</span>
                    <span className="text-xs text-fixify-light">€</span>
                  </div>

                  <Button className="w-full h-10 bg-fixify-dark-accent hover:bg-fixify-dark-primary text-white rounded-xl transition-all duration-300 text-sm">
                    Voir plus →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}