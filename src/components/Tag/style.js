import styled from "styled-components";
import {color} from '../../styles/colors';

const TagContainer = styled.div`
  width: fit-content;
  padding: 5px 8px 4px;
  border: 1px solid ${color.iconGray};
  border-radius: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: ${color.tableGray};
`;


export {
  TagContainer
}