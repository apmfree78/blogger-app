interface ButtonProps {
  children: string;
  handleClick: () => void;
}

// Seperate component that will handle styling of publish buttons
const PublishButton: React.FC<ButtonProps> = ({ children, handleClick }) => {
  return (
    <button
      className='button is-success is-large'
      style={{ margin: '1vh 1vw' }}
      onClick={handleClick}
    >
      <span>
        <i className='fa-solid fa-upload'></i>
      </span>
      <span style={{ marginLeft: '0.75vw' }}>{children}</span>
    </button>
  );
};

export default PublishButton;
