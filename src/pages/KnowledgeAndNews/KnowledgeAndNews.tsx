import BlogGrid from "../../components/blog/BlogGrid";
import BlogCard from "../../components/blog/BlogCard";

const KnowledgeAndNews = () => {
  return (
    <>
      {/* <h3>ZNANJE IN NOVOSTI</h3> */}
      <BlogGrid>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </BlogGrid>
    </>
  );
};

export default KnowledgeAndNews;
