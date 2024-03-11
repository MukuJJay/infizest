import { HeroParallax } from "@/components/ui/hero-parallax";
import demoPic from "../../public/demo_tree.jpg";

const products: { title: string; link: string; thumbnail: any }[] = [
  {
    title: "Infizest",
    link: "youtube.com",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "youtube.com",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "youtube.com",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "youtube.com",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "youtube.com",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "youtube.com",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "youtube.com",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "youtube.com",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "youtube.com",
    thumbnail: demoPic,
  },
];

const Home = () => {
  return <HeroParallax products={products} />;
};

export default Home;
