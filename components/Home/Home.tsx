"use client";

import AppartmentType from "./AppartmenyType.tsx/AppartmentType";
import BuildingFeature from "./BuildingFeature/BuildingFeature";
import CityProperties from "./CityProperties/CityProperties";
import Hero from "./Hero/Hero";
import Properties from "./Properties/Properties";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AppartmentType />
      <Properties />
      <CityProperties />
      <BuildingFeature />
      <Reviews />
    </div>
  );
};

export default Home;
