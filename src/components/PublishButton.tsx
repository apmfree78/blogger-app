interface ButtonProps {
  children: JSX.Element;
}

const PublishButton: React.FC<ButtonProps> = ({ children }) => {
  return <button className='button is-primary is-large'>{children}</button>;
};

export default PublishButton;
