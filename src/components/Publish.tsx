import React, { useState, useContext } from 'react';
import { Publisher } from 'state/actionTypes';
import PublishButton from 'components/PublishButton';
import { GlobalContext } from 'state/context';
import 'styles/Publish.css';
import FormModal from 'lib/formModal';
import HashnodeForm from 'components/forms/HashnodeForm';
interface PublishProps {
  content: string;
}

// main component that will handle publishing of content
// to various content platforms
const Publish: React.FC<PublishProps> = ({ content }) => {
  //modal toggle state
  const { open, openModal } = useContext(GlobalContext);
  // title for form Modal
  const [formTitle, setFormTitle] = useState('Input Form');

  // open up Modal with form specific to publisher;
  const openForm = (publisher: Publisher) => {
    // setting formModal state to open
    openModal();

    // set title for form modal
    setFormTitle(`${publisher} Input Form`);
    // set JSX child element to pass to Modal and title
    switch (publisher) {
      case Publisher.HASHNODE:
    }
  };

  return (
    <section aria-label='publish' style={{ marginTop: '1vh' }}>
      <div className='columns'>
        <div className='column'>
          <PublishButton
            buttonStyle='is-success'
            handleClick={() => openForm(Publisher.HASHNODE)}
          >
            Submit to Hashnode
          </PublishButton>
        </div>
        <div className='column'>
          <PublishButton
            buttonStyle='is-danger'
            handleClick={() => openForm(Publisher.DEV_TO)}
          >
            Submit to Dev.to
          </PublishButton>
        </div>
        <div className='column'>
          <PublishButton
            buttonStyle='is-info'
            handleClick={() => openForm(Publisher.MEDIUM)}
          >
            Submit to Medium
          </PublishButton>
        </div>
      </div>
      <FormModal title={formTitle}>
        <HashnodeForm />
      </FormModal>
    </section>
  );
};

export default Publish;
