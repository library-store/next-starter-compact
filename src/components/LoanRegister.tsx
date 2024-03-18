"use client";

import * as React from "react";
import { Button } from "./Elements/button";

export interface ILoanRegisterProps {
  children?: React.ReactNode;
}

export default function LoanRegister({}: ILoanRegisterProps) {
  return (
    <div>
      <div className="mx-auto content-container">
        <div className="poppins-bold text-[35px] mb-[28px]">
          Register to loan
        </div>
        <div className="bg-[#F5F7FA] rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] p-[20px] md:p-[40px_75px]">
          <div className="md:grid grid-cols-2 gap-[18px] mb-10">
            <div className="grow bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0] mb-10  md:mb-0">
              <div className="font-semibold text-sm">
                Your name <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
              />
            </div>
            <div className="grow bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0]">
              <div className="font-semibold text-sm">
                Contact Info (your email or Telegram){" "}
                <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                placeholder="Your contact"
                className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0] mb-10">
            <div className="font-semibold text-sm">
              Desired Loan Asset <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              placeholder="Desired Loan Asset"
              className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
            />
          </div>
          <div className="bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0] mb-10">
            <div className="font-semibold text-sm">
              Desired Loan Amount<span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              placeholder="Desired Loan Amount"
              className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
            />
          </div>
          <div className="bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0]">
            <div className="font-semibold text-sm">
              Loan Collateral<span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              placeholder="Loan Collateral"
              className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
            />
          </div>

          <div className="text-center mt-[35px]">
            <Button
              type="submit"
              className="rounded-full w-[170px] h-[43px] bg-gradient-to-r from-[#0253F1] to-[#14A1FE] text-white font-extrabold text-[22px]"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
