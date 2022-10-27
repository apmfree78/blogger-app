import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import 'styles/markdownEditor.css';

interface MarkdownProps {
  content: string;
  setContent: (str: string) => void;
}
const MarkdownEditor: React.FC<MarkdownProps> = ({ content, setContent }) => {
  return (
    <div data-testid='markdown-editor' className='text-editor'>
      <MDEditor
        value={content}
        onChange={(c) => setContent(c || '')}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        height={500}
      />
    </div>
  );
};

export default MarkdownEditor;
