// @ts-nocheck
import { Box, Text } from '../../../components';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

interface HomeCategoryItemProps {
	item: {
		id: string | number;
		label: string;
		name: string;
		color: string;
	};
}

const HomeCategoryItem = ({ item }: HomeCategoryItemProps) => {
	const theme = useTheme();
	return (
		<Box
			width={175}
			height={100}
			center
			flexDirection='column'
			borderRadius={20}
			backgroundColor={theme.color[item.color]}
			margin='75px 0 0 0'
		>
			<CategoryIcon
				src={window.location.origin + item.iconSvg}
				alt={item.label}
			/>
			<Text typography='heading' color={theme.color.white}>
				{item.label}
			</Text>
		</Box>
	);
};

export default HomeCategoryItem;

const CategoryIcon = styled('img')(() => ({
	width: 150,
	height: 'auto',
	position: 'absolute',
	bottom: 50,
}));
