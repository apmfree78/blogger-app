import { useUserPosts } from "./hooks/usePost";
import ListPosts from "components/posts/ListPosts";
import Pagination from "components/posts/Pagination";

const Posts = () => {
  const { posts, page, setPage, totalPages } = useUserPosts();
  if (!posts) return <div>You have no posts!</div>;

  return (
    <>
      <ListPosts posts={posts} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};

export default Posts;
