import React, { lazy, Suspense, useState, useContext, useRef } from "react";
import { Publisher } from "state/actionTypes";
import PublishButton from "components/PublishButton";
import { GlobalContext } from "state/context";
import "styles/Publish.css";
// import FormModal from 'lib/formModal';
import HashnodeForm from "publishers/hashnode/HashNodeForm";
import DevtoForm from "publishers/devto/DevtoForm";
import MediumForm from "publishers/medium/MediumForm";
import { savePost } from "redux/postSlice";

// import { useDispatch } from "react-redux";
import { useAppDispatch } from "redux/hooks";
const FormModal = lazy(() => import("components/forms/formModal"));

interface PublishProps {
  content: string;
}

// main component that will handle publishing of content
// to various content platforms
const Publish: React.FC<PublishProps> = ({ content }: { content: string }) => {
  //modal toggle state
  const { openModal } = useContext(GlobalContext);
  // redux dispatch function
  const dispatch = useAppDispatch();
  // title for form Modal
  const [formTitle, setFormTitle] = useState("Input Form");
  // useRef for JSX Form component
  const PublisherFormElement = useRef(<HashnodeForm />);
  // open up Modal with form specific to publisher;
  const openForm = (publisher: Publisher) => {
    // setting formModal state to open
    openModal();

    // update content on state object
    // console.log(content);
    dispatch(savePost(content));
    // dispatch({ type: ActionType.UPDATE_CONTENT, payload: content });

    // set title for form modal
    setFormTitle(`${publisher} Input Form`);
    // set JSX child element to pass to Modal
    switch (publisher) {
      case Publisher.HASHNODE:
        PublisherFormElement.current = <HashnodeForm />;
        break;
      case Publisher.DEV_TO:
        PublisherFormElement.current = <DevtoForm />;
        break;
      case Publisher.MEDIUM:
        PublisherFormElement.current = <MediumForm />;
        break;
    }
  };
  return (
    <section aria-label="publish" style={{ marginTop: "1vh" }}>
      <div className="columns">
        <div className="column">
          <PublishButton
            buttonStyle="is-success"
            handleClick={() => openForm(Publisher.HASHNODE)}
          >
            Submit to Hashnode
          </PublishButton>
        </div>
        <div className="column">
          <PublishButton
            buttonStyle="is-danger"
            handleClick={() => openForm(Publisher.DEV_TO)}
          >
            Submit to Dev.to
          </PublishButton>
        </div>
        <div className="column">
          <PublishButton
            buttonStyle="is-info"
            handleClick={() => openForm(Publisher.MEDIUM)}
          >
            Submit to Medium
          </PublishButton>
        </div>
      </div>
      <Suspense>
        <FormModal title={formTitle}>{PublisherFormElement.current}</FormModal>
      </Suspense>
    </section>
  );
};

export default Publish;
