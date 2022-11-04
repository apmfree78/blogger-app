import React from "react";
import "components/forms/TagInput.css";
import { WithContext as ReactTags } from "react-tag-input";
import { TagProp } from "lib/tagType";

// const suggestionList = ['javascript', 'typescript', 'node', 'api', 'react'];
// const suggestions = suggestionList.map((topic) => {
//   return {
//     id: topic,
//     text: topic,
//   };
// });

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

interface TagInputProps {
  tags: TagProp[];
  setTags: (tags: TagProp[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ tags, setTags }) => {
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
    console.log("The tag at index " + index + " was clicked");
  };

  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <ReactTags
        tags={tags}
        // suggestions={suggestions}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        handleTagClick={handleTagClick}
        inputFieldPosition="inline"
        placeholder="Add a tag"
        autocomplete
      />
    </div>
  );
};

export default TagInput;
