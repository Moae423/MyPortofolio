const Header = () => {
  return (
    <div className="navbar border-none   bg-EggShell py-3 font-poppins text-PrussianBlue shadow-sm px-4 md:px-8">
      <div className="navbar-start">
        {/* hamburger menu */}
        <div className="dropdown md:hidden lg:hidden ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-EggShell text-xl font-medium bg-PrussianBlue rounded-box z-[1] mt-6 w-52 p-2 shadow"
          >
            <li>
              <a href="#home">Homepage</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
          </ul>
        </div>
        {/* hamburger menu */}
        <a href="#home" className="btn btn-ghost border-none text-lg">
          Tarnished
        </a>
      </div>
      <div className="navbar-center hidden md:flex font-medium space-x-3">
        <a href="#projects" className="btn btn-ghost border-none text-lg">
          Projects
        </a>
        <a href="#works" className="btn btn-ghost border-none text-lg">
          Works
        </a>
        <a href="#techstack" className="btn btn-ghost border-none text-lg">
          Skills
        </a>
      </div>
      <div className="navbar-end hidden md:flex">
        <a className="btn btn-ghost border-none text-lg">Contact Me </a>
      </div>
    </div>
  );
};

export default Header;
