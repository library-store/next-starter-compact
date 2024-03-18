import Image from 'next/image';
import * as React from 'react';

import image1 from '@/assets/images/carousel/saving-2.png';

import Carousel from './Carousel';

function MainCarouselItem1() {
  return (
    <div className="content-container mx-auto flex md:h-[589px] items-center justify-between">
      <div className="text-[20px] md:text-[35px] font-bold text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="text-[35px] md:text-[65px]">Saving</div>
        <div>Crypto Currencies</div>
        <div>
          Earn up to <span className="text-[35px] md:text-[65px]">15%</span> APY
        </div>
      </div>
      <div className="mr-[-86px]">
        <Image src={image1} alt="" width={617} height={615} />
      </div>
    </div>
  );
}

export default function MainCasousel() {
  return (
    <div className="w-full">
      <div className="mx-auto bg-gradient-to-r from-[#004BEF] to-[#16ABFF]">
        <div className="mx-auto">
          <Carousel
            items={[
              <MainCarouselItem1 key="1" />,
              <MainCarouselItem1 key="2" />,
              <MainCarouselItem1 key="3" />,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
