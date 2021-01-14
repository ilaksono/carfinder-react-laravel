import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';


let schema = yup.object().shape({
  title: yup.string().required(),
  time: yup.string().required(),
  location: yup.array().required(),
  description: yup.string()
});

const JobForm = () => {

  const submitForm = async (data, a) => {
    console.log(data);
    setAnim(true);
    a.resetForm({});
    a.setErrors({});
    try {
      // const d = await axios
      //   .post('/api/jobs', { ...data });
      console.log(d);
    } catch (er) {
      console.log(er);
    }

  };

  return (
    <div>

      Job Form
      <Formik
        validationSchema={schema}
        onSubmit={submitForm}
        initialValues={{
          title: '',
          time: 'FT',
          location: ['TO'],
          description: '',
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) =>
        (<Form
          noValidate
          onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              value={values.title}
              name="title"
              isValid={touched.title && !errors.title}
              isInvalid={!!errors.title}
              onChange={handleChange}
              type="text" placeholder="Job Title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control
              value={values.time}
              name="time"
              isValid={touched.time && !errors.time}
              isInvalid={!!errors.time}
              onChange={handleChange}

              as="select">
              <option>FT</option>
              <option>CN</option>
              <option>PT</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple
              value={values.location}
              name="location"
              isValid={touched.location && !errors.location}
              isInvalid={!!errors.location}
              onChange={handleChange}

            >
              <option>TO</option>
              <option>MS</option>
              <option>MK</option>
              <option>RH</option>
              <option>NY</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={values.description}
              name='description'
              onChange={handleChange}

              as="textarea" rows={3} />
          </Form.Group>
          <Button type='submit' color='primary'>Submit</Button>
        </Form>)}

      </Formik>
    </div>
  );
};

export default JobForm;