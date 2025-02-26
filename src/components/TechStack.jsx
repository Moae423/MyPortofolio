import { data } from "../data/DataTechStack.js";

const TechStack = () => {
  return (
    <div className="bg-PrussianBlue">
      <div className="py-12 px-8 flex justify-center items-center flex-col  ">
        {/* Title */}
        <h1 className="py-3 text-3xl md:text-4xl  font-poppins font-bold text-center">
          Tech Stack I Use It
        </h1>
        {/* Title */}
        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3">
          {data.map((items) => (
            <div
              data-aos="fade-up"
              key={items.id}
              className="mx-auto max-w-sm rounded-xl py-3 bg-EggShell shadow-md sm:max-w-md md:max-w-lg lg:max-w-xl"
            >
              <img
                src={items.image}
                className="p-3 mx-auto w-20 sm:w-24 md:w-28 lg:w-32"
                alt=""
              />
              <div className="px-3 text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-semibold font-poppins text-PrussianBlue">
                  {items.title}
                </h1>
                <p className="text-sm md:text-base font-normal font-satoshi text-RichBlack">
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* card */}
        <div className="text-center  py-4" data-aos="fade-up">
          <a
            href="#projects"
            className="btn btn-outline border-2 font-medium text-EggShell hover:scale-105 hover:bg-PayneGray hover:border-none transition-all duration-200"
          >
            What Project I Builded it
          </a>
        </div>
      </div>
    </div>
  );
};
export default TechStack;
