import * as React from 'react';

export interface ICardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ className, children }: ICardProps) {
  return (
    <div className={`card ${className ? className : 'rounded-[35px] bg-[#FBFBFB] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] p-[30px_35px]'}`}>
      <div className="">
          {children}
      </div>
    </div>
  );
}
