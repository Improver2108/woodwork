import { extraDummies } from "@/utils/services";
import Image from "next/image";

export default function OtherService() {
  const services = extraDummies;
  return (
    <main className="flex flex-col items-center">
      <Image
        src="/image1.png"
        width={2000}
        height={2000}
        alt="image"
        className="max-h-[25rem] object-cover"
      />
      <section className="my-14">
        <h1 className="text-center max-w-[50rem] px-5 text-lg tracking-wider">
          {`[Your Company Name] is a fast-growing force in the remodeling world. We strive to achieve results homeowners couldn't even dream of, giving you home renovations and remodels that exceed all expectations.`}
        </h1>
      </section>
      <section className="py-10 bg-[#f2f2f2] w-full flex flex-col items-center">
        {services.map(({ heading, description, image }, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 max-w-[80rem] gap-10 my-6 px-5 h-20rem"
          >
            <div
              className={`${index % 2 !== 0 ? "lg:order-last" : ""} space-y-5`}
            >
              <h1 className="text-[#413636] text-xl tracking-widest font-medium capitalize ">
                {heading}
              </h1>
              <p className="tracking-wider font-light">{description}</p>
            </div>
            <Image
              src={`/other/${image}`}
              width={800}
              height={800}
              alt="image"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
