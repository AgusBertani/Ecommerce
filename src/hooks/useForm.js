import { useState } from "react";

const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleBlur = (event) => {
    handleChange(event);
    setErrors(validateForm(form));
  };
  return {
    form,
    errors,
    handleChange,
    handleBlur,
    setForm,
  };
};
export default useForm;
