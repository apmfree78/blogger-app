import React, { FormEvent, useState } from 'react';
import useForm from './useForm';
import MediumFormTemplate from 'components/forms/MediumFormTemplate';
import { TagProp } from 'lib/tagType';

const MediumForm: React.FC = () => {
  const { inputs, handleChange, resetForm } = useForm('');
  /// state for tags is handled seperately
  const [tags, setTags] = useState<TagProp[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('form submitted');
    console.log(inputs);
    console.log(tags);
    //dispatch action to submit form data to redux state here
    // dispatch(...)

    // reset Form
    resetForm();
  };

  return (
    <MediumFormTemplate
      inputs={inputs}
      tags={tags}
      setTags={setTags}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default MediumForm;
