import React, { useState } from 'react';
import 'bulmaswatch/slate/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MarkdownEditor from 'components/MarkdownEditor';
import 'styles/App.css';

function App() {
  const [content, setContent] = useState('');

  return (
    <div className='App center'>
      <h1 className='title is-1'>Developer Blogger App</h1>
      <MarkdownEditor content={content} setContent={setContent} />
    </div>
  );
}

export default App;
