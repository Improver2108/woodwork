import ImageSlideShow from "./imageSlideshow";
import Reviews from "./motto";
import Kitchen from "./kitchens";
import Parallax from "./parallax";
import ContactForm from "./contactForm";

export default function Home() {
  return (
    <main className="flex-1">
      <ImageSlideShow />
      <Reviews />
      <Kitchen />
      <Parallax />
      <ContactForm />
    </main>
  );
}
