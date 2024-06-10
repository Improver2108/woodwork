import GoAbove from "./GoAbove";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-[#dcd9d5] min-h-[15rem] gap-5 flex-1">
      <GoAbove />
      <section className="text-sm text-[#413636]">
        <p>Lorem, ipsum.| Lorem, ipsum.| Lorem, ipsum dolor.</p>
      </section>
      <section className="text-sm text-[#413636]">
        <p>Contact</p>
      </section>
    </footer>
  );
}
