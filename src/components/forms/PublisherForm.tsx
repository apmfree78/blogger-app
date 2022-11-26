import React, { FormEvent, useState } from "react";
import useForm from "./useForm";
import { TagProp } from "lib/tagType";
import { useAppDispatch } from "redux/hooks";
import { ActionCreatorWithPayload, AsyncThunk } from "@reduxjs/toolkit";

type BaseArticle = {
  title: string;
  tags: string[];
};

interface PublishFormProps<T> {
  initialFormState: T;
  saveData: ActionCreatorWithPayload<T, any>;
  publishData: AsyncThunk<string, T, any>;
  children: React.ReactElement;
}

const PublisherForm = <T extends BaseArticle>({
  initialFormState,
  saveData,
  publishData,
  children,
}: PublishFormProps<T>) => {
  const { inputs, handleChange, resetForm } = useForm<T>(initialFormState);

  /// state for tags is handled seperately
  const [tags, setTags] = useState<TagProp[]>([{ id: "", text: "" }]);
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
  // <DevtoFormTemplate
  //   inputs={inputs}
  //   tags={tags}
  //   setTags={setTags}
  //   handleChange={handleChange}
  //   handleSubmit={handleSubmit}
  // />

  return React.cloneElement(children, {
    inputs,
    tags,
    setTags,
    handleChange,
    handleSubmit,
  });
};

export default PublisherForm;
