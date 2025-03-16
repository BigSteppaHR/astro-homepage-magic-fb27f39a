
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50",
    text: "bg-transparent text-blue-600 hover:bg-blue-50 hover:text-blue-700"
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 rounded-md",
    md: "text-base px-4 py-2 rounded-lg",
    lg: "text-lg px-6 py-3 rounded-xl"
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
