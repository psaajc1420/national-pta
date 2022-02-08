import { useTheme } from '@emotion/react';
import React from 'react';
import { Box, Layout } from '../../components';

const Quiz = () => {
	const theme = useTheme();
	return (
		<Layout>
			<Box width='100%' height='100%' center backgroundColor='inherit'>
				<Box
					width='80%'
					height='80%'
					center
					backgroundColor='#ffffff'
					borderRadius={75}
				>
					{''}
				</Box>
			</Box>
		</Layout>
	);
};

export default Quiz;
