import * as React from 'react';

import Carousel from './Carousel';
import { chunk } from 'lodash';

function CarouselItem1({coins = []}) {
  return (
    <div className="rounded-[19px]">
      {
        coins.map((coin: any, idx: number) => (
          <div key={idx.toString()} className='coin-item flex justify-between items-center p-[18px_26px] text-[1rem] md:text-[22px]'>
            <div className='flex justify-between items-center gap-4'>
              <img src={coin?.token?.icon_url} alt='eth' width={50} height={50}/> <span>{coin?.token?.name}</span>
            </div>
            <div className='font-bold'>Up to {coin?.interest_rate}%</div>
          </div>
        ))
      }
    </div>
  );
}

export default function CoinRatingCasousel({coins = []}) {

  const splitArrays = chunk(coins, 3);

  return (
    <div className="w-100">
      <div className="mx-auto">
        <div className="mx-auto">
          <Carousel
            className='coin-rating-slider'
            items={splitArrays.map((item, idx) => <CarouselItem1 key={idx.toString()} coins={item}  />)}
          />
        </div>
      </div>
    </div>
  );
}
