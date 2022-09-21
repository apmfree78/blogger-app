import React, { useState } from 'react';
interface TagsInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

const TagsInput: React.FC<TagsInputProps> = ({ tags, setTags }) => {

  const removeTags = (indexToRemove: number) => {
    setTags([...tags.filter((tag, index) => index !== indexToRemove)]);
  };

  const addTags = (event: KeyboardEvent) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
    }
  };

  return (
    <div className='tags-input'>
      <ul id='tags'>
        {tags.map((tag, index) => (
          <li key={index} className='tag'>
            <span className='tag-title'>{tag}</span>
            <span className='tag-close-icon' onClick={() => removeTags(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type='text'
        onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
        placeholder='Press enter to add tags'
      />
    </div>
  );
};
