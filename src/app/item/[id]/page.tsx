import Image from "next/image";
import ImageGrid from "./imageGrid";
import { services } from "@/utils/services";
export default function ServicePage({ params }: { params: { id: string } }) {
  if (params.id !== "kitchen" && params.id !== "bathroom")
    return <main>{`page doesn't exist`}</main>;

  const data = services(params.id);
  return (
    <main className="flex-1 flex flex-col items-center mb-6">
      <Image
        src="/image1.png"
        width={2000}
        height={2000}
        alt="image"
        className="max-h-[25rem] object-cover"
      />
      <h1 className="text-[#413636] text-3xl tracking-wide mt-[3em] px-5 font-medium text-center">
        {data.heading}
      </h1>
      <div className="text-center px-5 text-[1.12rem] space-y-5 tracking-wide my-[1em] max-w-[80rem]">
        {data.description.map((ele, index) => (
          <p key={index}>{ele}</p>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 px-5 max-w-[80rem] gap-2 py-5">
        <ImageGrid images={data.images} />
      </div>
    </main>
  );
}
