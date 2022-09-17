import React from 'react';
import 'bulmaswatch/slate/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MarkdownEditor from './components/MarkdownEditor';
import './App.css';

function App() {
  return (
    <div className='App center'>
      <MarkdownEditor />
    </div>
  );
}

export default App;
