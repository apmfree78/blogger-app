import React, { useContext } from "react";
import { GlobalContext } from "state/context";
interface FormModalProps {
  children: JSX.Element | string;
  title: string;
}

// reusable component for bulma modal
const FormModal: React.FC<FormModalProps> = ({ children, title }) => {
  //access open, and closeModal from Global context
  const { open, closeModal } = useContext(GlobalContext);

  return (
    <div className={`modal ${open ? "is-active" : ""}`}>
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>
        {/* <footer className='modal-card-foot'> */}
        {/*   <a className='button' onClick={closeModal}> */}
        {/*     Cancel */}
        {/*   </a> */}
        {/* </footer> */}
      </div>
    </div>
  );
};

export default FormModal;
