import { useContext, useState, FormEvent } from 'react';
import TagInput from 'components/forms/TagInput';
import FormButtons from 'components/forms/FormButtons';
import { GlobalContext } from 'state/context';
interface HashnodeFormProps {
  inputs: any;
  handleChange: (e: any) => void;
  handleSubmit: (e: FormEvent) => void;
}

const HashnodeFormTemplate: React.FC<HashnodeFormProps> = ({
  inputs,
  handleChange,
  handleSubmit,
}) => {
  const { closeModal } = useContext(GlobalContext);

  const [tags, setTags] = useState([]);
  return (
    <section>
      <form role='form' onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label'>Title</label>
          <div className='control'>
            <input
              onChange={handleChange}
              className='input'
              value={inputs.title || ''}
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
              value={inputs.url || ''}
              type='url'
              name='url'
              placeholder='Enter URL (optional)'
            />
          </div>
          <label className='label'>Tags</label>
          <div className='control'>
            <TagInput />
          </div>
        </div>
        <div className='field is-grouped'>
          <div className='control' style={{ margin: '2vh 0vw 1vh 0vw' }}>
            <FormButtons />
          </div>
        </div>
      </form>
    </section>
  );
};

export default HashnodeFormTemplate;
