import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, GYM_INFO } from '../data/info';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'secondary-blue' | 'whatsapp' | 'whatsapp-tr';
  to?: string; // If provided, behaves as a link or route
  href?: string;
  whatsappMessage?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  href,
  whatsappMessage,
  size = 'md',
  fullWidth = false,
  className = '',
  onClick,
  icon,
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'text-xs py-2 px-5 font-semibold',
    md: 'text-sm sm:text-base py-3.5 px-7 font-semibold',
    lg: 'text-base sm:text-lg py-4 px-9 font-bold',
  };

  const baseClasses =
    'group relative inline-flex items-center justify-center rounded-full tracking-wider uppercase transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  let variantClasses = '';
  let finalHref = href || to;
  let isExternal = false;

  if (variant === 'primary') {
    variantClasses =
      'bg-gb-red text-white hover:bg-gb-red-dark hover:-translate-y-0.5 glow-red active:translate-y-0';
  } else if (variant === 'secondary') {
    variantClasses =
      'border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-gb-black active:translate-y-0 backdrop-blur-sm';
  } else if (variant === 'secondary-blue') {
    variantClasses =
      'border-2 border-gb-blue text-gb-blue hover:bg-gb-blue hover:text-white active:translate-y-0';
  } else if (variant === 'whatsapp') {
    variantClasses =
      'bg-gb-red text-white hover:bg-gb-red-dark hover:-translate-y-0.5 glow-red active:translate-y-0';
    const message =
      whatsappMessage || 'Olá! Gostaria de agendar uma aula experimental gratuita na Gracie Barra Centro JF.';
    finalHref = getWhatsAppLink(message, GYM_INFO.phones.whatsappGB);
    isExternal = true;
  } else if (variant === 'whatsapp-tr') {
    variantClasses =
      'bg-gb-blue text-white hover:bg-gb-blue-dark hover:-translate-y-0.5 glow-blue active:translate-y-0';
    const message =
      whatsappMessage || 'Olá Team Recruta! Gostaria de informações sobre as aulas de Muay Thai na GB Centro JF.';
    finalHref = getWhatsAppLink(message, GYM_INFO.phones.whatsappTeamRecruta);
    isExternal = true;
  }

  const content = (
    <>
      {variant === 'whatsapp' || variant === 'whatsapp-tr' ? (
        <MessageCircle className="w-5 h-5 mr-2.5 transition-transform group-hover:scale-110" />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}

      <span>{children}</span>

      {variant === 'primary' && !icon && (
        <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (finalHref) {
    if (isExternal || finalHref.startsWith('http') || finalHref.startsWith('https://wa.me')) {
      return (
        <a
          href={finalHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${
            fullWidth ? 'w-full' : ''
          } ${className}`}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <a
        href={finalHref}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${
          fullWidth ? 'w-full' : ''
        } ${className}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
