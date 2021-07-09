import SvgViewer from '../SvgViewer';
import {
	Wrapper,
	Logo,
	LogoText,
	ListItem,
	Nav,
	NavigationList,
	NavLink,
	NavText,
} from './style';

const Header = () => {
	return (
		<Wrapper>
			<Logo to='/'>
				<img src='/assets/icons/Logo.svg' alt='Logo' width='24' height='24' />
				<LogoText>WorkFlow</LogoText>
			</Logo>
			<Nav>
				<NavigationList>
					<ListItem>
						<NavLink to='/'>
							<SvgViewer icon={'dashboard'} />
							<NavText>Dashboard</NavText>
						</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>
							<SvgViewer icon={'tasks'} />
							<NavText>Tasks</NavText>
						</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>
							<SvgViewer icon={'contacts'} />
							<NavText>Contacts</NavText>
						</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>
							<SvgViewer icon={'chat'} />
							<NavText>Chat</NavText>
						</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>
							<SvgViewer icon={'projects'} />
							<NavText>Projects</NavText>
						</NavLink>
					</ListItem>
					<ListItem>
						<NavLink>
							<SvgViewer icon={'settings'} />
							<NavText>Settings</NavText>
						</NavLink>
					</ListItem>
				</NavigationList>
			</Nav>
		</Wrapper>
	);
};

export default Header;
