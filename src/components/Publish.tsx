import PublishButton from 'components/PublishButton';
import 'styles/Publish.css';
interface PublishProps {
  content: string;
}

// main component that will handle publishing of content
// to various content platforms
const Publish: React.FC<PublishProps> = ({ content }) => {
  return (
    <div aria-label='publish' className='button-align'>
      <PublishButton>Submit to Hashnode</PublishButton>
      <PublishButton>Submit to Dev.to</PublishButton>
      <PublishButton>Submit to Medium</PublishButton>
    </div>
  );
};

export default Publish;
