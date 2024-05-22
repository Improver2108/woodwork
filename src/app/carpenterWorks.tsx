import Image from "next/image";

export default function CarpenterWorks() {
  return (
    <section className="flex flex-col items-center bg-[#dcd9d5] gap-2 py-[4em] px-2 md:px-[5rem] lg:px-[8rem]">
      <h2 className="text-2xl font-medium tracking-widest uppercase">
        carpentry work
      </h2>
      <h3 className="text-xl italic font-serif text-white tracking-wide">
        Design & function combined
      </h3>
      <div className="grid gap-5 w-full grid-cols-1 md:grid-cols-5 mt-8">
        <article className="md:col-span-2 grid">
          <Image
            src={"/chair.png"}
            width={800}
            height={800}
            alt="chair"
            className="object-cover w-full h-full z-[5] transition-opacity hover:opacity-20 duration-[250ms]"
            style={{ gridArea: "1/1/2/2" }}
          />
          <div
            className="z-[3] text-2xl font-bold bg-[#413636] flex justify-center items-center text-white tracking-wider uppercase"
            style={{ gridArea: "1/1/2/2" }}
          >
            Chair
          </div>
        </article>
        <article className="md:col-span-3">
          <Image
            src={"/table.png"}
            width={800}
            height={800}
            alt="chair"
            className="object-cover w-full h-full"
          />
        </article>
        <article className="md:col-span-3">
          <Image
            src={"/table.png"}
            width={800}
            height={800}
            alt="chair"
            className="object-cover w-full h-full"
          />
        </article>
        <article className="md:col-span-2">
          <Image
            src={"/chair.png"}
            width={800}
            height={800}
            alt="chair"
            className="object-cover w-full h-full"
          />
        </article>
        <article className="md:col-span-5">
          <Image
            src={"/floor.png"}
            width={800}
            height={800}
            alt="chair"
            className="object-cover w-full h-full"
          />
        </article>
      </div>
    </section>
  );
}
