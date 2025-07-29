import { useState } from "react";
import { Eye, EyeOff, Mail, Phone, Lock, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { FixifyRepairersInterface } from "./FixifyRepairersInterface";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { handleSignup } from "../SignUp/action";
import { useNavigate } from "react-router-dom";

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    passwordMatch: ''
  });
  
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear errors when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    
    // Clear password match error when either password field changes
    if ((field === 'password' || field === 'confirmPassword') && errors.passwordMatch) {
      setErrors(prev => ({ ...prev, passwordMatch: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      passwordMatch: ''
    };
    
    let isValid = true;

    // Check required fields
    if (!formData.email.trim()) {
      newErrors.email = 'L\'adresse email est requise';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est requis';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Le mot de passe est requis';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
      isValid = false;
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'La confirmation du mot de passe est requise';
      isValid = false;
    }

    // Check password match
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.passwordMatch = 'Les mots de passe ne correspondent pas';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Veuillez corriger les erreurs dans le formulaire");
      return;
    }

    setSubmissionStatus('loading');
    
    // Show loading toast
    const loadingToast = toast.loading("Authentification en cours...", {
      description: "Veuillez patienter...",
      duration: Infinity
    });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      setSubmissionStatus('success');
      
      // Show success toast
      toast.success("Connexion réussie ! Redirection...", {
        description: "Redirection en cours...",
        icon: <CheckCircle className="h-4 w-4" />,
        duration: 3000
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
      // Simulate redirect after 3 seconds
      
    } catch (error) {
      toast.dismiss(loadingToast);
      setSubmissionStatus('error');
      toast.error("Erreur lors de l'inscription", {
        description: "Veuillez réessayer plus tard"
      });
    }
  };

  const isLoading = submissionStatus === 'loading';
  const isSuccess = submissionStatus === 'success';

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* COUCHE 1 : Fond principal (Base) - Gradient diagonal gris */}
      
      {/* COUCHE 2 : Interface des réparateurs (Contenu) */}
      <div className="absolute inset-0">
        <FixifyRepairersInterface />
      </div>

      {/* COUCHE 3 : Overlay avec flou (Glassmorphisme) */}
      <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/30 via-gray-100/50 to-gray-200/40"></div>

      {/* COUCHE 4 : Formulaire de connexion (Premier plan) */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-3">
        <div className="w-full max-w-sm">
          <div className="bg-white/90 shadow-xl backdrop-blur-lg p-6 space-y-4 bg-[rgba(255,255,255,1)] rounded-[14px]">
            {/* Header */}
            <div className="text-center space-y-2">
              {/* Fixify Icon */}
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-fixify-dark-primary to-fixify-dark-accent rounded-xl shadow-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3L4 14h5l-2 7 9-11h-5l2-7z"/>
                </svg>
              </div>
              
              {/* Header Texts */}
              <div className="space-y-1">
                <h1 className="text-xl text-fixify-dark-primary">
                  Créer un compte <span className="text-fixify-dark-accent">Fixify</span>
                </h1>
                <p className="text-fixify-dark-secondary text-sm">
                  Rejoignez votre espace personnel
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Email Field */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-fixify-dark-primary font-medium text-sm flex items-center gap-1.5">
                  <Mail className={`h-3 w-3 transition-colors duration-200 ${focusedField === 'email' ? 'text-[#ef4444]' : 'text-fixify-dark-accent'}`} />
                  <span className="font-normal">Adresse email</span>
                </Label>
                <div className="relative">
                  <Mail className={`absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 transition-colors duration-200 ${focusedField === 'email' ? 'text-[#ef4444]' : 'text-[#6b7280]'}`} />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`h-11 pl-8 pr-2.5 py-1.5 border-2 rounded-lg bg-white text-fixify-dark-primary text-sm font-normal placeholder:text-[#9ca3af] placeholder:font-normal focus-visible:ring-0 focus:ring-0 focus:outline-none transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus-visible:border-red-500' 
                        : 'border-[#e5e7eb] focus:border-[#1e3a8a] focus-visible:border-[#1e3a8a]'
                    }`}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-fixify-dark-primary font-medium text-sm flex items-center gap-1.5">
                  <Phone className={`h-3 w-3 transition-colors duration-200 ${focusedField === 'phone' ? 'text-[#ef4444]' : 'text-fixify-dark-accent'}`} />
                  <span className="font-normal">Numéro de téléphone</span>
                </Label>
                <div className="relative">
                  <Phone className={`absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 transition-colors duration-200 ${focusedField === 'phone' ? 'text-[#ef4444]' : 'text-[#6b7280]'}`} />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Votre numéro"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`h-11 pl-8 pr-2.5 py-1.5 border-2 rounded-lg bg-white text-fixify-dark-primary text-sm font-normal placeholder:text-[#9ca3af] placeholder:font-normal focus-visible:ring-0 focus:ring-0 focus:outline-none transition-all duration-300 ${
                      errors.phone 
                        ? 'border-red-500 focus:border-red-500 focus-visible:border-red-500' 
                        : 'border-[#e5e7eb] focus:border-[#1e3a8a] focus-visible:border-[#1e3a8a]'
                    }`}
                    disabled={isLoading}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-fixify-dark-primary font-medium text-sm flex items-center gap-1.5">
                  <Lock className={`h-3 w-3 transition-colors duration-200 ${focusedField === 'password' ? 'text-[#ef4444]' : 'text-fixify-dark-accent'}`} />
                  <span className="font-normal">Mot de passe</span>
                </Label>
                <div className="relative">
                  <Lock className={`absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 transition-colors duration-200 ${focusedField === 'password' ? 'text-[#ef4444]' : 'text-[#6b7280]'}`} />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Votre mot de passe"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className={`h-11 pl-8 pr-8 py-1.5 border-2 rounded-lg bg-white text-fixify-dark-primary text-sm font-normal placeholder:text-[#9ca3af] placeholder:font-normal focus-visible:ring-0 focus:ring-0 focus:outline-none transition-all duration-300 ${
                      errors.password 
                        ? 'border-red-500 focus:border-red-500 focus-visible:border-red-500' 
                        : 'border-[#e5e7eb] focus:border-[#1e3a8a] focus-visible:border-[#1e3a8a]'
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-[#6b7280] hover:text-[#374151] transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword" className="text-fixify-dark-primary font-medium text-sm flex items-center gap-1.5">
                  <Lock className={`h-3 w-3 transition-colors duration-200 ${focusedField === 'confirmPassword' ? 'text-[#ef4444]' : 'text-fixify-dark-accent'}`} />
                  <span className="font-normal">Confirmer mot de passe</span>
                </Label>
                <div className="relative">
                  <Lock className={`absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 transition-colors duration-200 ${focusedField === 'confirmPassword' ? 'text-[#ef4444]' : 'text-[#6b7280]'}`} />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirmez votre mot de passe"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    onFocus={() => setFocusedField('confirmPassword')}
                    onBlur={() => setFocusedField(null)}
                    className={`h-11 pl-8 pr-8 py-1.5 border-2 rounded-lg bg-white text-fixify-dark-primary text-sm font-normal placeholder:text-[#9ca3af] placeholder:font-normal focus-visible:ring-0 focus:ring-0 focus:outline-none transition-all duration-300 ${
                      errors.confirmPassword || errors.passwordMatch
                        ? 'border-red-500 focus:border-red-500 focus-visible:border-red-500' 
                        : 'border-[#e5e7eb] focus:border-[#1e3a8a] focus-visible:border-[#1e3a8a]'
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-[#6b7280] hover:text-[#374151] transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                )}
                {errors.passwordMatch && (
                  <p className="text-red-500 text-xs mt-1">{errors.passwordMatch}</p>
                )}
              </div>

              {/* Sign Up Button - Modern Glassmorphism Style */}
              <div className="relative mt-4 group">
                <Button 
                  type="submit"
                  disabled={isLoading || isSuccess}
                  className={`w-full h-12 text-white font-semibold text-sm rounded-2xl border-0 transition-all duration-300 group relative overflow-hidden ${
                    isLoading || isSuccess
                      ? 'bg-fixify-dark-secondary/60 cursor-not-allowed'
                      : 'bg-fixify-dark-secondary hover:bg-fixify-dark-primary hover:shadow-lg hover:shadow-fixify-dark-secondary/40 hover:-translate-y-0.5'
                  }`}
                >
                  {/* Glassmorphism shine effect */}
                  {!isLoading && !isSuccess && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  )}
                  
                  <span className="relative z-10 flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Authentification en cours...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Inscription réussie !
                      </>
                    ) : (
                      <>
                        S'inscrire
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </span>
                  
                  {/* Subtle particles effect */}
                  {!isLoading && !isSuccess && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-2 left-4 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
                      <div className="absolute top-4 right-6 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse delay-150"></div>
                      <div className="absolute bottom-3 left-8 w-0.5 h-0.5 bg-white/20 rounded-full animate-pulse delay-300"></div>
                    </div>
                  )}
                </Button>
              </div>
            </form>

            {/* Social Login */}
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#d1d5db]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white/90 text-[#6b7280] text-[10px] rounded-full">ou continuez avec</span>
                </div>
              </div>

              <div className="space-y-1.5">
                {/* Bouton Google avec spécifications exactes */}
                <Button
                  type="button"
                  variant="outline"
                  disabled={isLoading || isSuccess}
                  className="group w-full h-10 border border-gray-200 bg-white/90 text-fixify-dark-primary text-sm shadow-sm hover:bg-white/90 hover:text-fixify-dark-primary hover:border-gray-200 hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                >
                  <svg className="mr-1.5 h-4 w-4 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
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
                  <span className="group-hover:scale-105 group-hover:text-red-500 transition-all duration-300">
                    Continuer avec Google
                  </span>
                </Button>

                {/* Bouton Apple avec spécifications exactes */}
                <Button
                  type="button"
                  variant="outline"
                  disabled={isLoading || isSuccess}
                  className="group w-full h-10 border border-gray-200 bg-white/90 text-fixify-dark-primary text-sm shadow-sm hover:bg-white/90 hover:text-fixify-dark-primary hover:border-gray-200 hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                >
                  <svg className="mr-1.5 h-4 w-4 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#000000">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="group-hover:scale-105 group-hover:text-black transition-all duration-300">
                    Continuer avec Apple
                  </span>
                </Button>
              </div>
            </div>

            {/* Card Footer with Animated Underline - Lien "Se connecter" plus visible */}
            <div className="text-center">
              <p className="text-sm text-fixify-dark-secondary font-normal">
                Déjà un compte ?{" "}
                <span className="group relative inline-block">
                  <Link
                    to="/login"
                    type="button"
                    disabled={isLoading || isSuccess}
                    className="text-fixify-dark-accent hover:text-fixify-dark-primary text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Se connecter
                  </Link>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fixify-dark-accent transition-all duration-300 group-hover:w-full"></span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="absolute bottom-2 left-0 right-0 z-10">
        <div className="text-center space-y-0.5">
          <div className="flex justify-center items-center space-x-3">
            <button className="text-[9px] text-white/80 hover:text-white transition-colors duration-200">
              Centre d'aide
            </button>
            <span className="text-white/60 text-[9px]">•</span>
            <button className="text-[9px] text-white/80 hover:text-white transition-colors duration-200">
              Conditions
            </button>
            <span className="text-white/60 text-[9px]">•</span>
            <button className="text-[9px] text-white/80 hover:text-white transition-colors duration-200">
              Confidentialité
            </button>
          </div>
          <p className="text-[9px] text-white/80">
            © 2025 Fixify. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}