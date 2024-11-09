'use client'

import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface LogoProps {
  className?: string
  isTransparent?: boolean
}

export function Logo({ className, isTransparent }: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Return null on server-side and first render
  }

  // Use dark theme logo when nav is transparent or theme is dark
  const logoSrc = isTransparent || theme === 'dark'
    ? "https://vqxgzfcwifmbxwixhsxv.supabase.co/storage/v1/object/public/web-assets/simplymaid-logo-dark-theme.png"
    : "https://vqxgzfcwifmbxwixhsxv.supabase.co/storage/v1/object/public/web-assets/simplymaid-logo-white-theme.png"

  return (
    <img 
      src={logoSrc}
      alt="Simply Maid Logo"
      className={cn("h-8 w-auto object-contain transition-opacity", className)}
    />
  )
}