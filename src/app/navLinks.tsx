import Link from "next/link";

const NavLinks = () => {
  const navLinks = ["kitchen", "space & furniture", "solid wood", "about us"];
  return (
    <ul className="flex flex-col gap-2 px-1 py-2">
      {navLinks.map((link, index) => (
        <li className="uppercase text-xl" key={index}>
          <Link href={"/"}>{link}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
