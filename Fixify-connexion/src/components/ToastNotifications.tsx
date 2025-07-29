"use client"

import { toast } from "sonner"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    description: "Redirection en cours...",
    duration: 3000,
    className: "bg-white border-l-4 border-l-[#0677bf] shadow-lg",
    style: {
      background: "white",
      color: "#1a1a1a",
      border: "1px solid #e2e8f0",
      borderLeft: "4px solid #0677bf",
    },
    icon: <CheckCircle className="h-5 w-5 text-[#0677bf]" />,
  })
}

export const showErrorToast = (message: string) => {
  toast.error(message, {
    description: "Veuillez vérifier vos informations",
    duration: 4000,
    className: "bg-white border-l-4 border-l-red-500 shadow-lg",
    style: {
      background: "white",
      color: "#1a1a1a",
      border: "1px solid #e2e8f0",
      borderLeft: "4px solid #dc2626",
    },
    icon: <AlertCircle className="h-5 w-5 text-red-500" />,
  })
}

export const showLoadingToast = (message: string) => {
  return toast.loading(message, {
    description: "Veuillez patienter...",
    className: "bg-white border-l-4 border-l-[#0677bf] shadow-lg",
    style: {
      background: "white",
      color: "#1a1a1a",
      border: "1px solid #e2e8f0",
      borderLeft: "4px solid #0677bf",
    },
    icon: <Loader2 className="h-5 w-5 text-[#0677bf] animate-spin" />,
  })
}