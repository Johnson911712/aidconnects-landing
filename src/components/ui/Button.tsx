import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = 'font-heading font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap'

  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-gray-400 disabled:cursor-not-allowed',
    secondary: 'bg-white border border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100 disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed',
    outline: 'border border-gray-300 text-foreground hover:bg-gray-50 active:bg-gray-100 disabled:cursor-not-allowed',
    ghost: 'text-foreground hover:bg-gray-100 active:bg-gray-200 disabled:cursor-not-allowed',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className="animate-spin">⟳</span> : children}
    </button>
  )
}

export default Button
