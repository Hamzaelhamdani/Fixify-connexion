"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Eye, EyeOff, User, Lock, Mail } from "lucide-react"
import { Link } from "react-router-dom"

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulation d'une requête
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (onSubmit) {
      onSubmit(email, password)
    }
    
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header avec logo */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-neutral-900 rounded-xl p-3">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Connexion
        </h1>
        <p className="text-gray-600">
          Connectez-vous à votre compte Fixify
        </p>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80 backdrop-blur-sm"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Mot de passe
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80 backdrop-blur-sm"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Se souvenir de moi
            </label>
          </div>
          <Button
            type="button"
            variant="link"
            className="text-sm text-blue-600 hover:text-blue-800 p-0 h-auto"
          >
            Mot de passe oublié ?
          </Button>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 text-white font-medium transition-all duration-200 hover:shadow-lg"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Connexion...</span>
            </div>
          ) : (
            "Se connecter"
          )}
        </Button>
      </form>

      {/* Diviseur */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white/90 px-4 text-gray-500">ou</span>
        </div>
      </div>

      {/* Connexion sociale */}
      <div className="space-y-3">
        <Button
          type="button"
          variant="outline"
          className="w-full h-12 border-gray-200 hover:bg-gray-50 transition-all duration-200 bg-white/80 backdrop-blur-sm"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Se connecter avec Google
        </Button>
        
        <Button
          type="button"
          variant="outline"
          className="w-full h-12 border-gray-200 hover:bg-gray-50 transition-all duration-200 bg-white/80 backdrop-blur-sm"
        >
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.5 12.23c0-5.27-4.22-9.54-9.42-9.54-5.2 0-9.42 4.27-9.42 9.54 0 4.78 3.46 8.73 8 9.44v-6.68h-2.4v-2.76h2.4v-2.1c0-2.38 1.41-3.69 3.56-3.69 1.03 0 2.11.18 2.11.18v2.33h-1.19c-1.17 0-1.54.73-1.54 1.48v1.8h2.62l-.42 2.76h-2.2v6.68c4.54-.71 8-4.66 8-9.44z"/>
          </svg>
          Se connecter avec Microsoft
        </Button>
      </div>

      {/* Lien vers création de compte */}
      <div className="text-center mt-6">
        <span className="text-sm text-gray-600">
          Vous n'avez pas de compte ?{" "}
        </span>
        <Link
          
          type="button"
          variant="link"
          className="text-sm text-blue-600 hover:text-blue-800 p-0 h-auto font-medium"
        >
          Créer un compte
        </Link>
      </div>
    </div>
  )
}