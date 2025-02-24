const Header = () => {
  return (
    <div className="navbar  bg-EggShell py-3 font-poppins text-PrussianBlue shadow-sm">
      <div className="navbar-start">
        <a href="#" className="btn btn-ghost border-none text-lg">
          Tarnished
        </a>
      </div>
      <div className="navbar-center font-medium  space-x-3">
        <a href="" className="btn btn-ghost border-none text-lg">
          Projects
        </a>
        <a href="#" className="btn btn-ghost border-none text-lg">
          Works
        </a>
        <a href="#" className="btn btn-ghost border-none text-lg">
          Skills
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost border-none text-lg">Contact Me </a>
      </div>
    </div>
  );
};

export default Header;
