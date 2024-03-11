import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "At Comfy Sloth, we strive to provide unparalleled comfort and style through thoughtfully designed furniture, ensuring every customer finds joy in their unique living space.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to create a world where individuals can effortlessly enhance their homes with high-quality, customizable furniture, making comfort and personal expression accessible to all.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Founded with a passion for craftsmanship, innovation, and customer delight, Comfy Sloth has evolved into a reputable source for exceptional furniture. Our journey is marked by a commitment to quality, transforming houses into havens since our inception.",
  },
];

// Change to airtable url
// export const products_url = "https://course-api.com/react-store-products";
// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const products_url = "/.netlify/functions/products";
export const single_product_url = "/.netlify/functions/single-product";
