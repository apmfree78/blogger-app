import { FormEvent } from 'react';
import TagInput from 'components/forms/TagInput';
import FormButtons from 'components/forms/FormButtons';
import { TagProp } from 'lib/tagType';
interface DevtoFormProps {
  inputs: any;
  tags: TagProp[];
  setTags: (tags: TagProp[]) => void;
  handleChange: (e: any) => void;
  handleSubmit: (e: FormEvent) => void;
}

//form template for Devto
const DevtoFormTemplate: React.FC<DevtoFormProps> = ({
  inputs,
  tags,
  setTags,
  handleChange,
  handleSubmit,
}) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
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
          <label className='label'>Set Article to Published?</label>
          <div className='control'>
            <select
              className='select is-rounded'
              style={{ minWidth: '5vw' }}
              onChange={handleChange}
              value={inputs.published || ''}
              name='published'
            >
              <option value='false'>No</option>
              <option value='true'>Yes</option>
            </select>
          </div>
        </div>

        <div className='field' style={{ marginTop: '1vh' }}>
          <label className='label'>Tags</label>
          <div className='control'>
            <TagInput tags={tags} setTags={setTags} />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Series (optional)</label>
          <div className='control'>
            <input
              onChange={handleChange}
              className='input'
              value={inputs.series || ''}
              type='text'
              name='series'
              placeholder='Enter series'
              maxLength={40}
              required
            />
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

export default DevtoFormTemplate;
