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
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col flex-1">
        <p>
          {author} | {date}
        </p>
        <h3 className="mt-2">{title}</h3>
        <p className=" mt-1 flex-1">{text}</p>

        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default BlogCard;
