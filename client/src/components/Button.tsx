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
}: ButtonProps) => {
	return (
		<StyledButton
			type={type ? type : 'button'}
			onClick={onClick}
			width={width}
			height={height}
			backgroundColor={backgroundColor}
			border={border}
			disabled={disabled}
		>
			{children}
		</StyledButton>
	);
};

export default Button;

const StyledButton = styled('button')<ButtonProps>(
	({ theme, width, height, backgroundColor, border, disabled }) => ({
		backgroundColor: disabled
			? theme.color.red
			: backgroundColor
			? backgroundColor
			: theme.color.blue,
		width: width,
		height: height,
		borderRadius: 56,
		border: border ? border : 'none',
		cursor: 'pointer',
	}),
);
