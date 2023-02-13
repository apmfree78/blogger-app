/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function useForm<T extends object>(initial: T) {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    // this functions runs when things we are watching change
    setInputs(initial);
  }, [initialValues, initial]);

  function handleChange(e: any) {
    let { value } = e.target;
    const { name, type } = e.target;

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
