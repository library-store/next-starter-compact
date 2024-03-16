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
        <SavingTabs />
      </div>
    </div>
  );
}
