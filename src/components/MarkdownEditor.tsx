import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

const MarkdownEditor: React.FC = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <MDEditor
        value={content}
        onChange={(c) => setContent(c || '')}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
    </div>
  );
};

export default MarkdownEditor;
