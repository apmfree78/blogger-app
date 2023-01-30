import React from "react";
import { useState } from "react";
import MarkdownEditor from "components/dashboard/MarkdownEditor";
import Publish from "components/dashboard/Publish";
import { Post } from "shared/types";

const EditPost = () => {
  const [content, setContent] = useState("");
  const [post, setPost] = useState<Post>();

  return (
    <>
      <h1 className="title is-1">Developer Blogger App</h1>
      <MarkdownEditor content={content} setContent={setContent} />
      <Publish content={content} />
    </>
  );
};

export default EditPost;
