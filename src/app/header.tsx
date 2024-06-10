"use client";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type THeaderProp = {
  logo: React.ReactNode;
  navLinks: React.ReactNode;
  contact: React.ReactNode;
};

const Header = ({ logo, navLinks, contact }: THeaderProp) => {
  const [isNavOpen, seIstNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      if (isNavOpen) {
        const navHeight = navRef.current?.scrollHeight + "px";
        navRef.current.style.height = navHeight;
      } else navRef.current.style.height = "0";
    }
  }, [isNavOpen]);

  return (
    <header className="mb-4 px-6 py-5">
      <section className="flex justify-between items-center" id="header">
        {logo}
        <button
          onClick={() => seIstNavOpen(!isNavOpen)}
          className="cursor-pointer text-2xl"
        >
          <GiHamburgerMenu />
        </button>
      </section>
      <nav
        ref={navRef}
        className="overflow-hidden bg-white text-[#413636] transition-[height] duration-[500] ease-in-out px-2"
      >
        {navLinks}
      </nav>
      <section className="flex justify-end gap-5">{contact}</section>
    </header>
  );
};

export default Header;
