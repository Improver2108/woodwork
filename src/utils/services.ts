type TServiceName = "kitchen" | "bathroom";
type TSserviceData = {
  heading: string;
  description: string[];
  images: string[];
};

const dummy: Record<TServiceName, TSserviceData> = {
  kitchen: {
    heading: "Revitalize Your Kitchen with Timeless Elegance",
    description: [
      "At Company, we specialize in transforming kitchens into spaces where comfort and functionality meet elegance. We understand that the kitchen is more than just a place to cook; it’s the heart of the home, where families gather and memories are made. Our expert team is dedicated to crafting environments that not only inspire culinary creativity but also foster a sense of well-being.",
      "From sleek modern designs to cozy traditional kitchens, we work closely with each client to create personalized spaces that reflect their unique style and needs. With attention to detail and quality craftsmanship, we strive to build kitchens that not only look stunning but also feel inviting—a place where you can unwind, entertain guests, and enjoy the simple pleasures of everyday life. Let us bring your vision to life and transform your kitchen into a place where you'll always feel at home.",
    ],
    images: [...Array<null>(6)].map(
      (_, index) => `/kitchen/kitchen (${index + 1}).jpeg`
    ),
  },
  bathroom: {
    heading:
      "Renew Your Bathroom Oasis: Tailored Designs for Refreshing Comfort",
    description: [
      "At [Your Business Name], we specialize in creating bathrooms that rejuvenate and restore. We believe your bathroom should be a sanctuary, a place where you can unwind and recharge after a long day. Our team is dedicated to designing spaces that seamlessly blend comfort with functionality, ensuring every aspect of your new bathroom contributes to a sense of tranquility and refreshment.",
      "Whether you envision a spa-like retreat with luxurious features or a modern, efficient space that maximizes comfort, we work closely with you to bring your vision to life. From selecting the perfect fixtures and materials to optimizing layout and storage, we prioritize craftsmanship and attention to detail in every project. Let us transform your bathroom into a haven where you can start and end each day feeling refreshed and rejuvenated. Discover the joy of a beautifully designed bathroom tailored to your needs and designed for your well-being at [Your Business Name]",
    ],
    images: [
      "/chair.png",
      "/kitchen1.png",
      "/chair.png",
      "/kitchen1.png",
      "/chair.png",
      "/kitchen1.png",
      "/chair.png",
      "/kitchen1.png",
      "/chair.png",
      "/kitchen1.png",
      "/chair.png",
      "/kitchen1.png",
      "/chair.png",
      "/kitchen1.png",
    ],
  },
};

export const extraDummies = [
  {
    heading: "Flooring",
    description:
      "At [Your Business Name], we believe the right flooring can transform any space into a masterpiece. Our commitment to quality ensures every step you take is on a surface designed for beauty, durability, and comfort. Whether you seek the timeless elegance of hardwood, the modern appeal of tile, or the cozy warmth of carpet, our expert team will help you find the perfect flooring solution for your home. From consultation to installation, we work closely with you to bring your vision to life, enhancing the aesthetics and functionality of your space with premium materials and innovative designs. Trust [Your Business Name] to elevate your home with flooring that reflects your style and stands the test of time.",
    image: "flooring.jpeg",
  },
  {
    heading: "Furniture",
    description:
      "At [Your Business Name], we specialize in curating and crafting furniture that transforms your home into a stylish and comfortable sanctuary. Our expert team blends innovative design with high-quality materials to create pieces that are both functional and aesthetically pleasing. Whether you're looking for modern, minimalist styles or timeless, classic designs, we offer a wide range of options to suit every taste and space. From custom-built pieces to carefully selected collections, we ensure that each item enhances your home's beauty and comfort. Trust [Your Business Name] to furnish your space with elegance and functionality, creating an inviting atmosphere you'll love coming home to.",
    image: "furniture.jpeg",
  },
  {
    heading: "Rooms",
    description:
      "At [Your Business Name], we transform ordinary rooms into personalized havens of comfort and style. Our team of design experts works closely with you to understand your unique needs and preferences, creating spaces that reflect your personality and enhance your lifestyle. From cozy bedrooms and vibrant living areas to functional home offices and serene guest rooms, we ensure every detail is meticulously planned and executed. With a focus on high-quality materials, innovative design, and impeccable craftsmanship, we create rooms that are not only beautiful but also practical and inviting. Let [Your Business Name] help you reimagine your home, one room at a time, for a space you’ll love to live in.",
    image: "room.jpeg",
  },
];

export function services(name: string): TSserviceData {
  return dummy[name as TServiceName];
}
