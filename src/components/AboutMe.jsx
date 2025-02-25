import { project } from "../data/dataProjects";
export const AboutMe = () => {
  return (
    <div className="bg-EggShell min-h-screen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1d2d44"
          fillOpacity="1"
          d="M0,256L48,250.7C96,245,192,235,288,240C384,245,480,267,576,240C672,213,768,139,864,106.7C960,75,1056,85,1152,101.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="p-8 text-center">
        <h1 className="text-4xl text-PrussianBlue font-poppins font-bold ">
          My Project Builds It
        </h1>
      </div>
      {project.map((items) => (
        <div
          key={items.id}
          className={`flex flex-wrap gap-4 justify-center items-center py-6 ${
            items.position === "right" ? "md:flex-row" : "md:flex-row-reverse"
          }`}
          data-aos={items.position === "right" ? "fade-left" : "fade-right"}
        >
          <div className="max-w-md">
            <h2 className="text-RichBlack text-3xl font-poppins font-semibold ">
              {items.title}
            </h2>
            <p className="text-RichBlack font-satoshi py-3">
              {items.description}
            </p>
            <a
              href={items.detail}
              target="_blank"
              className="btn btn-outline border-2 border-PrussianBlue text-PrussianBlue hover:bg-SilverLakeBlue hover:text-EggShell hover:border-none hover:scale-105 transition-all duration-200"
            >
              See More
            </a>
          </div>
          <img
            src={items.image}
            width={600}
            className="rounded-2xl shadow-xl"
            alt=""
          />
        </div>
      ))}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1d2d44"
          fillOpacity="1"
          d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,106.7C672,107,768,117,864,149.3C960,181,1056,235,1152,224C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
