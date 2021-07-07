import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
  min-width: 228px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
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
  transition: translate .3s ease-in-out;

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

const Header = () => {
  return (
    <Wrapper>
      <Logo to="/">
        <img src="/assets/icons/Logo.svg" alt="Logo" width="24" height="24" />
        <LogoText>WorkFlow</LogoText>
      </Logo>
      <Nav>
        <NavigationList>
          <ListItem>
            <NavLink to="/">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.16667 8.13333H1.5C1.33431 8.13333 1.2 7.99902 1.2 7.83333V1.5C1.2 1.33431 1.33431 1.2 1.5 1.2H6.16667C6.33235 1.2 6.46667 1.33431 6.46667 1.5V7.83333C6.46667 7.99902 6.33235 8.13333 6.16667 8.13333ZM6.16667 14.8H1.5C1.33431 14.8 1.2 14.6657 1.2 14.5V11.5C1.2 11.3343 1.33431 11.2 1.5 11.2H6.16667C6.33235 11.2 6.46667 11.3343 6.46667 11.5V14.5C6.46667 14.6657 6.33235 14.8 6.16667 14.8ZM14.5 14.8H9.83333C9.66765 14.8 9.53333 14.6657 9.53333 14.5V8.16667C9.53333 8.00098 9.66765 7.86667 9.83333 7.86667H14.5C14.6657 7.86667 14.8 8.00098 14.8 8.16667V14.5C14.8 14.6657 14.6657 14.8 14.5 14.8ZM9.53333 4.5V1.5C9.53333 1.33431 9.66765 1.2 9.83333 1.2H14.5C14.6657 1.2 14.8 1.33431 14.8 1.5V4.5C14.8 4.66569 14.6657 4.8 14.5 4.8H9.83333C9.66765 4.8 9.53333 4.66569 9.53333 4.5Z"
                  stroke="#C2CFE0"
                  strokeWidth="1.4"
                />
              </svg>
              <NavText>Dashboard</NavText>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              <svg
                width="20"
                height="20"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.49935 1.2H15.666C15.7377 1.2 15.7993 1.2616 15.7993 1.33333V6.33333C15.7993 6.40507 15.7377 6.46667 15.666 6.46667H1.49935C1.42762 6.46667 1.36602 6.40507 1.36602 6.33333V1.33333C1.36602 1.2616 1.42761 1.2 1.49935 1.2ZM1.49935 9.53333H15.666C15.7377 9.53333 15.7993 9.59493 15.7993 9.66667V14.6667C15.7993 14.7384 15.7377 14.8 15.666 14.8H1.49935C1.42762 14.8 1.36602 14.7384 1.36602 14.6667V9.66667C1.36602 9.59493 1.42761 9.53333 1.49935 9.53333Z"
                  stroke="#C2CFE0"
                  strokeWidth="1.4"
                />
              </svg>
              <NavText>Tasks</NavText>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.81154 4.11106C4.81154 2.34904 6.23842 0.922168 8.00043 0.922168C9.76244 0.922168 11.1893 2.34904 11.1893 4.11106C11.1893 5.87307 9.76244 7.29995 8.00043 7.29995C6.23842 7.29995 4.81154 5.87307 4.81154 4.11106ZM0.922656 12.8611C0.922656 12.4716 1.11218 12.0787 1.54765 11.6768C1.98788 11.2705 2.63116 10.904 3.39842 10.5966C4.93407 9.98144 6.79002 9.67217 8.00043 9.67217C9.21084 9.67217 11.0668 9.98144 12.6024 10.5966C13.3697 10.904 14.013 11.2705 14.4532 11.6768C14.8887 12.0787 15.0782 12.4716 15.0782 12.8611V15.0777H0.922656V12.8611Z"
                  stroke="#C2CFE0"
                  strokeWidth="1.4"
                />
              </svg>
              <NavText>Contacts</NavText>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99935 13.2998H3.7094L3.50437 13.5049L1.36602 15.6432V2.33317C1.36602 1.8031 1.80262 1.3665 2.33268 1.3665H15.666C16.1961 1.3665 16.6327 1.8031 16.6327 2.33317V12.3332C16.6327 12.8632 16.1961 13.2998 15.666 13.2998H3.99935Z"
                  stroke="#C2CFE0"
                  strokeWidth="1.4"
                />
              </svg>
              <NavText>Chat</NavText>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.49935 4.0335H17.4993C17.5711 4.0335 17.6327 4.0951 17.6327 4.16683V15.8335C17.6327 15.9052 17.5711 15.9668 17.4993 15.9668H2.49935C2.42761 15.9668 2.36602 15.9052 2.36602 15.8335V4.16683C2.36602 4.0951 2.42761 4.0335 2.49935 4.0335Z"
                  stroke="#C2CFE0"
                  strokeWidth="1.4"
                />
                <rect
                  x="6.5"
                  y="3.3335"
                  width="1.16667"
                  height="13.3333"
                  fill="#C2CFE0"
                />
                <rect
                  x="12.334"
                  y="3.3335"
                  width="1.16667"
                  height="13.3333"
                  fill="#C2CFE0"
                />
              </svg>
              <NavText>Projects</NavText>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00065 0.333496C1.08398 0.333496 0.333984 1.0835 0.333984 2.00016C0.333984 2.91683 1.08398 3.66683 2.00065 3.66683C2.91732 3.66683 3.66732 2.91683 3.66732 2.00016C3.66732 1.0835 2.91732 0.333496 2.00065 0.333496ZM12.0007 0.333496C11.084 0.333496 10.334 1.0835 10.334 2.00016C10.334 2.91683 11.084 3.66683 12.0007 3.66683C12.9173 3.66683 13.6673 2.91683 13.6673 2.00016C13.6673 1.0835 12.9173 0.333496 12.0007 0.333496ZM7.00065 0.333496C6.08398 0.333496 5.33398 1.0835 5.33398 2.00016C5.33398 2.91683 6.08398 3.66683 7.00065 3.66683C7.91732 3.66683 8.66732 2.91683 8.66732 2.00016C8.66732 1.0835 7.91732 0.333496 7.00065 0.333496Z"
                  fill="#C2CFE0"
                />
              </svg>
              <NavText>Settings</NavText>
            </NavLink>
          </ListItem>
        </NavigationList>
      </Nav>
    </Wrapper>
  );
};

export default Header;
