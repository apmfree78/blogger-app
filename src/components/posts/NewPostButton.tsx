import classNames from "classnames";
import { useCreatePost } from "components/posts/hooks/useCreatePost";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewPostButton = () => {
  const { createPost, postId, isSuccess, isLoading } = useCreatePost();
  const navigate = useNavigate();
  const buttonClasses = classNames("button is-success", {
    "is-loading": isLoading,
  });

  // checking if post has successfully been created
  // if so navigate to new post
  useEffect(() => {
    if (isSuccess && postId) navigate(`/post/${postId}`);
  }, [isSuccess]);

  return (
    <button
      onClick={() => createPost()}
      disabled={isLoading}
      className={buttonClasses}
      style={{ margin: "1vh 1vw" }}
    >
      <span>
        <i className="fa-solid fa-pen-to-square"></i>
      </span>
      <span style={{ marginLeft: "0.75vw" }}>Create New Post</span>
    </button>
  );
};

export default NewPostButton;
