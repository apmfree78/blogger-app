import React, { FormEvent, useContext, useState } from "react";
import useForm from "./useForm";
import HashnodeFormTemplate from "components/forms/HashNodeFormTemplate";
import { TagProp } from "lib/tagType";
import { useDispatch, useSelector } from "react-redux";
import {
  saveData,
  publishPost,
  HashnodePublishStatusType,
} from "redux/hashnodeSlice";

const initialFormState = {
  title: "",
  contentMarkdown: "",
  tags: [],
  coverImageURL: "",
};

const HashnodeForm: React.FC = () => {
  const { inputs, handleChange, resetForm } = useForm(initialFormState);
  /// state for tags is handled seperately
  const [tags, setTags] = useState<TagProp[]>([]);

  const article = useSelector(
    (state: { hashnode: HashnodePublishStatusType }) => state.hashnode.article
  );
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(inputs);
    console.log(tags);
    //dispatch action to submit form data to redux state here
    // dispatch(...)

    const { title, coverImageURL } = inputs;
    // update state with form data
    // update article with form input;s
    article.title = title;
    article.coverImageURL = coverImageURL;
    article.tags = [...tags.map((tag) => tag.text)];

    //dispatch action to submit form data to redux state here
    dispatch(saveData(article));

    // calling API endpoint to publish post
    publishPost(article);

    // reset Form
    resetForm();
  };

  return (
    <HashnodeFormTemplate
      inputs={inputs}
      tags={tags}
      setTags={setTags}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default HashnodeForm;
