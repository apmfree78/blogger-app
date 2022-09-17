import React from 'react';
import 'bulmaswatch/slate/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MarkdownEditor from 'components/MarkdownEditor';
import 'App.css';

function App() {
  return (
    <div className='App center'>
      <h1 className='title is-1'>Developer Blogger App</h1>
      <MarkdownEditor />
    </div>
  );
}

export default App;
