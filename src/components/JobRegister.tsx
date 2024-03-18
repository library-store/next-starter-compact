'use client';

import * as React from 'react';
import { Button } from './Elements/button';
import axios from 'axios';

export interface IJobRegisterProps {
  children?: React.ReactNode;
}

export default function JobRegister ({}: IJobRegisterProps) {
  const FORM_ACTION_URL = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSfE2QAC0h0vNRj37SJtBgDsYU5qAVYAg1FGRi1_vUHNrDmyAA/formResponse';

  const handleSubmit = () => {
    axios.post(FORM_ACTION_URL, {
      'entry.1368318470': '', // Full name
      'entry.1979596615': '', // Address
      'entry.1840010903': '', // Position Applied For
      'entry.1527449654': 'Software Engineer', // Self Description
      'entry.1441207839_year': '',
      'entry.1441207839_month': '',
      'entry.1441207839_day': '',
      'entry.700957981': '', // CV Attachment
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div>
      <div className='mx-auto content-container'>
        <div className='poppins-bold text-[35px] mb-[28px]'>Grow with Us – Apply Today</div>
        <div className='bg-[#F5F7FA] rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] p-[40px_75px]'>
          <div className="grid grid-cols-2 gap-[18px] mb-10">
            <div className='grow bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0]'>
              <div className='font-semibold text-sm'>Full name <span className='text-red-500'>*</span></div>
              <input type="text" placeholder='Your name' className='w-full outline-0 placeholder:font-bold placeholder:text-[15px]'/>
            </div>
            <div className='grow bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0]'>
              <div className='font-semibold text-sm'>Date of birth <span className='text-red-500'>*</span></div>
              <input type="text" placeholder='Date of birth' className='w-full outline-0 placeholder:font-bold placeholder:text-[15px]'/>
            </div>
          </div>

          <div className='bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0] mb-10'>
            <div className='font-semibold text-sm'>Address <span className='text-red-500'>*</span></div>
            <input type="text" placeholder='Your address' className='w-full outline-0 placeholder:font-bold placeholder:text-[15px]'/>
          </div>
          <div className='bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0] mb-10'>
            <div className='font-semibold text-sm'>Position Applied For<span className='text-red-500'>*</span></div>
            <input type="text" placeholder='Position Applied For' className='w-full outline-0 placeholder:font-bold placeholder:text-[15px]'/>
          </div>
          <div className='bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0] mb-10'>
            <div className='font-semibold text-sm'>Self Description (optional)<span className='text-red-500'>*</span></div>
            <input type="text" placeholder='Self Description' className='w-full outline-0 placeholder:font-bold placeholder:text-[15px]'/>
          </div>
          <div className='flex items-center justify-between bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0]'>
            <div className='grow'>
              <div className='font-semibold text-sm'>CV Attachment<span className='text-red-500'>*</span></div>
              <input type="text" placeholder='CV Attachment' className='w-full outline-0 placeholder:font-bold placeholder:text-[15px]'/>
            </div>
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16.1711C0.0588631 15.8333 0.0943541 15.4892 0.182649 15.1603C0.347985 14.5378 0.689045 14.0155 1.13225 13.5615C3.87804 10.7488 6.62037 7.93261 9.37049 5.12347C10.6949 3.77034 12.8218 4.14187 13.5576 5.86566C13.9713 6.83573 13.825 7.76058 13.181 8.59499C13.1144 8.68189 13.0373 8.76081 12.9611 8.83884C10.939 10.9111 8.9169 12.9825 6.89564 15.0556C6.69049 15.2658 6.46802 15.4015 6.16505 15.3172C5.71665 15.1913 5.52707 14.6602 5.79629 14.2718C5.85082 14.1929 5.92007 14.1237 5.98759 14.0545C7.99154 12.0009 9.99461 9.94635 12.0029 7.89625C12.3881 7.50343 12.5482 7.05298 12.3803 6.51385C12.1284 5.70339 11.1269 5.40279 10.4794 5.93482C10.4101 5.99157 10.3443 6.05364 10.2811 6.11749C7.55266 8.91155 4.82418 11.7056 2.09743 14.5006C1.1487 15.4733 1.08983 16.8708 1.95027 17.8568C2.78301 18.8109 4.25459 18.8987 5.19381 18.0483C5.26479 17.9836 5.33404 17.9153 5.40069 17.8462C8.78965 14.3746 12.1769 10.9022 15.5667 7.43338C16.1934 6.79228 16.5734 6.03946 16.6392 5.12702C16.7656 3.37752 15.6385 1.80802 13.9609 1.44535C12.7153 1.17579 11.6367 1.53757 10.7391 2.45622C8.04607 5.21215 5.35481 7.97074 2.66442 10.7302C2.45234 10.9475 2.22122 11.0778 1.91392 10.9794C1.46985 10.8366 1.30191 10.3002 1.58411 9.92064C1.63432 9.85413 1.69405 9.79472 1.75291 9.73443C4.41733 7.00421 7.08435 4.27577 9.74618 1.54289C10.9546 0.30503 12.3976 -0.218136 14.0847 0.0833495C15.4351 0.324538 16.5128 1.05342 17.2296 2.2505C18.2657 3.98138 18.2502 5.7495 17.2253 7.48747C17.0244 7.82797 16.7535 8.13478 16.4765 8.41853C13.1066 11.8812 9.728 15.335 6.35722 18.7967C5.72963 19.4405 4.9999 19.8572 4.11176 19.9681C4.08753 19.9707 4.06502 19.9894 4.04165 20H3.31711C3.26864 19.9867 3.22103 19.9698 3.17168 19.9619C1.733 19.718 0.740983 18.9022 0.234587 17.503C0.104742 17.1439 0.0753102 16.7466 0 16.3671C0 16.3024 0 16.2368 0 16.172V16.1711Z" fill="#A0A0A0"/>
            </svg>
          </div>

          <div className='text-center mt-[35px]'>
            <Button type='submit' className='rounded-full w-[170px] h-[43px] bg-gradient-to-r from-[#0253F1] to-[#14A1FE] text-white font-extrabold text-[22px]'  onClick={() => handleSubmit()}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
