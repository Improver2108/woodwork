"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type THeaderProp = {
  image: React.ReactNode;
  navLinks: React.ReactNode;
};

const Header = ({ image, navLinks }: THeaderProp) => {
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
    <header className="">
      <section className="flex p-6 justify-between" id="header">
        {image}
        <Link href={"/"} className="text-2xl font-bold">
          Home
        </Link>
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
    </header>
  );
};

export default Header;
