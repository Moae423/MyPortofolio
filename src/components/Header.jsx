const Header = () => {
  return (
    <div
      className="navbar text-EggShell  bg-PrussianBlue shadow-sm"
      data-aos="fade"
    >
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Tarnished</a>
      </div>
      <div className="navbar-center  space-x-3">
        <a className="link-hover text-xl">Projects</a>
        <a href="#" className="link-hover text-xl">
          Works
        </a>
        <a href="#" className="link-hover text-xl">
          Skills
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost text-xl">Contact Me </a>
      </div>
    </div>
  );
};

export default Header;
