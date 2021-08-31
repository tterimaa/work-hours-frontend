import React from "react";
import { useField } from "formik";
import { Form, Input } from "semantic-ui-react";

interface TextInputProps {
  name: string;
  type: string;
  placeholder: string;
  label?: string;
  icon?: string;
}

export const TextInput = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);
  return (
    <Form.Field>
      <label htmlFor={props.name}>{label}</label>
      <Input className="text-input" icon={props.icon} iconPosition="left" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Form.Field>
  );
};
