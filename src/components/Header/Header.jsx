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
  margin: 31px 0 0 24px;
`;

const NavigationList = styled.ul`
	margin-top: 31px;
	list-style-type: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const NavText = styled.p`
  margin-left: 14px;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.02em;
	color: #334D6E;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo to='/'>
        <img src="/assets/icons/Logo.svg" alt="Logo" width="24" height="24" />
        <LogoText>WorkFlow</LogoText>
      </Logo>
      <Nav>
        <NavigationList>
          <li>
            <NavLink to='/'>
              <img
                src="/assets/icons/dashboard.svg"
                alt="Dashboard"
                width="20"
                height="20"
              />
              <NavText>Dashboard</NavText>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img
                src="/assets/icons/tasks.svg"
                alt="Tasks"
                width="20"
                height="20"
              />
              <NavText>Tasks</NavText>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img
                src="/assets/icons/contacts.svg"
                alt="Contacts"
                width="20"
                height="20"
              />
              <NavText>Contacts</NavText>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img
                src="/assets/icons/chat.svg"
                alt="Chat"
                width="20"
                height="20"
              />
              <NavText>Chat</NavText>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img
                src="/assets/icons/deals.svg"
                alt="Projects"
                width="20"
                height="20"
              />
              <NavText>Projects</NavText>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img
                src="/assets/icons/settings.svg"
                alt="Settings"
                width="20"
                height="20"
              />
              <NavText>Settings</NavText>
            </NavLink>
          </li>
        </NavigationList>
      </Nav>
    </Wrapper>
  );
};

export default Header;
