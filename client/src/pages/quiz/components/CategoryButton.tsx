// @ts-nocheck
import React from 'react';
import styled from '@emotion/styled';

interface CategoryButtonProps {
	children: React.ReactNode;
	onClick: any;
	bgColor: string;
	selected?: boolean;
}

const CategoryButton = ({
	children,
	bgColor,
	onClick,
	selected,
}: CategoryButtonProps) => {
	return (
		<StyledButton bgColor={bgColor} onClick={onClick} selected={selected}>
			{children}
		</StyledButton>
	);
};

export default CategoryButton;

const StyledButton = styled('div')<CategoryButtonProps>(
	({ bgColor, theme, selected }) => ({
		width: 100,
		height: 75,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		backgroundColor: `${theme.color[bgColor]}`,
		cursor: 'pointer',
		transition: 'all .1s ease-in-out',
		transform: selected ? 'scale(1.1)' : undefined,
		['&:hover']: {
			transform: 'scale(1.1)',
		},
	}),
);
