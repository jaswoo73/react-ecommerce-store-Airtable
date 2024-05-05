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
    text: "At Toyboy, we're on a mission to bring the thrilling universe of Warhammer 40,000 to life through our thoughtfully curated selection of merchandise. We're dedicated to providing enthusiasts with top-quality products that blend comfort and style, ensuring that every customer finds joy in their gaming experience.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision at Toyboy is to become the go-to destination for Warhammer 40,000 fans, offering an unparalleled customer service and a vibrant community hub. We aspire to be recognized for our commitment to quality, customer satisfaction, and our passion for all things Warhammer 40k.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Founded with a passion for Warhammer 40,000, Toyboy has evolved into a reputable source for exceptional Warhammer 40,000 products. Our journey is marked by a commitment to customer service and quality assurance, transforming your collection into powerful army since our inception.",
  },
];

// Change to airtable url
// export const products_url = "https://course-api.com/react-store-products";
// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const products_url = "/.netlify/functions/products";
export const single_product_url = "/.netlify/functions/single-product";
