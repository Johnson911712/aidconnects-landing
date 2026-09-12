import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'outlined'
}

const Card = ({
  children,
  variant = 'default',
  className,
  ...props
}: CardProps) => {
  const variants = {
    default: 'bg-white border border-gray-200 rounded-lg',
    elevated: 'bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow',
    outlined: 'bg-white border-2 border-gray-300 rounded-lg',
  }

  return (
    <div className={clsx(variants[variant], className)} {...props}>
      {children}
    </div>
  )
}

export default Card
