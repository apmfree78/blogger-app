import React, { FormEvent, useState } from "react";
import useForm from "./useForm";
import DevtoFormTemplate from "components/forms/DevtoFormTemplate";
import { TagProp } from "lib/tagType";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { DevToDataProps, PublishStatusType } from "lib/publisherInfo";
import { saveData, publishPost } from "redux/devToSlice";

const initialFormState: DevToDataProps = {
  title: "",
  published: false,
  body_markdown: "",
  tags: [],
  series: "",
};

const DevtoForm: React.FC = () => {
  const { inputs, handleChange, resetForm } =
    useForm<DevToDataProps>(initialFormState);

  /// state for tags is handled seperately
  const [tags, setTags] = useState<TagProp[]>([]);
  const article = useAppSelector(
    (state: { devto: PublishStatusType<DevToDataProps> }) => state.devto.article
  );
  const dispatch = useAppDispatch();

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
