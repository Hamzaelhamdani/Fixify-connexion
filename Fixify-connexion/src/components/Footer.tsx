"use client"

import { Button } from "./ui/button"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu principal du footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Section À propos */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-lg p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Fixify</h3>
            </div>
            <p className="text-gray-600 text-sm">
              La plateforme de référence pour tous vos besoins de réparation. 
              Connectez vos appareils cassés aux meilleurs réparateurs.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" className="text-gray-600 hover:text-blue-600 p-0 h-auto">
                  Réparation smartphone
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-600 hover:text-blue-600 p-0 h-auto">
                  Réparation ordinateur
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-600 hover:text-blue-600 p-0 h-auto">
                  Réparation tablette
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-600 hover:text-blue-600 p-0 h-auto">
                  Électroménager
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-600 hover:text-blue-600 p-0 h-auto">
                  Tous les services
                </Button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" className="text-gray-600 hover:text-blue-600 p-0 h-auto">
                  Centre d'aide
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-600 hover:text-blue-600 p-0 h-auto">
                  Contact
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-600 hover:text-blue-600 p-0 h-auto">
                  Garanties
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-600 hover:text-blue-600 p-0 h-auto">
                  Conditions d'utilisation
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-600 hover:text-blue-600 p-0 h-auto">
                  Politique de confidentialité
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>contact@fixify.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-600 mt-0.5" />
                <span>123 Avenue de la République<br />75011 Paris, France</span>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-xs text-gray-500 mb-2">Disponible 24h/7j</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Service client en ligne</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>© 2025 Fixify. Tous droits réservés.</span>
              <div className="hidden md:flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Certifié ISO 9001</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Button variant="link" className="text-gray-600 hover:text-gray-900 p-0 h-auto">
                Mentions légales
              </Button>
              <Button variant="link" className="text-gray-600 hover:text-gray-900 p-0 h-auto">
                Cookies
              </Button>
              <Button variant="link" className="text-gray-600 hover:text-gray-900 p-0 h-auto">
                Plan du site
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}