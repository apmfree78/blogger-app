import React from "react";
import HashNodeFormTemplate from "publishers/hashnode/HashNodeFormTemplate";
import PublisherForm from "publishers/PublisherForm";
import { initialHashNodeFormState } from "state/initialState";
import { saveData, publishPost } from "publishers/hashnode/hashnodeSlice";
import { HashNodeDataProps } from "publishers/publisherInfo";

const HashNodeForm: React.FC = () => {
  return (
    <PublisherForm<HashNodeDataProps>
      saveData={saveData}
      publishData={publishPost}
      initialFormState={initialHashNodeFormState}
    >
      <HashNodeFormTemplate
        inputs={[]}
        tags={[]}
        setTags={() => {}}
        handleChange={() => {}}
        handleSubmit={() => {}}
      />
    </PublisherForm>
  );
};

export default HashNodeForm;
