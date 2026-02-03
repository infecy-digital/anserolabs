import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  withIcon = false,
  href,
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/30 focus:ring-primary",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-lg focus:ring-slate-900",
    outline: "bg-transparent border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary focus:ring-primary",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const content = (
    <>
      {children}
      {withIcon && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;