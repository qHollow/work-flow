import styled from "styled-components";
import { color } from "./../../styles/colors";

const Wrapper = styled.div`
  width: 302px;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  transition: all 0.3s ease-in-out;
  top: 18px;
  left: 0;
  opacity: 0.5;
`;

const CustomInput = styled.input`
  width: 100%;
  padding: 21px 0 7px 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${color.iconGray};
  color: ${color.tableBlack};
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.01em;
  opacity: 0.5;
  outline: none;

  &:focus {
    border-bottom: 1px solid ${color.gray};
    opacity: 1;
  }

  &:focus ~ ${Label},
  &:not(:placeholder-shown) ~ ${Label}{
    top: 0;
    color: ${color.accentBlue};
    font-size: 11px;
  }
`;



export { CustomInput, Wrapper, Label };
