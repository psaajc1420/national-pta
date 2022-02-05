import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	onClick: any;
	width: string | number;
	height: string | number;
	backgroundColor?: string;
}

const Button = ({
	children,
	type,
	onClick,
	width,
	height,
	backgroundColor,
}: ButtonProps) => {
	return (
		<StyledButton
			type={type ? type : 'button'}
			onClick={onClick}
			width={width}
			height={height}
			backgroundColor={backgroundColor}
		>
			{children}
		</StyledButton>
	);
};

export default Button;

const StyledButton = styled('button')<ButtonProps>(
	({ theme, width, height, backgroundColor }) => ({
		backgroundColor: backgroundColor ? backgroundColor : theme.color.blue,
		width: width,
		height: height,
		border: 'none',
		borderRadius: 56,
		cursor: 'pointer',
	}),
);
