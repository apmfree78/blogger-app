import React, { FormEvent, useState } from 'react';
import useForm from './useForm';
import HashnodeFormTemplate from 'components/forms/HashNodeFormTemplate';

const HashnodeForm: React.FC = () => {
  const { inputs, handleChange, resetForm } = useForm('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    //dispatch action to submit form data to redux state here
    // dispatch(...)

    // reset Form
    resetForm();
  };

  return (
    <HashnodeFormTemplate
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default HashnodeForm;
