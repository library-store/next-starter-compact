'use client';

import * as React from 'react';
import ServiceInfomation from './ServiceInfomation';
import SavingTermSvg from '@/assets/svgs/SavingTerm';
import DepositCryptoSvg from '@/assets/svgs/DepositCrypto';
import SavingRatingSvg from '@/assets/svgs/SavingRating';
import MainBanner from './MainBanner';
import { Button } from './Elements/button';
import imgSaving1 from '@/assets/images/banner-saving1.png';
import { listSavingsPackages, listTokens } from '@/app/api/coin';
import savingCss from "./saving.module.scss"
import * as Tabs from "@radix-ui/react-tabs";
import Dropdown from './Elements/Dropdown';
import Select from './Elements/Select';
import Divider from './Elements/Divider';

export interface IPageSavingProps {
}

const BannerContent = () => {
  return (
    <div className="flex h-[589px] items-center justify-between">
      <div className="text-[35px] font-bold text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="text-[65px] leading-[121%]">
          <div>Make your</div>
          <div>Crypto</div>
          <div>Make Money</div>
        </div>

        <div>
          <Button className="poppins-bold text-[30px] mt-[50px] bg-gradient-to-r from-[#07EBAC] to-[#5DC8FF] rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" style={{
            paddingLeft: '28px',
            paddingRight: '28px'
          }}>
            Start Saving
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse opacity="0.5" cx="15.0068" cy="14" rx="14.4651" ry="14" fill="white" />
              <path d="M12.7466 7.875L19.5639 14.085C20.0189 14.4994 19.995 15.2226 19.5137 15.6062L12.7466 21" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="mr-[-86px]">
        <img src={imgSaving1.src} alt="" style={{
          maxWidth: '649px',
          maxHeight: '472px'
        }} />
      </div>
    </div>
  )
}

export default function PageSaving({}: IPageSavingProps) {
  const [state, setState] = React.useState({
    selectedCoin: null,
    selectedTerm: null,
    coins: [],
    terms: [],
    amount: 0,
    calculatedInterest: {
      periodicInterest: 0,
      totalInterest: 0
    }
  })

  React.useEffect(() => {
    listTokens().then((res: any) => {
      setState(prev => ({
        ...prev,
        coins: res.results,
        selectedCoin: res.results ? res.results[0] : {}
      }))
    }).catch(error => {
      console.log('error', error)
    })
  }, [])

  React.useEffect(() => {
    listSavingsPackages({ symbol: state.selectedCoin?.['symbol'] }).then((res: any) => {
      setState(prev => ({
        ...prev,
        terms: res.results
      }))
    }).catch(error => {
      console.log('error', error)
    })
  }, [state.selectedCoin])

  React.useEffect(() => {
    if(state.amount === 0 || !state.selectedTerm || !state.selectedCoin) return;

    const periodicInterest = (state.amount * (state.selectedTerm as any).interest_rate / 100) / 12;
    const totalInterest = periodicInterest * (state.selectedTerm as any).term_day / 30;
    
    setState(prev => ({
      ...prev,
      calculatedInterest: {
        periodicInterest,
        totalInterest
      }
    }))
  }, [state.selectedCoin, state.amount, state.selectedTerm])
  
  const handleSelectedCoinChange = (coin: any) => {
    setState(prev => ({
      ...prev,
      selectedCoin: coin,
      terms: []
    }))
  }

  const handleSelectedTerm = (val: { value: any; }) => {
    setState(prev => ({
      ...prev,
      selectedTerm: val.value
    }))
  }

  const toFixedNumber = (val: number) => {
    return val.toLocaleString('EN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 10
    })
  }

  return <div className='page-saving'>
    <MainBanner>
      <BannerContent />
    </MainBanner>

    <div className='mt-[60px]'>
      <div className='title text-center text-[45px] mb-[83px]'>
        <div className='poppins-bold'><span className='text-blue'>The IFLUX </span>difference</div>

        <div className='font-medium text-[25px]'>
          <div>Loan more cryptos with ease and Loan</div>
          <div>more cryptos with ease and flexibility</div>
        </div>
      </div>

      <div className='content'>
        <div className='content-container mx-auto'>
          <div className='flex justify-between gap-[58px]'>
            <div className='grow bg-gray rounded-[18px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] p-[38px]'>
              <div className='text-center'>
                <div className='mx-auto mb-[43px]'>
                  <SavingRatingSvg className='mx-auto' />
                </div>
              </div>
              <div>
                <div className='font-bold text-[25px] text-blue mb-[18px] text-center'>
                  <div>Competitive</div>
                  <div>interest rates</div>
                </div>
                <div className='text-[18px] text-center'>
                  <div>High market-leading </div>
                  <div>interest rates of up to 15%</div>
                  <div>Annual Percentage Yield</div>
                </div>
              </div>
            </div>
            <div className='grow bg-gray rounded-[18px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)]  p-[38px]'>
              <div className='text-center'>

                <div className='mx-auto mb-[43px]'>
                  <DepositCryptoSvg className='mx-auto' />
                </div>

              </div>
              <div>
                <div className='font-bold text-[25px] text-blue mb-[18px] text-center'>
                  <div>Various</div>
                  <div>deposit crypto</div>
                </div>
                <div className='text-[18px] text-center'>
                  <div>A variety of cryptocurrencies</div>
                  <div>are supported: BTC, ETH, </div>
                  <div>BNB, and 20 more.</div>
                </div>
              </div>
            </div>
            <div className='grow bg-gray rounded-[18px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)]  p-[38px]'>
              <div>
                <div className="mx-auto mb-[43px]">
                  <SavingTermSvg className='mx-auto' />
                </div>
              </div>
              <div>
                <div className='font-bold text-[25px] text-blue mb-[18px] text-center'>
                  <div>Diverse</div>
                  <div>saving terms</div>
                </div>
                <div className='text-[18px] text-center'>
                  <div>Flexible deposit and saving </div>
                  <div>terms ranging from 07 days </div>
                  <div>to 24 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='mt-[85px]'>
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
                                <img src={(state.selectedCoin as any)?.icon_url} alt={(state.selectedCoin as any)?.symbol} className="w-[34px] h-[34px]" />
                                <span className='font-bold text-[20px] text-black'>{(state.selectedCoin as any)?.symbol}</span>
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
                                state.coins.map((coin: any, index: number) => (
                                  <li key={index}>
                                    <button type="button" className='flex items-center gap-3' onClick={() => {
                                      handleSelectedCoinChange(coin)
                                    }}>
                                      <img src={coin.icon_url} alt={coin.symbol} className="w-[34px] h-[34px]" />
                                      <span className='text-black'>{coin.symbol}</span>
                                    </button>
                                  </li>
                                ))
                              }
                            </ul>
                          </Dropdown>
                        </div>

                        <input id="btnLeft" type="number" placeholder="Enter deposit amount" className="ps-[40px] border-0 bg-transparent grow form-input" onChange={(e) => {
                          setState({
                            ...state,
                            amount: parseInt(e.target.value)
                          })
                        }} />
                      </div>
                    </div>

                    <Select
                      className=""
                      label="Deposit term"
                      height={60}
                      options={state.terms.map((term: any) => ({ label: term.name, value: term }))}
                      onChange={(e) => {
                        handleSelectedTerm(e)
                      }}
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
                         
                          <div className="text-[25px] font-bold">{`${toFixedNumber(state.calculatedInterest.periodicInterest)} ${state.selectedCoin?.symbol}`}</div>
                        </div>
                        <div className="flex items-center justify-between mb-8">
                          <div className="font-medium text-[1.125rem]">
                            Total interest:
                          </div>
                          <div className="text-[25px] font-bold">{`${toFixedNumber(state.calculatedInterest.totalInterest)} ${state.selectedCoin?.symbol}`}</div>
                        </div>
                        <div className="flex items-center justify-between mb-[31px]">
                          <div className="font-medium text-[1.125rem]">
                            Interest rate:
                          </div>
                          <div className="text-[25px] font-bold">{state.selectedTerm?.interest_rate} %</div>
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
    </div>

    <div className='mt-[85px] mb-[200px]'>
      <ServiceInfomation />
    </div>
  </div>;
}
