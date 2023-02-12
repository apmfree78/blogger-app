import DevtoFormTemplate from "publishers/devto/DevtoFormTemplate";
import { publishPost, saveData } from "publishers/devto/devToSlice";
import PublisherForm from "publishers/PublisherForm";
import { initialDevtoFormState } from "publishers/publisherInfo";
import { DevToDataProps } from "publishers/publisherInfo";
import React from "react";

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
