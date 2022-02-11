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
			width={150}
			height={90}
			center
			flexDirection='column'
			borderRadius={20}
			backgroundColor={theme.color[item.color]}
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
	width: 100,
	position: 'absolute',
	bottom: 50,
}));