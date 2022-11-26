import React from "react";
import MediumFormTemplate from "publishers/medium/MediumFormTemplate";
import PublisherForm from "publishers/PublisherForm";
import { initialMediumFormState } from "publishers/publisherInfo";
import { saveData, publishPost } from "publishers/medium/mediumSlice";
import { MediumDataProps } from "publishers/publisherInfo";

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
