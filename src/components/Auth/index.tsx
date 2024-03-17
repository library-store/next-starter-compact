'use client'

import HeaderLogo from '@/assets/svgs/head-logo';
import React from 'react';
import { Button } from '../Elements/button';

import imgBank from "@/assets/images/bank-3d.png"
import { register } from '@/app/api/auth';

export interface IAuthProps {
}

export default function Auth (props: IAuthProps) {
  const [state, setState] = React.useState({
    page: 'login', // login, register
  })

  const handleRegister = async () => {
    try {
      const res = await register({
        email: 'phungtheanh.htp@gmail.com',
        password: 'Phungtheanh@135'
      })

      console.log('res', res);
      
    } catch (error) {
      
    }
  }

  return (
    <div className="flex min-h-screen max-h-screen">
      <div className="flex flex-col grow w-[43%] p-[54px_80px]">
        <div className="mb-[3.375rem]"><HeaderLogo /></div>

        {
          state.page == 'register' && (
            <div className="grow flex items-center">
              <div className="grow">
                <div className="mb-[3.375rem]">
                  <div className="font-extrabold text-[40px]">Register</div>
                  <div className="poppins-regular text-xl text-[#808080]">Welcome to iFlux!</div>
                </div>

                <div className="register">
                  <div className="grid grid-cols-1 gap-[2.1875rem]">
                    <label className="block">
                      <span className="animate__animated animate__slideInDown duration-150 font-bold text-xl mb-3 inline-block">Username</span>
                      <input
                        type="text"
                        className="animate__animated animate__slideInUp duration-150 block w-full rounded-[13px] border border-solid border-[#0251F3] h-16 p-[16px_23px] placeholder:poppins-regular placeholder:text-xl placeholder:text-[#7D7575]"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block">
                      <span className="animate__animated animate__slideInDown duration-150 font-bold text-xl mb-3 inline-block">E-Mail</span>
                      <input
                        type="email"
                        className="animate__animated animate__slideInUp duration-150 block w-full rounded-[13px] border border-solid border-[#0251F3] h-16 p-[16px_23px] placeholder:poppins-regular placeholder:text-xl placeholder:text-[#7D7575]"
                        placeholder="Your email"
                      />
                    </label>
                    <label className="block">
                      <span className="animate__animated animate__slideInDown duration-150 font-bold text-xl mb-3 inline-block">Password</span>
                      <input
                        type="password"
                        className="animate__animated animate__slideInUp duration-150 block w-full rounded-[13px] border border-solid border-[#0251F3] h-16 p-[16px_23px] placeholder:poppins-regular placeholder:text-xl placeholder:text-[#7D7575]"
                      />
                    </label>
                    <div className="block">
                      <div className="mt-2">
                        <Button className="w-full bg-gradient-to-br from-[#07EBAC] to-[#004BEF] poppins-bold text-white text-[25px] rounded-[13px]" onClick={() => handleRegister()}>
                          Sign up
                        </Button>
                      </div>
                    </div>
                    <div className="poppins-regular text-xl text-center">
                      Already have an account?{" "}
                      <a className="poppins-bold" href="#" onClick={(e) => {
                        e.preventDefault();

                        setState({
                          ...state,
                          page: 'login'
                        })
                      }}>
                        Login Here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {
          state.page == 'login' && (
            <div className="grow flex items-center">
              <div className="grow">
                <div className="mb-[3.375rem]">
                  <div className="font-extrabold text-[40px]">Log in</div>
                  <div className="poppins-regular text-xl text-[#808080]">Welcome to iFlux!</div>
                </div>

                <div className="login">
                  <div className="grid grid-cols-1 gap-[2.1875rem]">
                    <label className="block">
                      <span className="animate__animated animate__slideInUp duration-150 font-bold text-xl mb-3 inline-block">E-Mail</span>
                      <input
                        type="email"
                        className="animate__animated animate__slideInDown duration-150 block w-full rounded-[13px] border border-solid border-[#0251F3] h-16 p-[16px_23px] placeholder:poppins-regular placeholder:text-xl placeholder:text-[#7D7575]"
                        placeholder="Your email"
                      />
                    </label>
                    <label className="block">
                      <span className="animate__animated animate__slideInUp duration-150 font-bold text-xl mb-3 inline-block">Password</span>
                      <input
                        type="password"
                        className="animate__animated animate__slideInDown duration-150 block w-full rounded-[13px] border border-solid border-[#0251F3] h-16 p-[16px_23px] placeholder:poppins-regular placeholder:text-xl placeholder:text-[#7D7575]"
                      />
                    </label>
                    <div className="block">
                      <div className="mt-2">
                        <Button className="w-full bg-gradient-to-br from-[#07EBAC] to-[#004BEF] poppins-bold text-white text-[25px] rounded-[13px]">
                          Log in
                        </Button>
                      </div>
                    </div>
                    <div className="poppins-regular text-xl text-center">
                      Don't have an account?{" "}
                      <a className="poppins-bold" href="#" onClick={(e) => {
                        e.preventDefault();
                        
                        setState({
                          ...state,
                          page: 'register'
                        })
                      }}>
                        Register Here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
      {/* END Left */}
      <div className="right grow bg-gradient-to-br from-[#16A7FF] to-[#0250F1] w-[57%] shadow-[2px_2px_36.3px_rgba(0,0,0,0.35)] rounded-[45px_0px_0px_45px]">
          <div className="flex items-center justify-center h-[100%] w-[100%]">
            <img src={imgBank.src} alt="" className="max-h-[72%]"/>
          </div>
      </div>
      {/* END Right */}
    </div>
  );
}
