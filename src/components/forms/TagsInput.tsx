import React, { useState } from 'react';
import 'TagsInput.scss'
interface TagsInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

const TagsInput: React.FC<TagsInputProps> = ({ tags, setTags }) => {
  const [tagInput, setTagInput] = useState('');

  // REMOVE TAG when users presses 'x'
  const removeTags = (indexToRemove: number) => {
    setTags([...tags.filter((tag, index) => index !== indexToRemove)]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //check if user pressed 'Enter'
    if (event.key === 'Enter') {
      event.preventDefault();

      // ADDING TAG to global state of tags
      setTags([...tags, tagInput]);
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
        onKeyDown={handleKeyDown}
        placeholder='Press enter to add tags'
      />
    </div>
  );
};
