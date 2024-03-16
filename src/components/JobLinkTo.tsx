'use client'

import * as React from 'react';
import { Button } from './Elements/button';

export interface IJobLinkToProps {
}

export default function JobLinkTo (props: IJobLinkToProps) {
  function scrollToElement(targetId: string) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  return (
    <a href='#job-register' onClick={e => {
      e.preventDefault()
      scrollToElement('job-register')
    }}>
      <Button className="poppins-bold text-[30px] mt-[50px] bg-gradient-to-r from-[#07EBAC] to-[#5DC8FF] rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" style={{
        paddingLeft: '28px',
        paddingRight: '28px'
      }}
      >
        Join us now
        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse opacity="0.5" cx="15.0068" cy="14" rx="14.4651" ry="14" fill="white" />
          <path d="M12.7466 7.875L19.5639 14.085C20.0189 14.4994 19.995 15.2226 19.5137 15.6062L12.7466 21" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </Button>
    </a>
  );
}
