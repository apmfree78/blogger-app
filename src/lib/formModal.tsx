import React from 'react';

interface FormModalProps {
  open: boolean;
  closeModal: () => void;
  children: JSX.Element | string;
  title: string;
}

const FormModal: React.FC<FormModalProps> = ({
  open,
  closeModal,
  children,
  title,
}) => {
  return (
    <div className={`modal ${open ? 'is-active' : ''}`}>
      <div className='modal-background' onClick={closeModal} />
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>{title}</p>
          <button className='delete' onClick={closeModal} />
        </header>
        <section className='modal-card-body'>
          <div className='content'>{children}</div>
        </section>
        <footer className='modal-card-foot'>
          <a className='button' onClick={closeModal}>
            Cancel
          </a>
        </footer>
      </div>
    </div>
  );
};

export default FormModal;