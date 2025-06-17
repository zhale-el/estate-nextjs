"use client";

import { useEffect } from "react";
import AppartmentType from "./AppartmenyType.tsx/AppartmentType";
import Blog from "./Blog/Blog";
import BuildingFeature from "./BuildingFeature/BuildingFeature";
import CityProperties from "./CityProperties/CityProperties";
import Hero from "./Hero/Hero";
import Properties from "./Properties/Properties";
import Reviews from "./Reviews/Reviews";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <AppartmentType />
      <Properties />
      <CityProperties />
      <BuildingFeature />
      <Reviews />
      <Blog />
    </div>
  );
};

export default Home;
