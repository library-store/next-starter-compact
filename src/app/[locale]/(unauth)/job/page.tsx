// import { useTranslations } from 'next-intl';
import MainBanner from '@/components/MainBanner';
import { getTranslations } from 'next-intl/server';

import imgJob from "@/assets/images/banner-job.png"
import JobRegister from '@/components/JobRegister';
import JobLinkTo from '@/components/JobLinkTo';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const BannerContent = () => {
  return (
    <div className="flex md:h-[589px] items-center justify-between py-5 md:py-0">
      <div className="text-[20px] md:text-[35px] font-bold text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="">
          <div className='text-[35px] md:text-[65px]'>Job Opportunities</div>
          <div className='font-medium text-md md:text-3xl'>
            <div>As a pioneering project in the banking for crypto,</div>
            <div>iFlux is seeking talented individuals for various</div>
            <div>positions to build and develop together.</div>
          </div>
        </div>

        <JobLinkTo />
      </div>
      <div className="ms-9">
        <img src={imgJob.src} alt="" className='md:max-w-[312px] md:max-h-[330px]' />
      </div>
    </div>
  )
}

export default function Jobs() {
  // const t = useTranslations('About');

  return <div className='page-saving'>
    <MainBanner>
      <BannerContent />
    </MainBanner>

    <div>
      <div className='mx-auto content-container'>
        <div className='poppins-bold text-[35px] my-[60px] text-blue text-center'>What we offer our team members</div>

        <div className='flex flex-col md:gap-[50px]'>
          <div className='md:flex justify-between'>
            <div className='flex items-center gap-5 md:w-[55%] mb-5 md:mb-0'>
              <div><div className='rounded-full w-[66px] h-[66px] bg-gradient-to-r from-[#09EBAE] to-[#0251F3] flex items-center justify-center font-bold text-[25px] text-white'>1</div></div>
              <div className='font-semibold text-[22px]'>Competitive Salary and Bonus</div>
            </div>
            <div className='flex items-center gap-5 md:w-[45%] mb-5 md:mb-0'>
              <div><div className='rounded-full w-[66px] h-[66px] bg-gradient-to-r from-[#09EBAE] to-[#0251F3] flex items-center justify-center font-bold text-[25px] text-white'>2</div></div>
              <div className='font-semibold text-[22px]'>Flexible Working Hours</div>
            </div>
          </div>

          <div className='md:flex justify-between'>
            <div className='flex items-center gap-5 md:w-[55%] mb-5 md:mb-0'>
              <div><div className='rounded-full w-[66px] h-[66px] bg-gradient-to-r from-[#09EBAE] to-[#0251F3] flex items-center justify-center font-bold text-[25px] text-white'>3</div></div>
              <div className='font-semibold text-[22px]'>Remote Work Opportunities</div>
            </div>
            <div className='flex items-center gap-5 md:w-[45%] mb-5 md:mb-0'>
              <div><div className='rounded-full w-[66px] h-[66px] bg-gradient-to-r from-[#09EBAE] to-[#0251F3] flex items-center justify-center font-bold text-[25px] text-white'>4</div></div>
              <div className='font-semibold text-[22px]'>Comprehensive Training Programs</div>
            </div>
          </div>
          
          <div className='md:flex justify-between'>
            <div className='flex items-center gap-5 md:w-[55%] mb-5 md:mb-0'>
              <div><div className='rounded-full w-[66px] h-[66px] bg-gradient-to-r from-[#09EBAE] to-[#0251F3] flex items-center justify-center font-bold text-[25px] text-white'>5</div></div>
              <div className='font-semibold text-[22px]'>Employee Perks on Products and Services </div>
            </div>
            <div className='flex items-center gap-5 md:w-[45%]'>
              <div><div className='rounded-full w-[66px] h-[66px] bg-gradient-to-r from-[#09EBAE] to-[#0251F3] flex items-center justify-center font-bold text-[25px] text-white'>6</div></div>
              <div className='font-semibold text-[22px]'>Participation in Leading
  Blockchain Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id='job-register' className='mt-[85px] transition-all mb-[125px]'>
      <JobRegister />
    </div>
  </div>;
}