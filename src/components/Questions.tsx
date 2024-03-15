import * as React from "react";

import imgQuestion from "@/assets/images/Question.png"
import AccordionDemo from "./Elements/Accordion";
import { Button } from "./Elements/button";

export default function Questions() {
  return (
    <section className="section-questions mt-[104px]">
      <div className="content-container mx-auto">
        <div className="flex">
          <div className="w-[50%]">
            <div className="poppins-bold text-[45px] mb-[41px]">
              <div className="text-blue">Have any questions?</div>
              <div>We've got you covered</div>
            </div>

            <div className="pb-[147px]">
              <AccordionDemo />
              <div className="mt-[27px]">
                <Button className="bg-gradient-to-r from-[#0253F1] to-[#14A1FE] text-white text-[22px] rounded-[37px] font-extrabold">
                  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6957 0C14.3049 0.106813 14.9276 0.166282 15.5216 0.328522C18.6774 1.19053 20.794 3.20092 21.9441 6.19746C22.3024 7.13106 22.4898 8.12818 22.7634 9.12818C23.0861 9.2321 23.5051 9.32448 23.8874 9.49654C25.4542 10.2038 26.2782 11.8839 25.9158 13.5785C25.5732 15.1819 24.0823 16.3839 22.4005 16.4122C22.2353 16.4151 22.0708 16.4151 21.9056 16.414C21.2299 16.4099 20.8587 16.0473 20.8582 15.3834C20.8564 13.6749 20.8792 11.9665 20.8517 10.2587C20.8202 8.24538 20.3306 6.35393 19.0503 4.74769C17.2705 2.51559 14.8978 1.55947 12.0682 1.93129C9.15276 2.31467 7.15527 3.97171 6.02435 6.64319C5.53184 7.806 5.32001 9.03349 5.31242 10.2921C5.30367 11.7794 5.27391 13.2685 5.32176 14.7546C5.38245 16.6415 6.13289 18.213 7.71314 19.3337C8.47234 19.8724 9.33249 20.1501 10.2708 20.164C10.9308 20.1732 11.5908 20.1622 12.2502 20.1738C12.7194 20.1819 13.0935 20.4879 13.1746 20.9018C13.2592 21.3337 13.0549 21.746 12.6587 21.9267C12.5724 21.9659 12.4731 22.0035 12.3815 22.0006C11.3463 21.97 10.2848 22.0635 9.28055 21.8707C6.39841 21.3176 4.57307 19.5543 3.75727 16.7719C3.6995 16.5739 3.64173 16.4965 3.41998 16.4873C1.46801 16.4036 0.10017 15.0433 0.00680217 13.1022C-0.0568046 11.7737 0.355181 10.6449 1.46976 9.83256C1.97103 9.46709 2.43203 9.33025 3.45499 9.194C3.59037 8.54734 3.69074 7.89319 3.86698 7.25981C4.64893 4.45035 6.25777 2.27829 8.93393 0.955543C9.96797 0.444573 11.0662 0.148383 12.2187 0.0490762C12.3045 0.0415704 12.3879 0.0167436 12.4731 0C12.8805 0 13.2884 0 13.6957 0Z" fill="white"/>
                  </svg>
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[50%] relative">
            <img src={imgQuestion.src} alt="" className="absolute right-0 pt-[20px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
