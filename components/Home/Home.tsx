"use client";

import AppartmentType from "./AppartmenyType.tsx/AppartmentType";
import CityProperties from "./CityProperties/CityProperties";
import Hero from "./Hero/Hero";
import Properties from "./Properties/Properties";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AppartmentType />
      <Properties />
      <CityProperties />
    </div>
  );
};

export default Home;
