import { getTranslations } from "next-intl/server";
import Auth from "@/components/Auth";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Auth',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const LoginSignUpPage = () => {
  return (
    <>
      <Auth />
    </>
  );
};

export default LoginSignUpPage;
