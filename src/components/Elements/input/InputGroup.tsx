import * as React from 'react';
import Dropdown from '../Dropdown';

import imgETH from '@/assets/images/ETH.png'
import Image from 'next/image';

export interface IInputGroupProps {
  isRtl?: boolean;
  label?: string;
}

export default function InputGroup ({
  isRtl = false,
  label,
}: IInputGroupProps) {
  return (
    <div className="mb-5 dropdown">
        {label && <label htmlFor="btnLeft">{label}</label>}
        <div className="flex">
            <div className="dropdown">
                <Dropdown
                    offset={[0, 5]}
                    placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                    btnClassName="bg-white dark:bg-[#1b2e4b] text-info flex justify-center items-center rounded-none px-3 font-semibold border border-info cursor-pointer pt-2 pb-2"
                    button={
                        <button type="button" className="flex justify-center items-center">
                            <Image src={imgETH} alt="ETH" className="w-[34px] h-[34px]" />
                            <span>ETH</span>
                        </button>
                    }
                >
                    <ul className="!min-w-[170px] bg-gray p-3 space-y-2">
                        <li>
                            <button type="button">Action</button>
                        </li>
                        <li>
                            <button type="button">Another action</button>
                        </li>
                        <li>
                            <button type="button">Something else here</button>
                        </li>
                        <li>
                            <button type="button">Separated link</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>

            <input id="btnLeft" type="text" placeholder="Enter deposit amount" className="form-input ltr:rounded-l-none rtl:rounded-r-none ltr:border-l-0 rtl:border-r-0" />
        </div>
    </div>
  );
}
