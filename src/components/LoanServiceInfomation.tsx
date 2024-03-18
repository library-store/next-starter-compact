'use client';

import * as React from 'react';
import LoanInfomationTabs from './LoanInfomationTabs';

export interface ILoanServiceInfomationProps {
  children?: React.ReactNode;
}

export default function LoanServiceInfomation ({}: ILoanServiceInfomationProps) {
  return (
    <div>
      <div className='mx-auto content-container'>
        <div className='poppins-bold text-[35px] mb-[59px]'>Service information</div>
        <LoanInfomationTabs />
      </div>
    </div>
  );
}
