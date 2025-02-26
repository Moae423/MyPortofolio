import { Works } from "../data/dataWorksExperience";

const WorksPage = () => {
  return (
    <div className=" bg-PrussianBlue" id="works">
      <h1 className="text-3xl md:text-4xl text-center font-poppins font-bold text-EggShell py-3">
        Works Experience
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {Works.map((items) => (
            <div
              key={items.id}
              className="bg-EggShell rounded-lg shadow-xl overflow-hidden mx-8 md:mx-auto"
              data-aos="fade-up"
            >
              <img
                src={items.image}
                className="w-full bg-cover h-48 object-cover"
                alt={items.workTitle}
              />
              <div className="p-4">
                <h1 className="text-PrussianBlue text-xl md:text-2xl font-poppins font-semibold text-center py-2">
                  {items.workTitle}
                </h1>
                <p className="text-RichBlack font-satoshi text-sm md:text-base py-2">
                  {items.detailWork}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h5 className="text-lg md:text-xl text-center font-satoshi font-semibold text-SilverLakeBlue py-4">
        Coming Soon....
      </h5>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f0ebd8"
          fillOpacity="1"
          d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,106.7C672,107,768,117,864,149.3C960,181,1056,235,1152,224C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default WorksPage;
