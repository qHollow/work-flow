import styled from "styled-components";
import {color} from '../../styles/colors';

const CanbanSection = styled.section`
  max-width: 276px;
  padding: 24px 16px;
  background-color: ${color.white};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
`;

const CanbanTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  margin: 0 7px 16px;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: ${color.tableBlack};
`;

const Img = styled.img`
  transform: rotate(90deg);
  cursor: pointer;
`;

export {
  CanbanSection,
  CanbanTitle,
  Img
}