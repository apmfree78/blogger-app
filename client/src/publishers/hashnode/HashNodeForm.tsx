import HashNodeFormTemplate from "publishers/hashnode/HashNodeFormTemplate";
import { publishPost, saveData } from "publishers/hashnode/hashnodeSlice";
import PublisherForm from "publishers/PublisherForm";
import { initialHashNodeFormState } from "publishers/publisherInfo";
import { HashNodeDataProps } from "publishers/publisherInfo";
import React from "react";

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
