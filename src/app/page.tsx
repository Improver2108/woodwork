import CurrentEvents from "./currentEvents";
import ImageSlideShow from "./imageSlideshow";
import Navbar from "./navbar";
import Reviews from "./motto";
import Kitchen from "./kitchens";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-2 flex flex-col gap-5 py-4">
        <ImageSlideShow />
        <CurrentEvents />
        <Reviews />
        <Kitchen />
      </main>
    </>
  );
}
