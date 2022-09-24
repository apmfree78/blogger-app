import React, { FormEvent, useState } from 'react';
import useForm from './useForm';
import HashnodeFormTemplate from 'components/forms/HashNodeFormTemplate';

import { TagProp } from 'lib/tagType';

const HashnodeForm: React.FC = () => {
  const { inputs, handleChange, resetForm, clearForm } = useForm('');
  /// state for tags is handled seperately
  const [tags, setTags] = useState<TagProp[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('form submitted');
    //dispatch action to submit form data to redux state here
    // dispatch(...)

    // reset Form
    resetForm();
    clearForm();
  };

  return (
    <HashnodeFormTemplate
      inputs={inputs}
      tags={tags}
      setTags={setTags}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default HashnodeForm;
