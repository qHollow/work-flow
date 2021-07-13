import styled from "styled-components";
import { color } from "../../styles/colors";

const Card = styled.article`
  padding: 21px 11px 15px 24px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  background: linear-gradient(90deg, ${color.green} 5px, ${color.white} 1%);
`;

const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: ${color.darkGray};
`;

const Date = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: ${color.darkBlue};
  opacity: 0.5;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Img = styled.img`
  border-radius: 50%;
  cursor: pointer;
`;

const CanbanButton = styled.button`
  border: none;
  width: 20px;
  height: 20px;
  background-color: ${color.white};
  background-image: url(${props => props.bgimage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
`;

export {
  Card,
  CardTitle,
  Date,
  Wrapper,
  Container,
  List,
  Img,
  CanbanButton
}