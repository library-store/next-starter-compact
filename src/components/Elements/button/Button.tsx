import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`focus:shadow-outline rounded px-4 py-2 hover:opacity-80 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
