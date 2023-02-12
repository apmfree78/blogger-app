import "styles/markdownEditor.css";

import MDEditor from "@uiw/react-md-editor";
import React from "react";
import rehypeSanitize from "rehype-sanitize";

interface MarkdownProps {
  content: string;
  setContent: (str: string) => void;
}
const MarkdownEditor: React.FC<MarkdownProps> = ({ content, setContent }) => {
  return (
    <div data-testid="markdown-editor" className="text-editor">
      <MDEditor
        value={content}
        onChange={(c) => setContent(c || "")}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        height={500}
      />
    </div>
  );
};

export default MarkdownEditor;
