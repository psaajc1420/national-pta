import React from 'react';
import { Box, Header } from './index';
import { useTheme } from '@emotion/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
	const theme = useTheme();
	return (
		<Box
			width='100vw'
			height='100vh'
			display='flex'
			justify='flex-start'
			align='center'
			flexDirection='column'
			margin={0}
			backgroundColor={theme.color.white}
		>
			<Header />
			<Box
				width='100%'
				height='100%'
				display='block'
				backgroundColor='inherit'
				margin='60px 0'
			>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
