import styled from "styled-components";
import { color } from "../../styles/colors";

const BarBody = styled.div`
  width: 177px;
  height: 104px;
  display: flex;
  justify-content: space-evenly;
  border-radius: 30px;
  background-color: ${color.white};
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${color.accentBlue};
  }
`;

const Wrapper = styled.div`
  flex-direction: column;
`;

const BarName = styled.h5`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: ${color.tableBlack};
`;

const BarTitle = styled.p`
  margin-top: 27px;
  margin-bottom: 5px;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #707683;
`;

const Bar = styled.svg`
  position: relative;
  align-self: center;
  justify-self: center;
`;

const CircleBack = styled.circle`
  stroke-width: 2px;
  stroke: ${color.iconGray};
`;

const CircleBar = styled.circle`
  stroke-width: 7px;
  stroke: ${color.purple};
  transform: rotate(-90deg);
  transform-origin: center;
`;

const CircleText = styled.text`
  text-anchor: middle; 
  fill: ${color.tableBlack};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.02em;
`;

export { BarBody, BarTitle, BarName, Wrapper, Bar, CircleBack, CircleBar, CircleText};
