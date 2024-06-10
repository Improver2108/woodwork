type TServiceName = "kitchen" | "bathroom";
type TSserviceData = {
  heading: string;
  description: string[];
  images: string[];
};

const dummy: Record<TServiceName, TSserviceData> = {
  kitchen: {
    heading: "Lorem, ipsum dolor sit amet consectetur",
    description: [
      "If youre looking for a premium bathroom remodel, USA Home Remodeling would love to hear from you. We give our clients the beauty and functionality theyre looking for in a tranquil and refined bathroom space. This includes updates to plumbing, reconceiving spatial geometry, and installing that new tub or shower youve been waiting to enjoy! We also design your renovation with an eye for sustainability that allows you to reduce your carbon footprint",
      "If youre looking for a premium bathroom remodel, USA Home Remodeling would love to hear from you. We give our clients the beauty and functionality theyre looking for in a tranquil and refined bathroom space. This includes updates to plumbing, reconceiving spatial geometry, and installing that new tub or shower youve been waiting to enjoy! We also design your renovation with an eye for sustainability that allows you to reduce your carbon footprint",
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
  bathroom: {
    heading: "Lorem, ipsum dolor sit amet consectetur",
    description: [
      "If youre looking for a premium bathroom remodel, USA Home Remodeling would love to hear from you. We give our clients the beauty and functionality theyre looking for in a tranquil and refined bathroom space. This includes updates to plumbing, reconceiving spatial geometry, and installing that new tub or shower youve been waiting to enjoy! We also design your renovation with an eye for sustainability that allows you to reduce your carbon footprint",
      "If youre looking for a premium bathroom remodel, USA Home Remodeling would love to hear from you. We give our clients the beauty and functionality theyre looking for in a tranquil and refined bathroom space. This includes updates to plumbing, reconceiving spatial geometry, and installing that new tub or shower youve been waiting to enjoy! We also design your renovation with an eye for sustainability that allows you to reduce your carbon footprint",
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

export default function services(name: string): TSserviceData {
  return dummy[name as TServiceName];
}
