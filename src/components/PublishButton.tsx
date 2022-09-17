interface ButtonProps {
  children: string;
}

// Seperate component that will handle styling of publish buttons
const PublishButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className='button is-success is-large'
      style={{ margin: '0em 1em' }}
    >
      <span>
        <i className='fa-solid fa-upload'></i>
      </span>
      <span style={{ marginLeft: '0.35em' }}>{children}</span>
    </button>
  );
};

export default PublishButton;
