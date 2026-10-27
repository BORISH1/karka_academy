import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center font-bold tracking-tight rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none active:scale-95';

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }[size];

  const variantClasses = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30',
    secondary:
      'bg-surface-elevated text-foreground hover:bg-muted border border-border shadow-sm',
    accent:
      'bg-accent text-accent-foreground hover:bg-accent/90 shadow-md shadow-accent/20',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    white:
      'bg-white !text-blue-600 hover:bg-slate-100 shadow-xl hover:shadow-2xl font-extrabold',
  }[variant];

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`} {...rest}>
      {children}
    </button>
  );
};
