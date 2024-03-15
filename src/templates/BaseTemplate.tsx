// import { useTranslations } from 'next-intl';

import React from 'react';

import Divider from '@/components/Elements/Divider';
import Footer from '@/components/Layouts/Footer';
import Header from '@/components/Layouts/Header';

export interface IProps {
  children?: React.ReactNode;
}

const BaseTemplate = ({ children }: IProps) => {
  // const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full">
      <div>
        <Header />
        <Divider />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export { BaseTemplate };
