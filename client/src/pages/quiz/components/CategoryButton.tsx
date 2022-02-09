// @ts-nocheck
import React from 'react';
import styled from '@emotion/styled';

interface CategoryButtonProps {
	children: React.ReactNode;
	onClick: any;
	bgColor: string;
	selectedTab?: boolean;
}

const CategoryButton = ({
	children,
	bgColor,
	onClick,
}: CategoryButtonProps) => {
	return (
		<StyledButton bgColor={bgColor} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default CategoryButton;

const StyledButton = styled('div')<CategoryButtonProps>(
	({ bgColor, theme }) => ({
		width: 100,
		height: 75,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		backgroundColor: `${theme.color[bgColor]}`,
		cursor: 'pointer',
		transition: 'all .1s ease-in-out',
		['&:hover']: {
			transform: 'scale(1.1)',
		},
	}),
);
