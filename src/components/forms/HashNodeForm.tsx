import React, { FormEvent, useContext, useState } from 'react';
import useForm from './useForm';
import HashnodeFormTemplate from 'components/forms/HashNodeFormTemplate';

const HashnodeForm: React.FC = () => {
  const { inputs, handleChange, resetForm, clearForm } = useForm('');

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
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default HashnodeForm;
