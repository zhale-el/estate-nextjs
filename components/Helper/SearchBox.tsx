import { FaSearch } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const SearchBox = () => {
  return (
    <div className="w-full md:w-[80%] mx-auto bg-white h-[4rem] sm:h-[5rem]  px-4 sm:px-8 flex flex-col justify-center rounded-lg">
      <div className="flex items-center justify-between h-full">
        <input
          type="text"
          placeholder="Enter an address, city or ZIP to but"
          className="sm:flex-[0.8] h-[60%] bg-gray-100 block rounded-lg outline-none px-4 placeholder:text-sm"
        />
        <div className="flex items-center flex-[0.2] ml-8 space-x-6">
          <div className="hidden lg:flex items-center cursor-pointer space-x-2">
            <HiAdjustmentsHorizontal className="text-gray-700 w-6 h-6" />
            <p className="text-gray-700 font-semibold">Advanced</p>
          </div>
          <div className="w-12 h-12 flex items-center justify-center bg-rose-600 hover:bg-rose-800 transition-all duration-150 rounded-full text-white cursor-pointer">
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
