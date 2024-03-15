import Image from 'next/image';
import * as React from 'react';

import imgEth from '@/assets/images/ETH.png';

import Carousel from './Carousel';

function CarouselItem1() {
  return (
    <div className="rounded-[19px]">
      <div className='coin-item flex justify-between items-center p-[18px_26px] text-[22px]'>
        <div className='flex justify-between items-center gap-4'>
          <Image src={imgEth} alt='eth' width={50} height={50}/> <span>Ethereum</span>
        </div>
        <div className='font-bold'>Up to 15%</div>
      </div>
      <div className='coin-item flex justify-between items-center p-[18px_26px] text-[22px]'>
        <div className='flex justify-between items-center gap-4'>
          <Image src={imgEth} alt='eth' width={50} height={50}/> <span>Ethereum</span>
        </div>
        <div className='font-bold'>Up to 15%</div>
      </div>
      <div className='coin-item flex justify-between items-center p-[18px_26px] text-[22px]'>
        <div className='flex justify-between items-center gap-4'>
          <Image src={imgEth} alt='eth' width={50} height={50}/> <span>Ethereum</span>
        </div>
        <div className='font-bold'>Up to 15%</div>
      </div>
    </div>
  );
}

export default function CoinRatingCasousel() {
  return (
    <div className="w-100">
      <div className="mx-auto">
        <div className="mx-auto">
          <Carousel
            className='coin-rating-slider'
            items={[
              <CarouselItem1 key="1" />,
              <CarouselItem1 key="2" />,
              <CarouselItem1 key="3" />,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
