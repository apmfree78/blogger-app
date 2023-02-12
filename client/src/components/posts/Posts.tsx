import NewPostButton from "components/posts/NewPostButton";
import Pagination from "components/posts/Pagination";
import PostTable from "components/posts/table/PostTable";

import { useUserPosts } from "./hooks/useUserPosts";

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
