import React, { useState } from 'react';
import './style.css';
import { WithContext as ReactTags } from 'react-tag-input';

interface TagProp {
  id: string;
  text: string;
}
const suggestionList = ['javascript', 'typescript', 'node', 'api', 'react'];
const suggestions = suggestionList.map((topic) => {
  return {
    id: topic,
    text: topic,
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const TagInput = () => {
  const [tags, setTags] = React.useState([
    { id: 'Thailand', text: 'Thailand' },
    { id: 'India', text: 'India' },
    { id: 'Vietnam', text: 'Vietnam' },
    { id: 'Turkey', text: 'Turkey' },
  ]);

  const handleDelete = (i: number) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag: TagProp) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag: TagProp, currPos: number, newPos: number) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index: number) => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <div className='app'>
      <h1> React Tags Example </h1>
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition='bottom'
          autocomplete
        />
      </div>
    </div>
  );
};

export default TagInput;
