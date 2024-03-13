"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import demoPic from "../../public/demo_tree.jpg";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useUiObserver } from "@/hooks/useUiObserver";
import { ProjectCount } from "@/components/ui/pages/project-count";

const products: { title: string; link: string; thumbnail: any }[] = [
  {
    title: "Infizest",
    link: "/",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "/",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "/",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "/",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "/",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "/",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "youtube.com",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "/",
    thumbnail: demoPic,
  },
  {
    title: "Infizest",
    link: "/",
    thumbnail: demoPic,
  },
];

const Home = () => {
  const navbarViewRef = useRef(null);
  const isInView = useInView(navbarViewRef);
  const { changeNavAction } = useUiObserver();

  useEffect(() => {
    if (isInView) {
      changeNavAction(true);
    } else {
      changeNavAction(false);
    }
  }, [isInView]);

  return (
    <main>
      <HeroParallax products={products} />
      <section ref={navbarViewRef}>
        <ProjectCount />
      </section>
    </main>
  );
};

export default Home;
