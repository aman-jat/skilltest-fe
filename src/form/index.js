import React from 'react';
import './index.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

const MyForm = () => {
  const form = useFormik({
    initialValues: {
      name: 'Aman',
      rollno: 1,
    },
    validationSchema: yup.object({
      name: yup.string().trim().min(1).required('Name is required'),
      rollno: yup.number().required('Roll No. is required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className='form-wrapper'>
      <div class='input-component'>
        <label>Name</label>
        <div>
          <input
            type='text'
            name='name'
            value={form.values.name}
            onChange={form.handleChange}
            error={form.errors.name}
            tocuhed={form.touched.name}
            onBlur={form.handleBlur}
            placeholder='Name'
          />
          {form.errors.name && form.touched.name && (
            <div style={{ color: 'red', fontSize: 12 }}>{form.errors.name}</div>
          )}
        </div>
      </div>

      <div class='input-component'>
        <label>Roll No</label>
        <div>
          <input
            type='text'
            name='rollno'
            value={form.values.rollno}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            placeholder='Roll No.'
          />
          {form.errors.rollno && form.touched.rollno && (
            <div style={{ color: 'red', fontSize: 12 }}>
              {form.errors.rollno}
            </div>
          )}
        </div>
      </div>

      <button
        type='submit'
        style={{ margin: '8px 0' }}
        onClick={form.handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default MyForm;
