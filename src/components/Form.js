import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react/cjs/react.development';

export const MyForm = ({
  label,
  labelPlaceholder,
  description,
  descriptionPlaceholder,
  onSubmit,
}) => {
  const [labelValue, setLabelValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      label: labelValue,
      description: descriptionValue,
    });
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type="text"
          placeholder={labelPlaceholder}
          value={labelValue}
          onChange={(e) => setLabelValue(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{description}</Form.Label>
        <Form.Control
          type="text"
          placeholder={descriptionPlaceholder}
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
