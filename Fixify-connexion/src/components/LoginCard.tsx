"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Eye, EyeOff, Mail, Lock, Loader2, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface LoginCardProps {
  onLogin: (email: string, password: string) => Promise<void>
  isLoading: boolean
}

export function LoginCard({ onLogin, isLoading }: LoginCardProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<{email?: string, password?: string}>({})

  const [isFormValid, setIsFormValid] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsFormValid(email.length > 0 && password.length >= 6 && !errors.email && !errors.password)
  }, [email, password, errors])

  const validateForm = () => {
    const newErrors: {email?: string, password?: string} = {}
    
    if (!email) {
      newErrors.email = "L'email est requis"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Format d'email invalide"
    }
    
    if (!password) {
      newErrors.password = "Le mot de passe est requis"
    } else if (password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    try {
      await onLogin(email, password)
    } catch (error) {
      // Error handling is managed by parent component
    }
  }

  const handleSocialLogin = (provider: string) => {
    // Social login logic would be implemented here
    // For now, this is a placeholder for the UI demonstration
  }

  const getInputValidationClass = (field: 'email' | 'password') => {
    if (errors[field]) return 'border-2 border-red-400 focus:border-red-500 focus:ring-0'
    if (field === 'email' && email && !errors.email) return 'border-2 border-fixify-dark-primary focus:border-fixify-dark-primary focus:ring-0'
    if (field === 'password' && password.length >= 6) return 'border-2 border-fixify-dark-primary focus:border-fixify-dark-primary focus:ring-0'
    return 'border-2 border-gray-200 focus:border-fixify-dark-primary focus:ring-0'
  }

  return (
    <div className="w-full space-y-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Email field */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-fixify-dark-primary text-sm flex items-center space-x-2">
            <Mail className="w-4 h-4 text-fixify-dark-accent" />
            <span>Adresse email</span>
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail className="h-4 w-4" />
            </div>
            <Input
              ref={emailRef}
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors(prev => ({...prev, email: undefined}))
              }}
              className={`pl-10 h-11 text-fixify-dark-primary placeholder-gray-400 transition-colors duration-300 ${getInputValidationClass('email')} rounded-xl bg-white`}
              disabled={isLoading}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-500 animate-fadeInUp flex items-center space-x-1">
              <span className="w-1 h-1 bg-red-500 rounded-full"></span>
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Password field */}
        <div className="space-y-1.5">
          <label htmlFor="password" className="text-fixify-dark-primary text-sm flex items-center space-x-2">
            <Lock className="w-4 h-4 text-fixify-dark-accent" />
            <span>Mot de passe</span>
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock className="h-4 w-4" />
            </div>
            <Input
              ref={passwordRef}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (errors.password) setErrors(prev => ({...prev, password: undefined}))
              }}
              className={`pl-10 pr-10 h-11 text-fixify-dark-primary placeholder-gray-400 transition-colors duration-300 ${getInputValidationClass('password')} rounded-xl bg-white`}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-fixify-medium transition-all duration-300 hover:scale-110 focus:outline-none p-1 rounded-lg"
              disabled={isLoading}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500 animate-fadeInUp flex items-center space-x-1">
              <span className="w-1 h-1 bg-red-500 rounded-full"></span>
              <span>{errors.password}</span>
            </p>
          )}
        </div>

        {/* Options with modern checkbox */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>
            <div className="relative">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="sr-only"
                disabled={isLoading}
              />
              <div className={`w-4 h-4 rounded border-2 transition-all duration-300 flex items-center justify-center ${rememberMe ? 'bg-fixify-dark-accent border-fixify-dark-accent shadow-lg shadow-fixify-dark-accent/30' : 'border-gray-300 bg-white'} group-hover:scale-110 group-hover:shadow-md`}>
                {rememberMe && (
                  <svg className="w-2.5 h-2.5 text-white animate-scaleIn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <label htmlFor="remember" className="text-sm text-fixify-dark-secondary cursor-pointer group-hover:text-fixify-dark-primary transition-colors">
              Se souvenir de moi
            </label>
          </div>
          <Button
            type="button"
            variant="link"
            className="text-sm text-fixify-medium hover:text-fixify-dark-accent p-0 h-auto transition-all duration-300 hover:scale-105 hover:no-underline relative group"
            disabled={isLoading}
          >
            <span className="relative">
              Mot de passe oublié ?
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fixify-medium transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Button>
        </div>

        {/* Login button */}
        <div className="pt-2">
          <Button
            type="submit"
            className="w-full h-12 bg-fixify-dark-secondary hover:bg-fixify-dark-primary text-white transition-all duration-500 relative overflow-hidden group rounded-2xl border-0 shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-fixify-dark-secondary/40"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-3">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Connexion en cours...</span>
              </div>
            ) : (
              <>
                <span className="relative z-10 flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform duration-300">
                  <span>Se connecter</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 left-4 w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-3 right-6 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-3 right-12 w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse delay-150"></div>
                </div>
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Modern divider */}
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-4 text-fixify-dark-secondary rounded-full">ou continuez avec</span>
        </div>
      </div>

      {/* Social login */}
      <div className="space-y-2">
        <Button
          type="button"
          variant="outline"
          className="w-full h-10 bg-white/90 border-gray-200 text-fixify-dark-primary hover:border-fixify-medium transition-all duration-300 rounded-xl shadow-sm hover:shadow-md group"
          onClick={() => handleSocialLogin("Google")}
          disabled={isLoading}
        >
          <div className="flex items-center justify-center space-x-3">
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="group-hover:scale-105 transition-transform duration-300 text-sm">Continuer avec Google</span>
          </div>
        </Button>
        
        <Button
          type="button"
          variant="outline"
          className="w-full h-10 bg-white/90 border-gray-200 text-fixify-dark-primary hover:border-fixify-medium transition-all duration-300 rounded-xl shadow-sm hover:shadow-md group"
          onClick={() => handleSocialLogin("Apple")}
          disabled={isLoading}
        >
          <div className="flex items-center justify-center space-x-3">
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="#000000" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span className="group-hover:scale-105 transition-transform duration-300 text-sm">Continuer avec Apple</span>
          </div>
        </Button>
      </div>

      {/* Sign up link */}
      <div className="text-center pt-2">
        <p className="text-sm text-fixify-dark-secondary">
          Pas encore de compte ?{" "}
          <Link
            to="/signup"
            type="button"
            variant="link"
            className="text-fixify-dark-primary hover:text-fixify-dark-secondary p-0 h-auto transition-all duration-300 relative group font-medium"
            disabled={isLoading}
          >
            <span className="relative">
              Créer un compte
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fixify-dark-primary transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </p>
      </div>
    </div>
  )
}