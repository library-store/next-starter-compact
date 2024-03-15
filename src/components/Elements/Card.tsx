import * as React from 'react';

export interface ICardProps {
  children?: React.ReactNode;
}

export default function Card({ children }: ICardProps) {
  return (
    <div className="card">
      <div className="mb-5 flex items-center justify-center">
        <div className="w-full max-w-[24rem] rounded rounded-[18px]  bg-[#FBFBFB] p-5 shadow-[0px_2px_4px_rgba(0,0,0,0.25)]">
          {children}
        </div>
      </div>
    </div>
  );
}
