'use client';

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Button } from './Elements/button';
import InputGroup from './Elements/input/InputGroup';
import Select from './Elements/Select';
// import './styles.css';

const options = [
  { value: 'term 1', label: 'Term 1' },
  { value: 'term 2', label: 'Term 2' },
  { value: 'term 3', label: 'Term 3' },
];

const SavingTabs = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        <Button className='bg-gradient-to-b from-[#07EBAC] to-[#0F64EF] rounded-[20px] text-white font-medium text-[20px]'>Single Deposit Savings</Button>
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Testing
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <div className='rounded-[30px] bg-gradient-to-b from-[#E1FFF7] to-[#E1EBFF]'>
        <div>
          <InputGroup label="Deposit amount" />
          <Select label="Deposit term" options={options} onChange={(e) => console.log(e)}/>
        </div>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">
      <p className="Text">Change your password here. After saving, you'll be logged out.</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="currentPassword">
          Current password
        </label>
        <input className="Input" id="currentPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="newPassword">
          New password
        </label>
        <input className="Input" id="newPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          Confirm password
        </label>
        <input className="Input" id="confirmPassword" type="password" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Change password</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

export default SavingTabs;