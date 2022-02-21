import React from 'react';
import { Box, Header, Footer } from './index';
import { useTheme } from '@emotion/react';

const Layout = ({
	children,
	loggedIn,
	identifier,
}: {
	children: React.ReactNode;
	loggedIn?: boolean;
	identifier?: string;
}) => {
	const theme = useTheme();
	return (
		<Box
			width='100%'
			height='100%'
			display='flex'
			justify='flex-start'
			align='center'
			flexDirection='column'
			margin={0}
			backgroundColor={theme.color.white}
			position='absolute'
			right={0}
			top={0}
		>
			<Header loggedIn={loggedIn} identifier={identifier} />
			<Box
				width='100%'
				height='100%'
				display='block'
				backgroundColor='inherit'
				padding='80px 0 56px 0'
				position='relative'
			>
				{children}
				<Footer />
			</Box>
		</Box>
	);
};

export default Layout;
