import React, { FormEvent, useState } from "react";
import useForm from "./useForm";
import MediumFormTemplate from "components/forms/MediumFormTemplate";
import { TagProp } from "lib/tagType";
import { useDispatch, useSelector } from "react-redux";
import { saveData, MediumPublishStatusType } from "redux/mediumSlice";

const initialFormState = {
  title: "",
  canonicalUrl: "",
  tags: [],
  publishStatus: false,
};

const MediumForm: React.FC = () => {
  const { inputs, handleChange, resetForm } = useForm(initialFormState);
  /// state for tags is handled seperately
  const [tags, setTags] = useState<TagProp[]>([]);
  const article = useSelector(
    (state: { medium: MediumPublishStatusType }) => state.medium.article
  );
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(inputs);
    console.log(tags);
    //dispatch action to submit form data to redux state here
    dispatch(saveData(article));

    // reset Form
    resetForm();
  };

  return (
    <MediumFormTemplate
      inputs={inputs}
      tags={tags}
      setTags={setTags}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default MediumForm;
