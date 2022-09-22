import { HashnodeDataProps } from 'lib/publisherInfo';
import { FormEvent } from 'react';

interface HashnodeFormProps {
  handleChange: (e: any) => void;
  handleSubmit: (e: FormEvent) => void;
}

const HashnodeFormTemplate: React.FC<HashnodeFormProps> = ({
  handleChange,
  handleSubmit,
}) => {
  return (
    <section>
      <form role='form' onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label'>Title</label>
          <div className='control'>
            <input
              onChange={handleChange}
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
              onChange={handleChange}
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

export default HashnodeFormTemplate;
