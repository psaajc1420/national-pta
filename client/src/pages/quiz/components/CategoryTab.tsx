// @ts-nocheck
import React from 'react';
import styled from '@emotion/styled';

interface CategoryTabProps {
	children: React.ReactNode;
	onClick: any;
	ringColor: string;
	selectedTab?: boolean;
}

const CategoryTab = ({
	children,
	ringColor,
	onClick,
	selectedTab,
}: CategoryTabProps) => {
	return (
		<StyledTab
			ringColor={ringColor}
			onClick={onClick}
			selectedTab={selectedTab}
		>
			{children}
		</StyledTab>
	);
};

export default CategoryTab;

const StyledTab = styled('div')<CategoryTabProps>(
	({ ringColor, theme, selectedTab }) => ({
		width: 75,
		height: 75,
		display: 'block',
		borderRadius: '50%',
		border: `10px solid ${theme.color[ringColor]}`,
		backgroundColor: 'transparent',
		zIndex: 899,
		cursor: 'pointer',
		transition: 'all .1s ease-in-out',
		transform: selectedTab ? 'scale(1.1)' : undefined,
		marginRight: selectedTab ? 50 : undefined,
		['&:hover']: {
			transform: 'scale(1.1)',
		},
	}),
);
