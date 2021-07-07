import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  min-width: 228px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 31px;
  margin: 24px;
`;

const LogoText = styled.p`
  margin-left: 11px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #109cf1;
`;

const Nav = styled.nav`
  margin-top: 31px;
`;

const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const NavLink = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: translate 0.3s ease-in-out;

  svg {
    margin-left: 24px;
  }

  &:hover,
  &:focus {
    background: linear-gradient(
      90deg,
      rgba(16, 156, 241, 0.15) 0.66%,
      rgba(196, 196, 196, 0) 100%
    );

    border-right: 3px solid #109cf1;

    path,
    rect {
      stroke: #109cf1;
    }
  }
`;

const NavText = styled.p`
  margin-left: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #334d6e;
`;

export {
  Wrapper,
  Logo,
  LogoText,
  ListItem,
  Nav,
  NavigationList,
  NavLink,
  NavText,
}