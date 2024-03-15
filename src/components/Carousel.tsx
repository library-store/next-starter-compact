/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unstable-nested-components */

'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as React from 'react';
import Slider from 'react-slick';

export interface IAppProps {
  items?: React.ReactNode[];
  className?: string;
}

export default function Carousel({ className, items = [], ...rest }: IAppProps) {
  const settings = {
    customPaging(i: number) {
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
    <div className={`${className}`} {...rest}>
      <Slider {...settings}>
        {items.map((item, idx) => (
          <div key={`${idx.toString()}`}>{item}</div>
        ))}
      </Slider>
    </div>
  );
}
