import styled from "styled-components";
import { color } from "../../styles/colors";


const StatusBox = styled.div`
  width: 84px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.white};
  background-color: ${(props) => props.bgcolor};
  border-radius: ${(props) => props.bradius}px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
`;

export { StatusBox };
