import React from "react";
import MediumFormTemplate from "components/forms/DevtoFormTemplate";
import PublisherForm from "components/forms/PublisherForm";
import { initialMediumFormState } from "state/initialState";
import { saveData, publishPost } from "redux/mediumSlice";
import { MediumDataProps } from "lib/publisherInfo";

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
