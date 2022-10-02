import { FormEvent } from 'react';
import TagInput from 'components/forms/TagInput';
import FormButtons from 'components/forms/FormButtons';
import { TagProp } from 'lib/tagType';
interface HashnodeFormProps {
  inputs: any;
  tags: TagProp[];
  setTags: (tags: TagProp[]) => void;
  handleChange: (e: any) => void;
  handleSubmit: (e: FormEvent) => void;
}

//form template for Hashnode
const HashnodeFormTemplate: React.FC<HashnodeFormProps> = ({
  inputs,
  tags,
  setTags,
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
          <div className='field' style={{ marginTop: '1vh' }}>
            <label className='label'>Tags</label>
            <div className='control'>
              <TagInput tags={tags} setTags={setTags} />
            </div>
          </div>
        </div>
        <div className='field'>
          <label className='label'>Set Article to Published?</label>
          <div className='control'>
            <select
              className='select is-rounded'
              onChange={handleChange}
              value={inputs.published || ''}
              name='published'
            >
              <option value='false'>No</option>
              <option value='true'>Yes</option>
            </select>
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
