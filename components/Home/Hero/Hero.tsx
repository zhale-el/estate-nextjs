import SearchBox from "@/components/Helper/SearchBox";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url('/images/hero.jpg')] bg-cover bg-center">
      {/* Black overly */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* content */}
      <div className="flex items-center justify-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10">
        <h1 className="text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium">
          The Best Way To
        </h1>
        <h1 className="text-center font-semibold text-3xl sm:text-5xl text-white mt-4">
          {" "}
          Find Your Dream Home
        </h1>
        <p className="mt-4 text-center text-sm sm:text-base text-gray-200">
          We've more than 745,000 apartments, place & plot.
        </p>
        <div className="mt-12 w-full">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
