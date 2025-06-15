import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
        <div>
          <div className="flex items-center space-x-2">
            <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col ">
              <FaHouse />
            </div>
            <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
              HomeHub
            </h1>
          </div>
          <p className="text-gray-300 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
            eveniet., consectetur adipisicing elit. Iure
          </p>
          <p className="text-gray-300 mt-4 font-semibold">example@gmail.com</p>
          <p className="text-gray-300 mt-2 font-semibold">+123 456 789</p>
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebookF className="w-6 h-6 text-blue-600" />
            <FaTwitter className="w-6 h-6 text-sky-500" />
            <FaYoutube className="w-6 h-6 text-red-700" />
            <FaInstagram className="w-6 h-6 text-pink-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
