import styled, { css } from "styled-components";

const colors = {
  text: "#333333",
  borde: "#0075FF",
  error: "#bb2929",
  success: "#1ed12d",
};

const Select = styled.select`
  /* padding: 8px 12px; */
  color: ${colors.text};
  background: #EEEEEE;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colors.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.validated === "true" &&
    css`
      border: 3px solid transparent;
    `};
  ${(props) =>
    props.validated === "false" &&
    css`
      border: 3px solid ${colors.error} !important;
    `};
`;

export { Select };
