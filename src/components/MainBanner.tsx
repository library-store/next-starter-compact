import * as React from 'react';

export interface IMainBanerProps {
  children: React.ReactNode;
}

export default function MainBanner ({children}: Readonly<IMainBanerProps>) {
  return (
    <div className="w-full">
      <div className="mx-auto bg-gradient-to-r from-[#004BEF] to-[#16ABFF]">
        <div className="content-container mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}