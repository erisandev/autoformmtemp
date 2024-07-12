import React from 'react';
import { useForm } from 'react-hook-form';

const AutoForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input type="text" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </label>
      <label>
        Email:
        <input type="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </label>
      <label>
        Phone:
        <input type="tel" {...register('phone')} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AutoForm;

const { register, handleSubmit, errors } = useForm();

const onSubmit = (data) => {
  console.log(data);
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <label>
      Name:
      <input type="text" {...register('name', { required: true, minLength: 3 })} />
      {errors.name && <p>{errors.name.message}</p>}
    </label>
    <label>
      Email:
      <input type="email" {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
      {errors.email && <p>{errors.email.message}</p>}
    </label>
    <label>
      Phone:
      <input type="tel" {...register('phone', { required: true, pattern: /^\d{3}-\d{3}-\d{4}$/ })} />
      {errors.phone && <p>{errors.phone.message}</p>}
    </label>
    <button type="submit">Submit</button>
  </form>
);
