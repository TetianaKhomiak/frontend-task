import { NavLink } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ui/arrow-right.png";
import type { BlogCardProps } from "../../types/types";

const BlogCard = ({
  image,
  author,
  date,
  title,
  text,
  buttonText,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col">
      <NavLink to="/blog">
        <img src={image} alt={title} />
      </NavLink>

      <div className="p-4 flex flex-col flex-1">
        <p className="font-(family-name:--font-anonymous) font-normal text-[14px]">
          {author} | {date}
        </p>
        <h2 className="mt-2 font-(family-name:--font-montserrat) font-black text-[#6CB63F] text-[16px]">
          {title}
        </h2>
        <p className="mt-2 flex-1 font-(family-name:--font-anonymous) font-normal text-[16px]">
          {text}
        </p>

        <NavLink
          to="/blog"
          className="mt-3 font-(family-name:--font-anonymous) font-bold text-[16px] inline-flex items-center text-left py-1">
          {buttonText}
          <img src={ArrowIcon} alt="arrow icon" className="ml-3" />
        </NavLink>
      </div>
    </div>
  );
};

export default BlogCard;
