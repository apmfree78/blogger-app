import MarkdownEditor from "components/dashboard/MarkdownEditor";
import Publish from "components/dashboard/Publish";
import { usePostContent } from "./hooks/usePostContent";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const { postContent, savePostContent } = usePostContent(id || null);

  if (postContent === null) return <div>Post not found!</div>;
  return (
    <>
      <h1 className="title is-1">Developer Blogger App</h1>
      <MarkdownEditor content={postContent} setContent={savePostContent} />
      <Publish content={postContent} />
    </>
  );
};

export default EditPost;
