import { NavLink } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ui/arrow-right.png";

interface BlogCardProps {
  image: string;
  author: string;
  date: string;
  title: string;
  text: string;
  buttonText: string;
}

const BlogCard = ({
  image,
  author,
  date,
  title,
  text,
  buttonText,
}: BlogCardProps) => {
  return (
    <article className="flex flex-col dark:bg-gray-800 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-black/30">
      <NavLink to="/blog">
        <img
          src={image}
          alt={title}
          className="mx-auto max-w-[359px] lg:max-w-[310px] xl:max-w-[384px] transition-transform duration-300 ease-out hover:scale-105"
        />
      </NavLink>

      <div className="px-7 py-4 flex flex-col flex-1">
        <p className="font-(family-name:--font-anonymous) font-normal text-[14px] dark:text-gray-400">
          {author} | {date}
        </p>
        <h2
          className="mt-2 font-(family-name:--font-montserrat) font-black text-[#6CB63F] dark:text-[#7DD957] text-[16px] 
        transition-colors duration-300 group-hover:text-[#5AA832] dark:group-hover:text-[#8EF06A]">
          {title}
        </h2>
        <p className="mt-2 flex-1 font-(family-name:--font-anonymous) font-normal text-[16px] dark:text-gray-300">
          {text}
        </p>

        <NavLink
          to="/blog"
          className="mt-3 font-(family-name:--font-anonymous) font-bold text-[16px] inline-flex items-center text-left py-1 dark:text-gray-300 transition-all duration-300 hover:gap-3">
          {buttonText}
          <img
            src={ArrowIcon}
            alt="arrow icon"
            className="ml-3 dark:invert xl:m-0 transition-transform duration-300 hover:translate-x-1"
          />
        </NavLink>
      </div>
    </article>
  );
};

export default BlogCard;
