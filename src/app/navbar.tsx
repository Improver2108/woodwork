import Image from "next/image";

import Header from "./header";
import NavLinks from "./navLinks";
const Logo = () => (
  <Image src={"/next.svg"} width={100} height={100} alt="Logo" />
);
const Navbar = () => <Header image={<Logo />} navLinks={<NavLinks />} />;

export default Navbar;
