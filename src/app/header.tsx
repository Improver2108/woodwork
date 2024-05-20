"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type THeaderProp = {
  image: React.ReactNode;
  navLinks: React.ReactNode;
};

const Header = ({ image, navLinks }: THeaderProp) => {
  const [isNavOpen, seIstNavOpen] = useState(true);
  return (
    <header className="">
      <section className="flex p-3 justify-between">
        {image}
        <button
          onClick={() => seIstNavOpen(!isNavOpen)}
          className="cursor-pointer text-2xl"
        >
          <GiHamburgerMenu />
        </button>
      </section>
      <nav
        className={`overflow-hidden bg-[#dcd9d5] text-[#413636] transition-[height] duration-[500] ease-in-out px-2 ${
          isNavOpen ? "h-[9.7rem]" : "h-0"
        } `}
      >
        {navLinks}
      </nav>
    </header>
  );
};

export default Header;
