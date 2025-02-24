import Foto from "../assets/Profile.png";
import { Button } from "./Button";
import { IconList } from "./IconList";

const Hero = () => {
  return (
    <div className="relative bg-[#F0EBD8] min-h-screen">
      <div className="flex items-center justify-center p-8">
        <div className="text-start" data-aos="fade-up">
          <div className="my-3">
            <h3 className="text-2xl font-semibold font-poppins text-[#3E5C76]">
              Hai There,
            </h3>
            <h1 className="text-5xl font-poppins font-bold text-[#0D1321]">
              Daffa Rihadatul Fairus
            </h1>
            <p className=" text-3xl text-[#0D1321] font-satoshi w-lg">
              Web Developer, Frontend Ethusiast
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
        <img
          src={Foto}
          alt="Profile"
          className="max-w-xl "
          data-aos="fade-up"
        />
      </div>

      {/* Tambahkan SVG sebagai Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full"
      >
        <path
          fill="#0D1321"
          fillOpacity="1"
          d="M0,128L48,133.3C96,139,192,149,288,176C384,203,480,245,576,240C672,235,768,181,864,176C960,171,1056,213,1152,240C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
