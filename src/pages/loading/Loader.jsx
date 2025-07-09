"use client"

import { useState, useEffect } from "react"

export function Loader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("smrithi-vault-visited")

    if (hasVisited) {
      setIsVisible(false)
      onComplete?.()
      return
    }

    // Simple timeout for first-time loading
    const timer = setTimeout(() => {
      setIsVisible(false)
      localStorage.setItem("smrithi-vault-visited", "true")
      onComplete?.()
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center space-y-6 px-4 max-w-sm w-full">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-blue-600 dark:bg-blue-500 rounded-2xl shadow-lg flex items-center justify-center">
           
          </div>
        </div>

        {/* App Name */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">SmrithiVault</h1>
          <p className="text-gray-600 dark:text-gray-400">Secure Digital Identity Platform</p>
        </div>

        {/* Simple Loading Spinner */}
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-gray-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-400 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  )
}
