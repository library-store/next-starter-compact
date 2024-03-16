import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const tabsData = [
  {
    label: "Features",
    content: (
      <div className="flex gap-[130px] bg-gray rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] py-[48px] ps-[50px]">
        <div className="font-semibold text-2xl leading-5"><span>Features</span></div>
        <div>
          <ul className="list-disc font-medium text-[18px]">
            <li className="mb-12">No minimum/maximum balance required</li>
            <li className="mb-12">Support 20+ cryptocurrencies</li>
            <li className="mb-12">High interest rates of up to 15% APY</li>
            <li className="mb-12">Receive monthly interest payments.</li>
            <li>Ability to cancel the savings plan at any time</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "Conditions",
    content: (
      <div className="flex gap-[130px] bg-gray rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] py-[48px] ps-[50px]">
        <div className="font-semibold text-2xl leading-5"><span>Conditions</span></div>
        <div>
          <ul className="list-disc font-medium text-[18px]">
            <li className="">An account with iFlux is required</li>
          </ul>
        </div>
      </div>
    )
  },
];

function SavingInfomationTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

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
        <div className="flex space-x-3 border-b-2 text-[22px]">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
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
        <div>{tabsData[activeTabIndex].content}</div>
      </div>
    </div>
  );
}

export default SavingInfomationTabs;
