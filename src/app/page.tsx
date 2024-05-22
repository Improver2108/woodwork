import CurrentEvents from "./currentEvents";
import ImageSlideShow from "./imageSlideshow";
import Navbar from "./navbar";
import Reviews from "./motto";
import Kitchen from "./kitchens";
import Parallax from "./parallax";
import CarpenterWorks from "./carpenterWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <ImageSlideShow />
        <CurrentEvents />
        <Reviews />
        <Kitchen />
        <Parallax />
        <CarpenterWorks />
      </main>
    </>
  );
}
