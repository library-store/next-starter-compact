import { useTranslations } from 'next-intl';

import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';
import Divider from '@/components/Elements/Divider';

const BaseTemplate = (props: {
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full">
      <div>
        <Header />
        <Divider />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

export { BaseTemplate };
