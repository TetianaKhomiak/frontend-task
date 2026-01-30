import BlogCard from "../components/blog/BlogCard";
import { blogs } from "../utils";

const KnowledgeAndNews = () => {
  return (
    <>
      <div
        className="bg-white
  bg-[radial-gradient(#d1d5db_1px,transparent_1px)]
  bg-[length:16px_16px]">
        <div className="bg-[#ECF3ED] flex justify-center items-center h-[208px]">
          <h2 className="font-(family-name:--font-montserrat-black) text-[32px]">
            Znanje in novosti
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 max-w-[1216px] mx-auto py-12">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              author={blog.author}
              date={blog.date}
              title={blog.title}
              text={blog.text}
              buttonText={blog.buttonText}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default KnowledgeAndNews;
