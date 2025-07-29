"use client"

import { Search, Users, CheckCircle } from "lucide-react"

export function FixifyProcess() {
  return (
    <div className="space-y-8">
      {/* Badge processus simplifié */}
      <div className="flex items-center justify-center">
        <div className="bg-[#e1f4fd] text-[#407FB4] px-4 py-2 rounded-full flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#407FB4] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-sm">Processus simplifié</span>
        </div>
      </div>

      {/* Titre principal */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-4xl text-gray-900">Comment ça marche ?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Un processus simple et transparent en 3 étapes pour réparer votre appareil rapidement
        </p>
      </div>

      {/* Étapes du processus */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        
        {/* Étape 1 */}
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-[#e1f4fd] to-[#b3d9f7] rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Search className="w-8 h-8 text-[#173F70]" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#407FB4] text-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm">1</span>
            </div>
          </div>
          <h3 className="text-lg text-gray-900">Décrivez votre problème</h3>
          <p className="text-gray-600 text-sm max-w-xs mx-auto">
            Expliquez ce qui ne va pas avec votre appareil en quelques mots simples
          </p>
        </div>

        {/* Ligne de connexion (cachée sur mobile) */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-[#e1f4fd] via-[#407FB4] to-[#e1f4fd]"></div>
        </div>

        {/* Étape 2 */}
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-[#e1f4fd] to-[#b3d9f7] rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Users className="w-8 h-8 text-[#173F70]" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#407FB4] text-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm">2</span>
            </div>
          </div>
          <h3 className="text-lg text-gray-900">Comparez les réparateurs</h3>
          <p className="text-gray-600 text-sm max-w-xs mx-auto">
            Choisissez parmi nos réparateurs certifiés selon vos critères de prix et proximité
          </p>
        </div>

        {/* Ligne de connexion (cachée sur mobile) */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-[#e1f4fd] via-[#407FB4] to-[#e1f4fd]"></div>
        </div>

        {/* Étape 3 */}
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-[#e1f4fd] to-[#b3d9f7] rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle className="w-8 h-8 text-[#173F70]" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#407FB4] text-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm">3</span>
            </div>
          </div>
          <h3 className="text-lg text-gray-900">Réparez en confiance</h3>
          <p className="text-gray-600 text-sm max-w-xs mx-auto">
            Votre appareil est réparé avec garantie, transparence et suivi en temps réel
          </p>
        </div>
      </div>

      {/* Chat bot floating */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 bg-[#407FB4] hover:bg-[#173F70] rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>
    </div>
  )
}