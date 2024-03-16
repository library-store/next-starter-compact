'use client';

import * as React from 'react';
import SavingTabs from './SavingTabs';
import SavingInfomationTabs from './SavingInfomationTabs';

export interface IServiceInfomationProps {
  children?: React.ReactNode;
}

export default function ServiceInfomation ({}: IServiceInfomationProps) {
  return (
    <div>
      <div className='mx-auto content-container'>
        <div className='poppins-bold text-[35px] mb-[59px]'>Service information</div>
        <SavingInfomationTabs />
      </div>
    </div>
  );
}
