'use client';

import { Button } from '../Elements/button';

const Navbar = () => {
  return (
    <nav className="flex flex-1 items-center justify-between">
      <ul className="flex flex-1 items-center justify-center gap-[85px] font-medium  transition-all">
        <li>
          <a href="#" className="hover:font-bold">
            About us
          </a>
        </li>
        <li>
          <a href="/loan" className="hover:font-bold">
            Loan
          </a>
        </li>
        <li>
          <a href="/saving" className="hover:font-bold">
            Saving
          </a>
        </li>
      </ul>

      <ul className="flex items-center gap-[7px] font-medium">
        <li>
          <Button className="rounded-full bg-black text-white">Log in</Button>
        </li>
        <li>
          <Button className="rounded-full border border-black bg-white text-black">
            Sign up
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
