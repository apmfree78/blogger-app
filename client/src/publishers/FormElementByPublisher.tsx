import DevtoForm from "publishers/devto/DevtoForm";
import HashnodeForm from "publishers/hashnode/HashNodeForm";
import MediumForm from "publishers/medium/MediumForm";
import React, { ReactElement } from "react";
import { Publisher } from "state/actionTypes";

const FormElementByPublisher = ({
  publisher,
}: {
  publisher: Publisher;
}): ReactElement => {
  switch (publisher) {
    case Publisher.HASHNODE:
      return <HashnodeForm />;
    case Publisher.DEV_TO:
      return <DevtoForm />;
    case Publisher.MEDIUM:
      return <MediumForm />;
  }
};

export default FormElementByPublisher;
