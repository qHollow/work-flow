import styled, { css } from 'styled-components';
import { color } from '../../styles/colors';

const CustomButton = styled.button`
	position: relative;
	width: ${(props) => props.w}px;
	height: ${(props) => props.h}px;
	display: flex;
	align-items: ${(props) => props.align || 'center'};
	justify-content: ${(props) => props.justify || 'center'};
	border: none;
	border-radius: ${(props) => props.bradius || '20px'};

	font-weight: 600;
	font-size: 13px;
	line-height: 19px;
	text-align: center;
	letter-spacing: 0.01em;

	transition: filter 0.2s ease-in-out;
	cursor: pointer;

	${(props) =>
		props.model === 'primary' &&
		css`
			box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
			background-color: ${(props) => props.bgcolor || color.accentBlue};
			color: ${(props) => props.textColor || color.white};

			&:disabled {
				background-color: ${color.iconGray};
				opacity: 0.4;
			}
		`};

	${(props) =>
		props.model === 'secondary' &&
		css`
			background-color: ${(props) => props.bgcolor || color.white};
			color: ${(props) => props.textColor || color.accentBlue};
			border: 1px solid ${(props) => props.textColor || color.accentBlue};
			&:disabled {
				opacity: 0.4;
				background-color: ${color.iconGray};
			}
		`};

	${(props) =>
		props.model === 'tertiary' &&
		css`
			background-color: ${color.white};
			color: ${(props) => props.textColor || color.accentBlue};
			&:disabled {
				opacity: 0.4;
			}
		`};

	&:focus,
	&:hover {
		filter: brightness(105%);
	}

	&:active {
		filter: brightness(95%);
	}
`;

export default CustomButton;
