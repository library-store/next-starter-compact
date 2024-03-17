import HeaderLogo from "@/assets/svgs/head-logo";
import { Button } from "@/components/Elements/button";
import { getTranslations } from "next-intl/server";
import imgBank from "@/assets/images/bank-3d.png"
import { useState } from "react";

import {register} from "@/app/api/auth"
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
