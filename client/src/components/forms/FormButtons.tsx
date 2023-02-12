import React, { useContext } from "react";
import { GlobalContext } from "state/context";

const FormButtons: React.FC = () => {
  const { closeModal } = useContext(GlobalContext);
  return (
    <>
      <button
        type="submit"
        className={`button is-info is-large`}
        style={{ marginRight: "1vw" }}
      >
        <span>
          <i className="fa-solid fa-upload"></i>
        </span>
        <span style={{ marginLeft: "0.75vw" }}>Submit</span>
      </button>{" "}
      <button
        onClick={closeModal}
        className={`button is-link is-danger is-large`}
        style={{ marginLeft: "1vw" }}
      >
        <span>
          <i className="fa-solid fa-rectangle-xmark"></i>
        </span>
        <span style={{ marginLeft: "0.75vw" }}>Cancel</span>
      </button>
    </>
  );
};

export default FormButtons;
