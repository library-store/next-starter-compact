import * as React from 'react';
import ReactSelect from 'react-select';

export interface ISelectProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  height?: number,
  onChange?: (e: any) => void;
  options: { 
    label: string; 
    value: string | number;
  }[];
  style: React.CSSProperties
}

const DropdownIndicator = () => {
  return (
    <div className='p-2'>
      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-0.000288989 0.587323C0.0680361 0.473595 0.118776 0.346295 0.207196 0.248948C0.511642 -0.0861509 1.02709 -0.0777266 1.39534 0.265796C2.73419 1.5154 4.07003 2.76734 5.40588 4.01974C5.47018 4.08012 5.51992 4.15406 5.59326 4.24158C5.69173 4.15547 5.75704 4.10118 5.81833 4.04315C7.15016 2.79823 8.47947 1.55097 9.81531 0.30979C9.93588 0.197935 10.0841 0.0930992 10.2413 0.0392775C10.5593 -0.06977 10.9105 0.0570621 11.1024 0.310726C11.3044 0.577963 11.2989 0.913062 11.0823 1.18077C11.022 1.25471 10.9502 1.3207 10.8794 1.38669C9.35412 2.81461 7.82888 4.24205 6.30313 5.6695C5.83089 6.1113 5.42044 6.11037 4.94569 5.66622C3.432 4.25001 1.91531 2.83613 0.408652 1.41337C0.243871 1.25799 0.13435 1.05113 -0.000791588 0.868132L-0.000791575 0.587323L-0.000288989 0.587323Z" fill="#3C3C3C" />
      </svg>
    </div>
  );
}

export default function Select(props: Readonly<ISelectProps>) {
  const {
    label,
    placeholder = 'Select an option',
    options,
    height = 48,
    style = {},
    onChange,
    ...rest
  } = props;

  console.log('rest', rest);
  

  return (
    <div>
      {label && <label className='inline-block mb-3 font-medium text-[18px]' htmlFor="select">{label}</label>}
      
      <ReactSelect 
        className='rounded-[12px] shadow-[inset_3px_3px_4px_rgba(0,0,0,0.08)]'
        id="select"
        placeholder={placeholder}
        options={options}
        styles={{
          indicatorSeparator: (provided) => ({ ...provided, display: 'none' }),
          control: (provided) => ({ ...provided, ...style }),
        }} 
        components={{ 
          DropdownIndicator,
          // Option: ({ children, ...props }) => {
          //   return (
          //     <div {...props} className='p-3'>
          //       1 {children}
          //     </div>
          //   )
          // }
        }}
        onChange={(e) => {
          if (onChange && e) {
            onChange(e);
          }
        }}
        // {...rest}
      />
    </div>
  );
}
