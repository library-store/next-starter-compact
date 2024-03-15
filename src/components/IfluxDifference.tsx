import * as React from "react";

import Card from "./Elements/Card";
import CoinRatingCasousel from "./CoinRatingCasousel";
import { Button } from "./Elements/button";
import Image from "next/image";

import imgSafety from "@/assets/images/Safety.png"
import imgPerfomance from "@/assets/images/Perfomance.png"
import imgTransparency from "@/assets/images/Transparency.png"

export default function IfluxDifference() {
  return (
    <section className="section-iflux-difference mt-[104px]">
      <div className="">
        <div className="title text-center text-[45px] mb-[83px]">
          <div className="poppins-bold"><span className="text-blue">The IFLUX </span>difference</div>

          <div className="font-medium text-[25px]">
            <div>Loan more cryptos with ease and Loan</div>
            <div>more cryptos with ease and flexibility</div>
          </div>
        </div>

        <div className="content">
          <div className="content-container mx-auto">
            <div className="flex justify-between gap-[58px]">
              <div className="grow bg-gray rounded-[18px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] p-[17px_40px_20px_40px]">
                <div className="text-center">
                  <img src={imgSafety.src} alt="Safety" className="mx-auto" />
                </div>
                <div>
                  <div className="font-bold text-[25px] text-blue mb-[18px]">Safety</div>
                  <div className="text-[18px]">
                    <div>Be assured that your</div>
                    <div>assets are managed</div>
                    <div>and stored in the</div>
                    <div>most protected and</div>
                    <div>trusted environment.</div>
                  </div>
                </div>
              </div>
              <div className="grow bg-gray rounded-[18px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] p-[17px_40px_20px_40px]">
                <div className="text-center">
                  <img src={imgPerfomance.src} alt="Safety" className="mx-auto" />
                </div>
                <div>
                  <div className="font-bold text-[25px] text-blue mb-[18px]">Performance</div>
                  <div className="text-[18px]">
                    <div>Be ahead of the curve</div>
                    <div>and benefit from high</div>
                    <div>performing innovative</div>
                    <div>products.</div>
                  </div>
                </div>
              </div>
              <div className="grow bg-gray rounded-[18px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] p-[17px_40px_20px_40px]">
                <div>
                  <img src={imgTransparency.src} alt="Safety" className="mx-auto" />
                </div>
                <div>
                  <div className="font-bold text-[25px] text-blue mb-[18px]">Transparency</div>
                  <div className="text-[18px]">
                    <div>One central access</div>
                    <div>point for all your assets</div>
                    <div>with a seamless</div>
                    <div>banking experience.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
