import { useState } from "react";
import "bulmaswatch/sandstone/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Publish from "components/Publish";
import MarkdownEditor from "components/MarkdownEditor";
import "styles/App.css";
import SignIn from "user/SignIn";

function App() {
  const [content, setContent] = useState("");

  return (
    <div className="App center">
      <SignIn />
      {/* <h1 className='title is-1'>Developer Blogger App</h1> */}
      {/* <MarkdownEditor content={content} setContent={setContent} /> */}
      {/* <Publish content={content} /> */}
    </div>
  );
}

export default App;
