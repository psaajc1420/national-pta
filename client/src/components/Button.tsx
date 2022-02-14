import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	onClick: any;
	width: string | number;
	height: string | number;
	backgroundColor?: string;
	border?: string;
	disabled?: boolean;
	borderRadius?: string;
}

const Button = ({
	children,
	type,
	onClick,
	width,
	height,
	backgroundColor,
	disabled,
	border,
	borderRadius,
}: ButtonProps) => {
	return (
		<StyledButton
			type={type ? type : 'button'}
			onClick={onClick}
			width={width}
			height={height}
			backgroundColor={backgroundColor}
			border={border}
			borderRadius={borderRadius}
			disabled={disabled}
		>
			{children}
		</StyledButton>
	);
};

export default Button;

const StyledButton = styled('button')<ButtonProps>(
	({
		theme,
		width,
		height,
		backgroundColor,
		border,
		borderRadius,
		disabled,
	}) => ({
		backgroundColor: disabled
			? theme.color.red
			: backgroundColor
			? backgroundColor
			: 'transparent',
		color: backgroundColor ? theme.color.white : theme.color.black,
		width: width,
		height: height,
		borderRadius: borderRadius ? borderRadius : 56,
		border: disabled
			? theme.color.red
			: border
			? border
			: `3px solid ${theme.color.blue}`,
		cursor: 'pointer',
		['&:hover']: {
			backgroundColor: disabled
				? theme.color.red
				: backgroundColor
				? 'transparent'
				: theme.color.blue,
			color: disabled
				? theme.color.white
				: backgroundColor
				? theme.color.black
				: theme.color.white,
		},
	}),
);
