import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import NavLinks from "./navLinks";
import { MdLocalPhone } from "react-icons/md";

const Logo = () => (
  <Link href={"/"} className="flex items-center gap-4">
    <Image
      src={"/logo.png"}
      width={100}
      height={100}
      alt="Logo"
      className="rounded-full w-[4rem]"
    />
    <h2 className="uppercase text-3xl font-bold tracking-wider">company</h2>
  </Link>
);
const Contact = () => (
  <Link
    href={"tel:1111111111"}
    className="flex items-center gap-1 text-[#413636]"
  >
    <MdLocalPhone className="text-lg" />
    1111111111
  </Link>
);
const Navbar = () => (
  <Header logo={<Logo />} navLinks={<NavLinks />} contact={<Contact />} />
);

export default Navbar;
