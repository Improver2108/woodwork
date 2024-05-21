import Image from "next/image";

const kitchens = [
  ["kitchen1", "#eeeeee", "#413636"],
  ["kitchen2", "#413636", "#c7c6c5"],
  ["kitchen3", "#dcd9d5", "#413636"],
];
function Kitchen() {
  return (
    <section className="px-2 flex flex-col items-center md:px-[5rem] lg:px-[10rem] gap-3 mt-8">
      <h1 className="uppercase self-start text-xl font-bold text-[#cececd] tracking-wider">
        Kitchens
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10">
        {kitchens.map(([image, color, fontColor], index) => (
          <article
            className="grid cursor-pointer hover:[&_img]:opacity-0"
            key={index}
          >
            <h1
              className="z-20 self-center justify-self-center font-serif italic text-3xl pointer-events-none"
              style={{ gridArea: "1/1/2/2", color: fontColor }}
            >
              Kitchen Type
            </h1>
            <Image
              src={`/${image}.png`}
              className="w-full z-10 transition-opacity duration-700"
              style={{ gridArea: "1/1/2/2" }}
              width={800}
              height={800}
              alt="kitchen types"
            />
            <div
              className={`z-[2] w-full`}
              style={{ gridArea: "1/1/2/2", backgroundColor: color }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Kitchen;
