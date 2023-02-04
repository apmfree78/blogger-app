import { useUserPosts } from "./hooks/useUserPosts";
import Pagination from "components/posts/Pagination";
import NewPostButton from "components/posts/NewPostButton";
import PostTable from "components/posts/table/PostTable";

const Posts = () => {
  const { posts, page, setPage, totalPages } = useUserPosts();
  if (!posts) return <div>You have no posts!</div>;

  return (
    <>
      <section style={{ paddingBottom: "1.5vh" }}>
        <NewPostButton />
      </section>
      <PostTable posts={posts} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};

export default Posts;
