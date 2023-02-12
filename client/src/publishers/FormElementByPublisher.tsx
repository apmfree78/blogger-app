import React, { ReactElement } from "react";
import { Publisher } from "state/actionTypes";
import HashnodeForm from "publishers/hashnode/HashNodeForm";
import DevtoForm from "publishers/devto/DevtoForm";
import MediumForm from "publishers/medium/MediumForm";

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
