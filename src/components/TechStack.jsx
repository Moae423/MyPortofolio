import { data } from "../data/DataTechStack.js";

const TechStack = () => {
  return (
    <div className="py-12 flex justify-center items-center  flex-col">
      {/* List Tech Stack */}
      {/* Title */}
      <h1 className="py-3 text-4xl font-poppins font-semibold text-center">
        Tech Stack I Use It
      </h1>
      {/* Title */}
      {/* card */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3"
        data-aos="fade-up"
      >
        {data.map((items) => (
          <div
            key={items.id}
            className="mx-auto max-w-lg rounded-xl py-3 bg-base-300 hover:scale-105 transform transition-transform duration-300 ease-in-out cursor-pointer"
            //
          >
            <img
              src="https://placehold.co/50x50"
              className="rounded-full p-3"
              alt=""
            />
            <div className="px-3">
              <h1 className="text-2xl font-medium font-poppins">
                {items.title}
              </h1>
              <p className="text-sm w-sm font-light font-satoshi">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechStack;
