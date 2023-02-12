import MediumFormTemplate from "publishers/medium/MediumFormTemplate";
import { publishPost, saveData } from "publishers/medium/mediumSlice";
import PublisherForm from "publishers/PublisherForm";
import { initialMediumFormState } from "publishers/publisherInfo";
import { MediumDataProps } from "publishers/publisherInfo";
import React from "react";

const MediumForm: React.FC = () => {
  return (
    <PublisherForm<MediumDataProps>
      saveData={saveData}
      publishData={publishPost}
      initialFormState={initialMediumFormState}
    >
      <MediumFormTemplate
        inputs={[]}
        tags={[]}
        setTags={() => {}}
        handleChange={() => {}}
        handleSubmit={() => {}}
      />
    </PublisherForm>
  );
};

export default MediumForm;
