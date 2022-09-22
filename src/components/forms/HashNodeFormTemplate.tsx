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
        <div className='field is-grouped'>
          <div className='control' style={{ margin: '2vh 0vw 1vh 0vw' }}>
            <button
              className={`button is-info is-large`}
              style={{ marginRight: '1vw' }}
            >
              <span>
                <i className='fa-solid fa-upload'></i>
              </span>
              <span style={{ marginLeft: '0.75vw' }}>Submit</span>
            </button>{' '}
            <button className={`button is-link is-danger is-large`}
              style={{ marginLeft: '1vw' }}
            >
              <span>
                <i className='fa-solid fa-rectangle-xmark'></i>
              </span>
              <span style={{ marginLeft: '0.75vw' }}>Cancel</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default HashnodeFormTemplate;
