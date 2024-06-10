"use client";
import { FaArrowUp } from "react-icons/fa";

const changeSelected = () => {
  const ele = document.getElementById(`header`);
  ele?.scrollIntoView({ behavior: "smooth" });
};

export default function GoAbove() {
  return (
    <section className="relative bottom-3">
      <button
        onClick={changeSelected}
        className="text-white text-3xl font-extrabold animate-bounce"
      >
        <FaArrowUp />
      </button>
    </section>
  );
}
