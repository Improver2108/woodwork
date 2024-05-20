import ImageSlideShow from "./imageSlideshow";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-2 space-y-3">
        <ImageSlideShow />
      </main>
    </>
  );
}
