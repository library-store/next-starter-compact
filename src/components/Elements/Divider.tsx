import * as React from 'react';

export interface IAppProps {
  className?: string;
}

export default function Divider({ className }: IAppProps) {
  return <hr className={`border-[#E9E9E9] ${className ?? className}`} />;
}
