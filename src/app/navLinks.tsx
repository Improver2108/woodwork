import Link from "next/link";

const NavLinks = () => {
  const navLinks = [
    ["home", ""],
    ["kitchens", "item/kitchen"],
    ["bathrooms", "item/bathroom"],
    ["other services", "otherService"],
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
