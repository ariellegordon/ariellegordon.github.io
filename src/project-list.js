import presentSense from "./presentSense_iphone8gold_portrait.png";
import MAKSPrints from "./MAKS-Prints.png";
import ILD from "./ILD_iphone.png";

const projects = [
  {
    name: "MAKS Prints",
    image: MAKSPrints,
    description:
      "E-commerce app with Stripe integration for point-of-sale implementation",
    link: "https://maks-prints.herokuapp.com"
  },
  {
    name: "ILD",
    image: ILD,
    description:
      "Book annotation tool inspired by Chris Kraus's novel I love Dick, built with React Native, which translates human handwriting into written annotations through an image content analysis API",
    link: "https://www.youtube.com/watch?v=2xSiDVdmx1g"
  },
  {
    name: "presentSense",
    image: presentSense,
    description:
      "Mobile app that uses an in-app mood diary and realtime Apple Healthkit data to display visualizations mapping physical health to mental health",
    link: "https://github.com/1804-capstone/presentSense"
  }
];

export default projects;
