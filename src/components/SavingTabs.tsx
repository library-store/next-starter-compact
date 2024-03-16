"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Button } from "./Elements/button";
import InputGroup from "./Elements/input/InputGroup";
import Select from "./Elements/Select";
import Divider from "./Elements/Divider";
// import './styles.css';

import savingCss from "./saving.module.scss"

const options = [
  { value: "term 1", label: "Term 1" },
  { value: "term 2", label: "Term 2" },
  { value: "term 3", label: "Term 3" },
];

const SavingTabs = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        <Button className="bg-gradient-to-b from-[#07EBAC] to-[#0F64EF] rounded-[20px] text-white font-medium text-[20px] w-[330px]">
          Single Deposit Savings
        </Button>
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <div className="rounded-[30px] mt-[27px] bg-gradient-to-b from-[#E1FFF7] to-[#E1EBFF] shadow-[4px_2px_4px_rgba(0,0,0,0.25)]">
        <div className="flex">
          <div className="relative flex flex-col justify-center w-[50%] p-[58px_40px]">
            <InputGroup className="mb-[38px]" label="Deposit amount" height={60}/>
            <Select
              className=""
              label="Deposit term"
              height={60}
              options={options}
              onChange={(e) => console.log(e)}
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
                <Divider color="#C5BDBD"/>
                <div className="mt-[6px]">Interest applied according to the iFlux deposit interest rate table</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

export default SavingTabs;
