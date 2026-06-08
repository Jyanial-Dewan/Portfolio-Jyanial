import { navLinks } from "@/Constant/Constant";
import { X } from "lucide-react";
import Link from "next/link";

interface Props {
  showNav: boolean;
  handleCloseMobileNav: () => void;
}

const MobileNav = ({ showNav, handleCloseMobileNav }: Props) => {
  return (
    <>
      {showNav && (
        <div>
          {/* Overlay */}
          <div className="fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen"></div>
          {/* Navlinks */}
          <div className="text white fixed flex justify-center flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-purple-600 space-y-6 z-1050">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-purple-400 sm:text-[30px]">
                  {link.name}
                </p>
              </Link>
            ))}
            {/* Close button */}
            <X
              onClick={handleCloseMobileNav}
              className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
