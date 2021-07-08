
import styled from "styled-components";
import { color } from "../../styles/colors";

const Card = styled.section`
  padding: 16px;
  width: 737px;
  background-color: ${color.white};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${color.accentBlue};
    ul {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: ${color.tableBlack};
`;

const Type = styled.span`
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  letter-spacing: 0.02em;
  color: ${color.gray};
`;

const DateContainer = styled.p`
  margin-top: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.01em;
  color: ${color.darkGray};

  span {
    margin-right: 5px;
    opacity: 0.5;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Name = styled.span`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02em;
  margin-left: 10px;
  color: ${color.tableGray};
`;

const EditList = styled.ul`
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  margin-right: 23px;

  li {
    &:nth-child(1) {
      margin-right: 8px;
    }

    &:nth-child(2) {
      margin-right: 14px;
    }

    &:nth-child(3) {
      margin-right: 10px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export {
  Card,
  Title,
  Type,
  DateContainer,
  Footer,
  Avatar,
  Name,
  EditList,
  Wrapper
}