import Codes from "../assets/Foto Daffa Rihadatul Fairus.jpg";
import { Button } from "./Button";
import { IconList } from "./IconList";

const Hero = () => {
  return (
    <div className=" bg-[#F0EBD8] min-h-screen flex justify-center items-center ">
      <div
        className="flex items-center justify-center py-8 gap-5"
        data-aos="fade-down"
      >
        <div className="text-start">
          <div className="my-3 w-md">
            <h3 className="text-2xl font-semibold font-poppins text-[#3E5C76]">
              Hai There,
            </h3>
            <h1 className="text-5xl font-poppins font-bold text-[#0D1321]">
              My Name Daffa Rihadatul Fairus
            </h1>
            <p className=" text-3xl text-[#0D1321] font-satoshi w-lg">
              And Welcome To My Page
            </p>
          </div>
          {/* button */}
          <div className="flex gap-4">
            <Button
              type="button"
              className="btn bg-PrussianBlue  cursor-pointer hover:scale-105 transition-all duration-200"
            >
              Hire Me
            </Button>
            <Button
              type="button"
              className="btn btn-outline border-2  hover:bg-SilverLakeBlue border-SilverLakeBlue text-RichBlack hover:text-EggShell  cursor-pointer hover:scale-105 transition-all duration-200"
            >
              Download My Cv
            </Button>
          </div>
          <IconList className="hover:scale-110 transition-all duration-200" />
          {/* icon */}
        </div>
        <div className="relative">
          <img
            src={Codes}
            alt="Daffa Rihadatul Fairus"
            className="max-w-sm rounded-full cursor-pointer hover:scale-105 transition duration-200 shadow-2xl block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
