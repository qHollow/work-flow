import Button from '../Button';
import Notification from '../Notification';

import {
	SideBar,
	Search,
	List,
	ListItem,
	Profile,
	Img,
	ProfileText,
} from './style';

const Aside = () => {
	return (
		<SideBar>
			<Search placeholder='Search' />
			<List>
				<ListItem>
					<Button
						w={32}
						h={32}
						align={'center'}
						justify={'center'}
						model={'primary'}
					>
						<img
							src='/assets/icons/plus.svg'
							alt='Add'
							width='16'
							height='16'
						/>
					</Button>
				</ListItem>
				<ListItem>
					<Notification count={100} />
				</ListItem>
				<ListItem>
					<Profile>
						<Img
							src='/assets/img/avatar.png'
							alt='Avatar'
							width='32'
							height='32'
						/>
						<ProfileText>Sam Smith</ProfileText>
					</Profile>
				</ListItem>
			</List>
		</SideBar>
	);
};

export default Aside;
