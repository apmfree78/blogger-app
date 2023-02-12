import React from "react";

interface ButtonProps {
  children: string;
  handleClick: () => void;
  buttonStyle: string;
}

// reusable component that will handle styling of buttons
const PublishButton: React.FC<ButtonProps> = ({
  children,
  handleClick,
  buttonStyle,
}) => {
  return (
    <button
      data-testid={`button ${children}`}
      className={`button ${buttonStyle} is-large`}
      style={{ margin: "1vh 1vw" }}
      onClick={handleClick}
    >
      <span>
        <i className="fa-solid fa-upload"></i>
      </span>
      <span style={{ marginLeft: "0.75vw" }}>{children}</span>
    </button>
  );
};

export default PublishButton;
