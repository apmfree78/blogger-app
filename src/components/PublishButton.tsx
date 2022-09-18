interface ButtonProps {
  children: string;
}

// Seperate component that will handle styling of publish buttons
const PublishButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className='button is-success is-large'
      style={{ margin: '1vh 1vw' }}
    >
      <span>
        <i className='fa-solid fa-upload'></i>
      </span>
      <span style={{ marginLeft: '0.75vw' }}>{children}</span>
    </button>
  );
};

export default PublishButton;
