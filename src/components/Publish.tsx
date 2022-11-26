import React, { lazy, Suspense, useState, useContext, useRef } from "react";
import { Publisher } from "state/actionTypes";
import PublishButton from "components/PublishButton";
import { GlobalContext } from "state/context";
import "styles/Publish.css";
import { savePost } from "redux/postSlice";

// import { useDispatch } from "react-redux";
import { useAppDispatch } from "redux/hooks";
import FormElementByPublisher from "publishers/FormElementByPublisher";
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
  // publisher state
  const [publisher, setPublisher] = useState<Publisher>(Publisher.HASHNODE);

  // open up Modal with form to specific publisher;
  const openForm = (publisher: Publisher) => {
    // setting formModal state to open
    openModal();

    setFormTitle(`${publisher} Input Form`);

    setPublisher(publisher);

    // update content on state object
    dispatch(savePost(content));
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
        <FormModal title={formTitle}>
          <FormElementByPublisher publisher={publisher} />
        </FormModal>
      </Suspense>
    </section>
  );
};

export default Publish;
