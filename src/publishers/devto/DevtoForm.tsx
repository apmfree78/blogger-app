import React from "react";
import DevtoFormTemplate from "publishers/devto/DevtoFormTemplate";
import PublisherForm from "publishers/PublisherForm";
import { initialDevtoFormState } from "publishers/publisherInfo";
import { saveData, publishPost } from "publishers/devto/devToSlice";
import { DevToDataProps } from "publishers/publisherInfo";

const DevtoForm: React.FC = () => {
  return (
    <PublisherForm<DevToDataProps>
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
