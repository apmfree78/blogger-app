/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function useForm(initial: any) {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    // this functions runs when things we are watching change
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e: any) {
    let { value, name, type } = e.target;

    if (type === "number") {
      value = parseInt(value);
    }

    setInputs({
      ...inputs, // copying existing state
      [name]: value, // updating name field with inputed 'value'
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  return {
    inputs,
    handleChange,
    resetForm,
  };
}
