import CustomButton from './style';

const Button = ({ model = 'primary', children, ...styles }) => {
	return (
		<CustomButton model={model} {...styles}>
			{children}
		</CustomButton>
	);
};

export default Button;
