import React from "react";
import DevtoFormTemplate from "components/forms/DevtoFormTemplate";
import PublisherForm from "components/forms/PublisherForm";
import { initialDevtoFormState } from "state/initialState";
import { saveData, publishPost } from "redux/devToSlice";

const DevtoForm: React.FC = () => {
  return (
    <PublisherForm
      saveData={saveData}
      publishData={publishPost}
      initialFormState={initialDevtoFormState}
    >
      <DevtoFormTemplate
        inputs={[]}
        tags={[]}
        setTags={() => {}}
        handleChange={() => {}}
        handleSubmit={() => {}}
      />
    </PublisherForm>
  );
};

export default DevtoForm;
