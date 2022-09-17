import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import 'styles/markdownEditor.css';

const MarkdownEditor: React.FC = () => {
const [content, setContent] = useState('');

return (
<div className='text-editor'>
<MDEditor
data-testid='markdown-editor'
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
