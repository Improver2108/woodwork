import CurrentEvents from "./currentEvents";
import ImageSlideShow from "./imageSlideshow";
import Navbar from "./navbar";
import Reviews from "./motto";
import Kitchen from "./kitchens";
import Parallax from "./parallax";
import CarpenterWorks from "./carpenterWorks";
import Footer from "./_components/Footer";
import ContactForm from "./contactForm";

export default function Home() {
  return (
    <main className="">
      <ImageSlideShow />
      <CurrentEvents />
      <Reviews />
      <Kitchen />
      <Parallax />
      <CarpenterWorks />
      <ContactForm />
    </main>
  );
}
