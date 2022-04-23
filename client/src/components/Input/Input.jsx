import React from "react";
import { Label, Inputs, ErrorText } from "../../Elements/Form.jsx";

const Input = ({
  state,
  setState,
  type,
  label,
  placeholder,
  name,
  errorText,
  expresionRegular,
}) => {
  const onChange = (e) => {
    setState({ ...state, field: e.target.value });
  };

  const validate = () => {
    if (expresionRegular) {
      if (expresionRegular.test(state.field)) {
        //styled components no lee booleans, solo strings
        setState({ ...state, validated: "true" });
      } else {
        setState({ ...state, validated: "false" });
      }
    }
  };

  return (
    <div>
      <Label htmlFor={name} validated={state.validated}>
        {label}
      </Label>
      <Inputs
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={state.field}
        onChange={onChange}
        onKeyUp={validate}
        onBlur={validate}
        validated={state.validated}
      />
      <ErrorText validated={state.validated}>{errorText}</ErrorText>
    </div>
  );
};

export default Input;
