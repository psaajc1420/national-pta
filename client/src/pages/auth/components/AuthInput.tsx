import React from 'react';
import styled from '@emotion/styled';

interface AuthInputProps {
	placeholder: string;
	type: string;
}

const AuthInput = ({ placeholder, type }: AuthInputProps) => {
	return <StyledInput placeholder={placeholder} type={type}></StyledInput>;
};

export default AuthInput;

const StyledInput = styled('input')(({ theme }) => ({
	border: 'none',
	height: 56,
	width: '100%',
	borderRadius: 25,
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
}));
