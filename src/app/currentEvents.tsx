import Image from "next/image";

function CurrentEvents() {
  return (
    <section className="space-y-3 py-3 mt-3 px-2 md:px-[5rem] lg:px-[10rem]">
      <div className="flex gap-3 items-center">
        <h1 className="uppercase tracking-wider text-[#cececd] font-bold text-xl cursor-pointer">
          Current Events
        </h1>
        <p className="lowercase text-[#413636] underline cursor-pointer">
          Learn More
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
        {[...Array<null>(3)].map((_, index) => (
          <article
            className="cursor-pointer transition-opacity duration-[250ms] hover:opacity-50"
            key={index}
          >
            <Image
              key={index}
              src={"/event.png"}
              width={600}
              height={600}
              alt="Event image"
              className="rounded-lg bg-none hover:bg-blue-700"
            />
            <h1 className="text-xl tracking-wide mt-3 text-[#413636] font-bold font-sans">
              Vacancies: We need reinforcements!
            </h1>
            <p className="line-clamp-2 mt-3 text-[#413636] font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              libero. Rem sed sequi quibusdam nobis maiores quis provident?
              Quia, suscipit. Et unde dolores excepturi rem sequi itaque in ut
              mollitia! Molestiae dolor ullam et aliquid eos deleniti commodi
              temporibus pariatur. Similique, laudantium quidem. Voluptatibus
              illo tempore unde sapiente optio at?
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CurrentEvents;
