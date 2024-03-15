import * as React from "react";

import imgSafety from "@/assets/images/Safety.png"
import imgPerfomance from "@/assets/images/Perfomance.png"
import imgTransparency from "@/assets/images/Transparency.png"
import Image from "next/image";

import imgNew from "@/assets/images/image-1.png"

export default function IndustryNews() {
  return (
    <section className="section-industry-news mt-[104px]">
      <div className="">
        <div className="title text-center text-[45px] mb-[40px]">
          <div className="content-container mx-auto">
            <div className="flex justify-between">
              <div className="poppins-bold">Recent <span className="text-blue">Industry News</span></div>
              <a href="/" title="Read more" className="poppins-bold text-[22px] text-blue font-bold flex items-center gap-[18px]">
                <span>Read more </span>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM19.2071 8.70711C19.5976 8.31658 19.5976 7.68342 19.2071 7.29289L12.8431 0.928932C12.4526 0.538408 11.8195 0.538408 11.4289 0.928932C11.0384 1.31946 11.0384 1.95262 11.4289 2.34315L17.0858 8L11.4289 13.6569C11.0384 14.0474 11.0384 14.6805 11.4289 15.0711C11.8195 15.4616 12.4526 15.4616 12.8431 15.0711L19.2071 8.70711ZM1 9H18.5V7H1V9Z" fill="#004BEF"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="content-container mx-auto">
            <div className="flex justify-between gap-[58px]">
              {
                [1,2,3].map(item => (
                  <div className="grow bg-gray rounded-[35px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] p-[38px]">
                    <div className="font-medium text-[15px] mb-6">
                      26.01.2023
                    </div>
                    <a href="/" className="block font-bold text-[25px] mb-6">
                      July’s Blockchain
                      Marvel
                    </a>
                    <div className="text-[18px] mb-5">
                      Welcome to our monthly
                      roundup of the most
                      significant updates shaping
                      the world of economics,...
                    </div>
                    <div className="rounded-[19px] overflow-hidden mb-[41px]">
                      <Image src={imgNew} alt="11" />
                    </div>
                    <a href="/" className="flex gap-2 items-center poppins-bold text-[18px]">
                      <span>Read more </span>
                      <span className="mt-[2px]">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM19.2071 8.70711C19.5976 8.31658 19.5976 7.68342 19.2071 7.29289L12.8431 0.928932C12.4526 0.538408 11.8195 0.538408 11.4289 0.928932C11.0384 1.31946 11.0384 1.95262 11.4289 2.34315L17.0858 8L11.4289 13.6569C11.0384 14.0474 11.0384 14.6805 11.4289 15.0711C11.8195 15.4616 12.4526 15.4616 12.8431 15.0711L19.2071 8.70711ZM1 9H18.5V7H1V9Z" fill="#3C3C3C"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
