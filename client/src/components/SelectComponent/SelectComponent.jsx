import React from "react";
import { Label, ErrorText } from "../../Elements/Form";
import { Select } from "../../Elements/Select";

const SelectComponent = ({
  state,
  setState,
  name,
  titleLabel,
  mockData,
  titleOption,
  validation,
  errorText,
  defaultValue,
  disabled,
  id,
}) => {
  const onChange = (e) => {
    if (e.target.value !== "all")
      setState({ ...state, field: e.target.value, validated: "true" });
    else setState({ ...state, field: "", validated: "false" });
  };

  console.log(defaultValue)
  return (
    <div>
      <Label htmlFor="">{titleLabel}</Label>
      <Select
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onChange}
        validated={validation}
        defaultValue={defaultValue}
        // value={state.field}
      >
        <option value="all" disabled={disabled}>
          ---
        </option>
        {mockData.map((mockData) => (
          <option value={mockData.value} key={mockData.value}>
            {mockData.value}
          </option>
        ))}
      </Select>
      <ErrorText validated={state.validated}>{errorText}</ErrorText>
    </div>
  );
};

export default SelectComponent;
