'use client';

import * as React from 'react';
import SavingTabs from './SavingTabs';

export interface ISavingsInterestCalculatorProps {
  children?: React.ReactNode;
}

export default function SavingsInterestCalculator ({}: ISavingsInterestCalculatorProps) {
  return (
    <div>
      <div className='mx-auto content-container'>
        <div className='poppins-bold text-[35px] mb-[59px]'>Savings Interest Calculation</div>

        <SavingTabs />
      </div>
    </div>
  );
}
