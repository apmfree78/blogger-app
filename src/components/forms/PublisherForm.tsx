import React, { FormEvent, useState } from "react";
import useForm from "./useForm";
import DevtoFormTemplate from "components/forms/DevtoFormTemplate";
import { TagProp } from "lib/tagType";
import { useAppDispatch } from "redux/hooks";
import { DevToDataProps } from "lib/publisherInfo";
import { ActionCreatorWithPayload, AsyncThunk } from "@reduxjs/toolkit";

// const initialFormState: DevToDataProps = {
//   title: '',
//   published: false,
//   body_markdown: '',
//   tags: [],
//   series: '',
// };

type BaseArticle = {
  title: string;
  tags: string[];
};

interface PublishFormProps<T> {
  initialFormState: T;
  saveData: ActionCreatorWithPayload<T, any>;
  publishData: AsyncThunk<string, T, any>;
}

const PublisherForm = <T extends BaseArticle>({
  initialFormState,
  saveData,
  publishData,
}: PublishFormProps<T>) => {
  const { inputs, handleChange, resetForm } = useForm<T>(initialFormState);

  /// state for tags is handled seperately
  const [tags, setTags] = useState<TagProp[]>([]);
  // const article = useAppSelector(
  //   (state: { devto: PublishStatusType<DevToDataProps> }) => state.devto.article
  // );
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(inputs);
    console.log(tags);

    const newArticle: T = { ...inputs };
    // article.title = title;
    // article.series = series;
    newArticle.tags = [...tags.map((tag) => tag.text)];
    // article.published = published;

    // update state with form data
    dispatch(saveData(newArticle));
    //dispatch action to submit form data to redux state here
    dispatch(publishData(newArticle));

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

export default PublisherForm;
