import Codes from "../assets/Foto Daffa Rihadatul Fairus.jpg";
import { Button } from "./Button";
import { IconList } from "./IconList";

const Hero = () => {
  return (
    <div className="bg-[#F0EBD8] w-full overflow-x-hidden" id="home">
      <div className="flex justify-center items-center pt-3 ">
        <div
          className="flex flex-col md:flex-row items-center justify-center py-8 gap-5"
          data-aos="fade-down"
        >
          {/* Gambar */}
          <div className="relative mb-4 md:mb-0">
            <img
              src={Codes}
              width={300}
              alt="Daffa Rihadatul Fairus"
              className="max-w-sm rounded-full  hover:scale-105 transition duration-200 shadow-2xl md:block "
            />
          </div>

          {/* Teks dan Tombol */}
          <div className="text-start max-w-sm md:max-w-2xl px-3 md:px-0">
            <div className="my-3 w">
              <h3 className="text-2xl md:text-2xl font-semibold font-poppins text-[#3E5C76]">
                Hai There,
              </h3>
              <h1 className="text-2xl md:text-5xl font-poppins font-bold text-[#0D1321]">
                I&apos;m Daffa Rihadatul Fairus
              </h1>
              <p className="text-md md:text-xl max-w-sm md:max-w-lg text-[#0D1321] font-satoshi w-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt porro distinctio quod natus cum laudantium reiciendis
                debitis dignissimos quasi fuga.
              </p>
            </div>

            {/* Tombol */}
            <div className="flex gap-4">
              <Button
                type="button"
                className="btn bg-PrussianBlue cursor-pointer hover:scale-105 transition-all duration-200"
              >
                Hire Me
              </Button>
              <Button
                type="button"
                className="btn btn-outline border-2 hover:bg-SilverLakeBlue border-SilverLakeBlue text-RichBlack hover:text-EggShell cursor-pointer hover:scale-105 transition-all duration-200"
              >
                Download My Cv
              </Button>
            </div>

            <IconList className="hover:scale-110 transition-all duration-200" />
            {/* icon */}
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1d2d44"
          fillOpacity="1"
          d="M0,32L48,80C96,128,192,224,288,256C384,288,480,256,576,213.3C672,171,768,117,864,128C960,139,1056,213,1152,240C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
