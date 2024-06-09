import Image from "next/image";
import ImageGrid from "./imageGrid";
export default function ServicePage() {
  return (
    <main className="flex-1 flex flex-col items-center mb-6">
      <Image
        src="/image1.png"
        width={2000}
        height={2000}
        alt="image"
        className="max-h-[25rem] object-cover"
      />
      <h1 className="text-[#413636] text-xl tracking-wide mt-[3em] px-5 font-medium">
        Lorem, ipsum dolor sit amet consectetur
      </h1>
      <div className="text-center px-5 text-[1.12rem] space-y-5 tracking-wide my-[1em] max-w-[80rem]">
        <p>
          If you're looking for a premium bathroom remodel, USA Home Remodeling
          would love to hear from you. We give our clients the beauty and
          functionality they're looking for in a tranquil and refined bathroom
          space. This includes updates to plumbing, reconceiving spatial
          geometry, and installing that new tub or shower you've been waiting to
          enjoy! We also design your renovation with an eye for sustainability
          that allows you to reduce your carbon footprint
        </p>
        <p>
          Most remodeling is meant to reflect the unique setting of the
          resident's home and the overall design aesthetic of the larger
          interior. Because of this, we examine lighting, faucets, shower,
          heads, finishes, flooring, countertops, cabinetry, and every
          consideration for making this room the beautiful retreat you want it
          to be.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 px-5 max-w-[80rem] gap-2 py-5">
        <ImageGrid />
      </div>
    </main>
  );
}
