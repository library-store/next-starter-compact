import HeaderLogo from '@/assets/svgs/head-logo';
import Input from '@/components/Elements/input/Input';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignUpPage = () => {
  return <div>
    <div className='left p-[54px_80px]'>
      <HeaderLogo />

      <div>
        <div>Register</div>
        <div>Welcome to iFlux!</div>
      </div>

      <div>
        <div>
          <Input />
        </div>
      </div>
    </div>{/* END Left */}
    <div>

    </div>{/* END Right */}
  </div>;
};

export default SignUpPage;
