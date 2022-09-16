import React from 'react';
import 'bulmaswatch/slate/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MarkdownEditor from './components/MarkdownEditor';

function App() {
  return (
    <div className='is-flex-direction-column is-justify-content-center is-align-items-center'>
      <MarkdownEditor />
    </div>
  );
}

export default App;
