import BlogCard from "../components/blog/BlogCard";
import { blogs } from "../utils";

const KnowledgeAndNews = () => {
  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">ZNANJE IN NOVOSTI</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
