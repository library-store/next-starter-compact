import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const tabsData = [
  {
    label: "Benefits",
    content: (
      <div className="flex gap-[130px] bg-gray rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] py-[48px] ps-[50px]">
        <div className="font-semibold text-2xl leading-5"><span>Benefits</span></div>
        <div>
          <ul className="list-disc font-medium text-[18px]">
            <li className="mb-12">Loan amount: Maximum based on customer needs and repayment capacity</li>
            <li className="mb-12">Competitive interest rates</li>
            <li className="mb-12">Flexible repayment policies</li>
            <li className="">No additional collateral required in case of value fluctuation</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "Features",
    content: (
      <div className="flex gap-[130px] bg-gray rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] py-[48px] ps-[50px]">
        <div className="font-semibold text-2xl leading-5"><span>Features</span></div>
        <div>
          <ul className="list-disc font-medium text-[18px]">
            <li className="mb-12">Varied loan/collateral assets support</li>
            <li className="mb-12">Allow savings book callateral for loan</li>
            <li className="">The collateral is locked and transparenty displayed on-chain</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    label: "Conditions",
    content: (
      <div className="flex gap-[130px] bg-gray rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] py-[48px] ps-[50px]">
        <div className="font-semibold text-2xl leading-5"><span>Conditions</span></div>
        <div>
          <ul className="list-disc font-medium text-[18px]">
            <li className="">Have collateral in cryptocurrencies</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    label: "Process",
    content: (
      <div className="flex gap-[130px] bg-gray rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] py-[48px] ps-[50px]">
        <div className="font-semibold text-2xl leading-5"><span>Process</span></div>
        <div>
          <ul className="list-disc font-medium text-[18px]">
            <li className="mb-12">Step 1: Submit a loan application request</li>
            <li className="mb-12">Step 2: Sales rep support loan application</li>
            <li className="mb-12">Step 3: Wait for the loan application approval</li>
            <li className="mb-12">Step 4: Submit collateral assets to iFlux</li>
            <li className="mb-12">Step 5: Sign the loan contract</li>
            <li className="">Step 6: Receive disbursement</li>
          </ul>
        </div>
      </div>
    )
  }
];

function LoanInfomationTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative">
        <div className="flex border-b-2 text-[22px]">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el!)}
                className={classNames(
                  "pt-2 pb-3 me-16",
                  activeTabIndex == idx && "text-blue font-semibold"
                )}
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 rounded-2xl bg-blue transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <div>{tabsData[activeTabIndex]?.content}</div>
      </div>
    </div>
  );
}

export default LoanInfomationTabs;
