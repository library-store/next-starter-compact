'use client';

import * as React from 'react';
import * as Tabs from "@radix-ui/react-tabs";
import Select from './Elements/Select';
import savingCss from "./saving.module.scss"
import Divider from './Elements/Divider';
import Dropdown from './Elements/Dropdown';

export interface ISavingsInterestCalculatorProps {
  children?: React.ReactNode;
  coins?: [];
  terms?: [];
  selectedCoin?: any;
  onSelectedCoinChange?: (coin: any) => void;
  onChangingDepositTerm?: (coin: any) => void;
}

export default function SavingsInterestCalculator({
  coins = [],
  terms = [],
  selectedCoin = {},
  onSelectedCoinChange = () => {},
  onChangingDepositTerm = () => {},
}: ISavingsInterestCalculatorProps) {
 

  return (
    <div>
      <div className='mx-auto content-container'>
        <div className='poppins-bold text-[35px] mb-[59px]'>Savings Interest Calculation</div>

        <Tabs.Root className="TabsRoot" defaultValue="tab1">
          <Tabs.List className="TabsList" aria-label="Manage your account">
            <Tabs.Trigger className="TabsTrigger" value="tab1">
              <div className="bg-gradient-to-b from-[#07EBAC] to-[#0F64EF] rounded-[20px] text-white font-medium text-[20px] w-[330px] h-[58px] flex items-center justify-center">
                Single Deposit Savings
              </div>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="TabsContent" value="tab1">
            <div className="rounded-[30px] mt-[27px] bg-gradient-to-b from-[#E1FFF7] to-[#E1EBFF] shadow-[4px_2px_4px_rgba(0,0,0,0.25)]">
              <div className="flex">
                <div className="relative flex flex-col justify-center w-[50%] p-[58px_40px]">
                  <div className={`mb-5 dropdownmb-[38px]`}>
                    <label className='inline-block mb-3 font-medium text-[18px]' htmlFor="btnLeft">Deposit amount</label>
                    <div className={`input-group bg-white rounded-[12px] shadow-[inset_3px_3px_4px_rgba(0,0,0,0.08)] flex h-[60px]`}>
                      <div className="dropdown">
                        <Dropdown
                          offset={[0, 5]}
                          placement='bottom-start'
                          btnClassName="h-full border-0 bg-none dark:bg-[#1b2e4b] text-info flex justify-center items-center rounded-none px-3 font-semibold border border-info cursor-pointer pt-2 pb-2"
                          button={
                            <div className="flex justify-center items-center gap-3">
                              <img src={selectedCoin.icon_url} alt={selectedCoin.symbol} className="w-[34px] h-[34px]" />
                              <span className='font-bold text-[20px] text-black'>{selectedCoin.symbol}</span>
                              <div className='ms-[29px]'>
                                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M-0.000288989 0.587323C0.0680361 0.473595 0.118776 0.346295 0.207196 0.248948C0.511642 -0.0861509 1.02709 -0.0777266 1.39534 0.265796C2.73419 1.5154 4.07003 2.76734 5.40588 4.01974C5.47018 4.08012 5.51992 4.15406 5.59326 4.24158C5.69173 4.15547 5.75704 4.10118 5.81833 4.04315C7.15016 2.79823 8.47947 1.55097 9.81531 0.30979C9.93588 0.197935 10.0841 0.0930992 10.2413 0.0392775C10.5593 -0.06977 10.9105 0.0570621 11.1024 0.310726C11.3044 0.577963 11.2989 0.913062 11.0823 1.18077C11.022 1.25471 10.9502 1.3207 10.8794 1.38669C9.35412 2.81461 7.82888 4.24205 6.30313 5.6695C5.83089 6.1113 5.42044 6.11037 4.94569 5.66622C3.432 4.25001 1.91531 2.83613 0.408652 1.41337C0.243871 1.25799 0.13435 1.05113 -0.000791588 0.868132L-0.000791575 0.587323L-0.000288989 0.587323Z" fill="#3C3C3C" />
                                </svg>
                              </div>
                            </div>
                          }
                        >
                          <ul className="!min-w-[170px] bg-gray p-3 space-y-2 max-h-64 overflow-auto">
                            {
                              coins.map((coin: any, index: number) => (
                                <li key={index}>
                                  <button type="button" className='flex items-center gap-3' onClick={() => onSelectedCoinChange(coin)}>
                                    <img src={coin.icon_url} alt={coin.symbol} className="w-[34px] h-[34px]" />
                                    <span className='text-black'>{coin.symbol}</span>
                                  </button>
                                </li>
                              ))
                            }
                          </ul>
                        </Dropdown>
                      </div>

                      <input id="btnLeft" type="text" placeholder="Enter deposit amount" className="ps-[40px] border-0 bg-transparent grow form-input" />
                    </div>
                  </div>

                  <Select
                    className=""
                    label="Deposit term"
                    height={60}
                    options={terms.map((term: any) => ({ label: term.name, value: term }))}
                    onChange={(e) => onChangingDepositTerm(e)}
                    style={{
                      border: 'none',
                      color: '#3C3C3C',
                      boxShadow: 'inset 3px 3px 4px rgba(0, 0, 0, 0.08)',
                      height: `60px`,
                      borderRadius: "12px",
                      padding: '0px 12px'
                    }}
                  />

                  <div className={savingCss.arrow}></div>
                </div>

                <div className="w-[50%] bg-white rounded-tr-[30px] rounded-br-[30px]">
                  <div className="p-[33px_42px]">
                    <div className="font-semibold text-[25px] mb-8">
                      Estimated Interest
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="font-medium text-[1.125rem]">
                          Periodic interest:
                        </div>
                        <div className="text-[25px] font-bold">2612001000 ETH</div>
                      </div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="font-medium text-[1.125rem]">
                          Total interest:
                        </div>
                        <div className="text-[25px] font-bold">2612001000 ETH</div>
                      </div>
                      <div className="flex items-center justify-between mb-[31px]">
                        <div className="font-medium text-[1.125rem]">
                          Interest rate:
                        </div>
                        <div className="text-[25px] font-bold">15%</div>
                      </div>
                      <Divider color="#C5BDBD" />
                      <div className="mt-[6px]">Interest applied according to the iFlux deposit interest rate table</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}
