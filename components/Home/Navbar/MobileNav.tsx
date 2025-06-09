import Link from "next/link";

import { navLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`w-full h-screen fixed z-[1000] bg-black opacity-70 inset-0 transform ${navOpen} transition-all duration-500`}
      ></div>

      {/*Navlinks */}
      <div
        className={`text-white h-full w-[80%] sm:w-[60%] bg-[#c1205e] fixed flex justify-center flex-col ${navOpen} transform transition-all duration-500 delay-300 space-y-6 z-[10000]`}
      >
        {navLinks.map((navlink) => {
          return (
            <Link key={navlink.id} href={navlink.url}>
              <p className="text-[20px] sm:text-[30px] ml-12 border-b-[1.5px] pb-1 w-fit border-white font-medium hover:text-yellow-300">
                {" "}
                {navlink.label}
              </p>
            </Link>
          );
        })}
        {/*Close button */}
        <CgClose
          onClick={closeNav}
          className="w-6 h-6 sm:w-8 sm:h-8 text-white absolute top-[.7rem] right-[1.4rem]"
        />
      </div>
    </div>
  );
};

export default MobileNav;
