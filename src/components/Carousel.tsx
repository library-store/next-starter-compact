/* eslint-disable import/no-extraneous-dependencies */

'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as React from 'react';
import Slider from 'react-slick';

export interface IAppProps {
  items: [any];
}

export default function Carousel({ items = [] }: IAppProps) {
  const settings = {
    customPaging(i) {
      return <div>{i}</div>;
    },
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider {...settings}>
        {items.map((item, idx) => (
          <div key={`${idx.toString()}`}>{item}</div>
        ))}
      </Slider>
    </div>
  );
}
