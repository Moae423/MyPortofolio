import Instagram from "../assets/icon/instagram.svg";
import Github from "../assets/icon/github.svg";
import LinkedIn from "../assets/social-linkedin.svg";

export const IconList = (props) => {
  return (
    <div className="flex items-center gap-4 my-3">
      <a href="#">
        <img src={Instagram} width={30} alt="Instagram" {...props} />
      </a>
      <a href="#">
        <img src={Github} width={30} alt="Github" {...props} />
      </a>
      <a href="#">
        <img src={LinkedIn} width={30} alt="LinkedIn" {...props} />
      </a>
    </div>
  );
};
