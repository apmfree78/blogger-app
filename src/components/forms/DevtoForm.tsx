import React, { FormEvent, useState, useContext } from "react";
import useForm from "./useForm";
import DevtoFormTemplate from "components/forms/DevtoFormTemplate";
import { TagProp } from "lib/tagType";
import { Publisher } from "state/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  saveData,
  publishPost,
  DevToPublishStatusType,
} from "redux/devToSlice";

const initialFormState = {
  title: "",
  published: false,
  body_markdown: "",
  tags: [],
  series: "",
};

const DevtoForm: React.FC = () => {
  const { inputs, handleChange, resetForm } = useForm(initialFormState);

  /// state for tags is handled seperately
  const [tags, setTags] = useState<TagProp[]>([]);
  const article = useSelector(
    (state: { devto: DevToPublishStatusType }) => state.devto.article
  );
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(inputs);
    console.log(tags);

    const { title, published, series } = inputs;

    article.title = title;
    article.series = series;
    article.tags = [...tags.map((tag) => tag.text)];
    article.published = published;

    // update state with form data
    dispatch(saveData(article));
    //dispatch action to submit form data to redux state here
    dispatch(publishPost(article));

    // reset Form
    resetForm();
  };

  return (
    <DevtoFormTemplate
      inputs={inputs}
      tags={tags}
      setTags={setTags}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default DevtoForm;
