import * as React from 'react';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  children?: React.ReactNode;
  className?: string;
  variant?: string;
  label?: string;
}

export default function Input ({children, className, label, ...rest}: IInputProps) {
  return (
    <div className=''>
      <input className={`${className}`} {...rest} />
    </div>
  );
}
