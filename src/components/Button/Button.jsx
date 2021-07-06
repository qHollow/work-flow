import styled, { css } from "styled-components";

const CustomButton = styled.button`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  border: none;
  border-radius: ${(props) => props.bradius || "20px"};

  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;

  transition: filter 0.2s ease-in-out;
  cursor: pointer;

  ${(props) =>
    props.model === "primary" &&
    css`
      box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
      background-color: ${(props) => props.bgcolor || "#109CF1"};
      color: ${(props) => props.textColor || "#FFFFFF"};

      &:disabled {
        background-color: #c2cfe0;
        opacity: 0.4;
      }
    `}

  ${(props) =>
    props.model === "secondary" &&
    css`
      background-color: ${(props) => props.bgcolor || "#FFFFFF"};
      color: ${(props) => props.textColor || "#109CF1"};
      border: 1px solid ${(props) => props.textColor || "#109CF1"};
      &:disabled {
        opacity: 0.4;
        background-color: #c2cfe0;
      }
    `}

  ${(props) =>
    props.model === "tertiary" &&
    css`
      background-color: #ffffff;
      color: ${(props) => props.textColor || "#109CF1"};
      &:disabled {
        opacity: 0.4;
      }
    `}
  
  &:focus,
  &:hover {
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(95%);
  }
`;

const Button = ({ model = "primary", children, ...styles }) => {
  return (
    <CustomButton model={model} {...styles}>
      {children}
    </CustomButton>
  );
};

export default Button;
