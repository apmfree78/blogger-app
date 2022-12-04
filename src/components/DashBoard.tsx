import { useState } from "react";
import MarkdownEditor from "components/MarkdownEditor";
import Publish from "components/Publish";

const Dashboard = () => {
  const [content, setContent] = useState("");

  return (
    <>
      <h1 className="title is-1">Developer Blogger App</h1>
      <MarkdownEditor content={content} setContent={setContent} />
      <Publish content={content} />
    </>
  );
};

export default Dashboard;
