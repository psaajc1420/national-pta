import React from 'react';
import { Box, Header } from './index';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			width='100vw'
			height='100vh'
			display='flex'
			justify='flex-start'
			align='center'
			flexDirection='column'
			margin={0}
		>
			<Header />
			{children}
		</Box>
	);
};

export default Layout;
