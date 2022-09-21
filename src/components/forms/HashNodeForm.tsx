import { HashnodeDataProps } from 'lib/publisherInfo';

interface HashnodeFormProps {
  handleChange: () => void;
  handleSubmit: () => void;
}

const HashnodeForm: React.FC<HashnodeFormProps> = ({
  handleChange,
  handleSubmit,
}) => {
  return (
    <section>
      <form role='form'>
        <div className='field'>
          <label className='label'>Title</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              name='title'
              placeholder='Enter title'
              maxLength={40}
              required
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Cover Image URL</label>
          <div className='control'>
            <input
              className='input'
              type='url'
              name='title'
              placeholder='Enter URL (optional)'
            />
          </div>
        </div>
      </form>
    </section>
  );
};
