import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section className="bg-[#dcd9d5] py-[4em] px-2 md:px-[5rem] lg:px-[8rem] flex flex-col items-center justify-center gap-10 text-[#413636] text-lg tracking-wide">
      <h2 className="text-2xl font-medium tracking-widest uppercase">
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-4 gap-7">
        <div className="space-y-[2.25rem]">
          <p>
            We will be happy to hold a meeting at your site or in our office,
            advise on all issues and select the optimal solution.
          </p>
          <p className="flex flex-col gap-1">
            <Link href={"tel:1111111111"}>1111111111</Link>
            <Link href={"tel:1111111111"}>1111111111</Link>
          </p>
          <p className="text-3xl space-x-2">
            <button className="">
              <FaWhatsapp />
            </button>
            <button>
              <FaTelegramPlane />
            </button>
          </p>
          <p className="flex flex-col">
            Write as a mail at:
            <span>
              <Link href={"/"}>loremIpsum@gmail.com</Link>
            </span>
          </p>
          <p>
            Office Address:
            <span className="block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              debitis iusto quos
            </span>
          </p>
        </div>
        <div>
          <iframe
            className="w-full rounded-xl border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400466074!2d77.04417434001834!3d28.527252739872903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1718526358516!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
