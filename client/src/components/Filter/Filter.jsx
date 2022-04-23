import React from "react";

export const Filter = ({
  className,
  id,
  name,
  optionTitle,
  defaultValue,
  onChange,
  mockData,
}) => {
  return (
    <span>
      <select
        className={className}
        id={id}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <option value="all" disabled="disabled">
          {optionTitle}
        </option>

        {mockData.map((mockData) => (
          <option value={mockData.value} key={mockData.value}>
            {mockData.label}
          </option>
        ))}
      </select>
    </span>
  );
};
