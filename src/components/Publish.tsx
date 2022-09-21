import React, { useState } from 'react';
import { Publisher } from 'state/actionTypes';
import PublishButton from 'components/PublishButton';
import 'styles/Publish.css';
import FormModal from 'lib/formModal';
interface PublishProps {
  content: string;
}

// main component that will handle publishing of content
// to various content platforms
const Publish: React.FC<PublishProps> = ({ content }) => {
  //modal toggle state
  const [open, setOpen] = useState(false);

  // open up Modal with form specific to publisher;
  const openForm = (publisher: Publisher) => {
    // setting formModal state to open
    setOpen(true);

    // set JSX child element to pass to Modal
  };

  return (
    <div aria-label='publish' style={{ marginTop: '1vh' }}>
      <PublishButton handleClick={() => openForm(Publisher.HASHNODE)}>
        Submit to Hashnode
      </PublishButton>
      <PublishButton handleClick={() => openForm(Publisher.DEV_TO)}>
        Submit to Dev.to
      </PublishButton>
      <PublishButton handleClick={() => openForm(Publisher.MEDIUM)}>
        Submit to Medium
      </PublishButton>
      <FormModal
        open={open}
        closeModal={() => setOpen(false)}
        title='Input Form'
      >
        Input Form for Publisher Goes Here
      </FormModal>
    </div>
  );
};

export default Publish;
