import AppartmentType from "./AppartmenyType.tsx/AppartmentType";
import Hero from "./Hero/Hero";
import Properties from "./Properties/Properties";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AppartmentType />
      <Properties />
    </div>
  );
};

export default Home;
