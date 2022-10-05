import React, { FormEvent, useState, useContext } from 'react';
import useForm from './useForm';
import DevtoFormTemplate from 'components/forms/DevtoFormTemplate';
import { TagProp } from 'lib/tagType';
import { GlobalContext } from 'state/context';
import { ActionType } from 'state/actionTypes';

const DevtoForm: React.FC = () => {
  const { inputs, handleChange, resetForm, clearForm } = useForm('');
  /// state for tags is handled seperately
  const [tags, setTags] = useState<TagProp[]>([]);
  const { dispatch } = useContext(GlobalContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('form submitted');
    console.log(inputs);
    console.log(tags);


    // update state with form data
    dispatch({ type: ActionType.UPDATE_DEVTO_DATA, title: inputs.title, published: inputs.published, series: inputs.series, tags: [...tags] });
    //dispatch action to submit form data to redux state here
    // dispatch(...)

    // reset Form
    resetForm();
    clearForm();
  };

  return (
    <DevtoFormTemplate
      inputs={inputs}
      tags={tags}
      setTags={setTags}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default DevtoForm;
