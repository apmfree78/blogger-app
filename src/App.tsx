import { useState } from "react";
import "bulmaswatch/sandstone/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Publish from "components/Publish";
import MarkdownEditor from "components/MarkdownEditor";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "styles/App.css";
import SignIn from "user/SignIn";
import SignUp from "user/SignUp";

const queryClient = new QueryClient();

function App() {
  const [content, setContent] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App center">
        <SignUp />
        {/* <h1 className='title is-1'>Developer Blogger App</h1> */}
        {/* <MarkdownEditor content={content} setContent={setContent} /> */}
        {/* <Publish content={content} /> */}
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
