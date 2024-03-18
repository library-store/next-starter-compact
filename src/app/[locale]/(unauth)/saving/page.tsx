// import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import PageSaving from '@/components/PageSaving';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Saving',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Saving() {
  // const t = useTranslations('About');

  return (
    <PageSaving />
  )
}