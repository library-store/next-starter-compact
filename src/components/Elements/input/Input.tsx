import * as React from 'react';

export interface IInputProps {
  label?: string;
  className?: string,
  height?: number
}

export default function Input ({
  label,
  height = 48,
  className = ''
}: IInputProps) {
  return (
    <div className={`rounded-[13px] border-solid border border-[#0251F3]  ${className}`}>
        {label && <label className='inline-block mb-3 font-medium text-[18px]' htmlFor="btnLeft">{label}</label>}
        <div >
          <input type="text" placeholder="Enter deposit amount" className={`h-[${height}px]`} />
        </div>
    </div>
  );
}
