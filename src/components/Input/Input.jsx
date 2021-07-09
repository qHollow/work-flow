import { CustomInput, Label, Title } from './style';

const Input = ({ name = 'Name', type = 'text' }) => {
	return (
		<Label>
			<CustomInput type={type} placeholder=' ' />
			<Title>{name}</Title>
		</Label>
	);
};

export default Input;
