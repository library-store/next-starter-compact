import * as React from 'react';

export interface IAppProps {
  className?: string;
  color?: string
}

export default function Divider({ className, color = "#E9E9E9" }: IAppProps) {
  return <hr className={`border-[${color}] ${className ?? className}`} />;
}
