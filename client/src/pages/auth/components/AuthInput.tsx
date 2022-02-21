import React from 'react';
import styled from '@emotion/styled';

interface AuthInputProps {
	placeholder: string;
	type: string;
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	width?: string | number;
	height?: string | number;
}

const AuthInput = ({
	placeholder,
	type,
	onChange,
	value,
	height,
	width,
}: AuthInputProps) => {
	return (
		<StyledInput
			placeholder={placeholder}
			type={type}
			onChange={onChange}
			value={value}
			width={width}
			height={height}
		/>
	);
};

export default AuthInput;

const StyledInput = styled('input')<AuthInputProps>(
	({ theme, width, height }) => ({
		border: `3px solid ${theme.color.blue}`,
		backgroundColor: theme.color.lightBlue,
		height: height ? height : 56,
		width: width ? width : '80%',
		borderRadius: 40,
		fontFamily: theme.font.subheading,
		color: theme.color.black,
		textAlign: 'center',

		['::placeholder']: {
			/* Chrome, Firefox, Opera, Safari 10.1+ */ color: theme.color.black,
			opacity: 1 /* Firefox */,
		},
		[':-ms-input-placeholder']: {
			/* Internet Explorer 10-11 */ color: theme.color.black,
		},
		['::-ms-input-placeholder']: {
			/* Microsoft Edge */ color: theme.color.black,
		},
		[':focus']: {
			outline: 'none',
		},
	}),
);

AuthInput.defaultProps = {
	autocomplete: 'off',
};
