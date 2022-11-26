import React from "react";
import HashNodeFormTemplate from "components/forms/HashNodeFormTemplate";
import PublisherForm from "components/forms/PublisherForm";
import { initialHashNodeFormState } from "state/initialState";
import { saveData, publishPost } from "redux/hashnodeSlice";
import { HashNodeDataProps } from "lib/publisherInfo";

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
