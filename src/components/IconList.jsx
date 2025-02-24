import Instagram from "../assets/icon/Instamgram.svg";
import Github from "../assets/icon/Githhub.svg";
import LinkedIn from "../assets/icon/LinkedIn.svg";

export const IconList = (props) => {
  return (
    <div className="flex items-center gap-4 my-3">
      <a href="#">
        <img src={Instagram} width={25} alt="Instagram" {...props} />
      </a>
      <a href="#">
        <img src={Github} width={25} alt="Github" {...props} />
      </a>
      <a href="#">
        <img src={LinkedIn} width={25} alt="LinkedIn" {...props} />
      </a>
    </div>
  );
};
