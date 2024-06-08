import Link from "next/link";

const NavLinks = () => {
  const navLinks = [
    ["home", ""],
    ["about us", "home"],
    ["kitchens", ""],
    ["bathrooms", ""],
    ["other services", ""],
    ["contact us", ""],
  ];
  return (
    <ul className="flex flex-col gap-2 px-1 py-2">
      {navLinks.map(([name, link], index) => (
        <li className="uppercase text-xl" key={index}>
          <Link href={`/${link}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
