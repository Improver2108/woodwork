import Image from "next/image";

export default function OtherService() {
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
        <h1 className="text-center w-[50rem] text-lg tracking-wider">
          {`USA Home Remodeling is fully licensed, bonded and insured, and we are
          a fast-growing force in the remodeling world. We strive to achieve
          results homeowners couldn't even dream of, giving you home renovations
          and remodels that exceed all expectations.`}
        </h1>
      </section>
      <section className="py-10 bg-[#f2f2f2] w-full flex flex-col items-center">
        {[...Array<null>(4)].map((service, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 max-w-[80rem] gap-10 my-6 px-5"
          >
            <div
              className={`${index % 2 !== 0 ? "lg:order-last" : ""} space-y-5`}
            >
              <h1 className="text-[#413636] text-xl tracking-widest font-medium capitalize ">
                service
              </h1>
              <p className="tracking-wider font-light">
                {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                exercitationem similique praesentium suscipit vero culpa, at
                nisi voluptatibus est alias amet odit eveniet non officiis vel
                sed pariatur nihil asperiores dolor? Consequuntur delectus non
                quos, sunt temporibus ipsam amet nulla quae debitis voluptatem,
                possimus incidunt fuga! Iusto praesentium, impedit voluptas
                veniam enim reiciendis sunt nostrum error laudantium, quas ut
                et.`}
              </p>
            </div>
            <Image src={"/image.png"} width={800} height={800} alt="image" />
          </div>
        ))}
      </section>
    </main>
  );
}
