import React from 'react';
import { Box, Button, Text } from './index';

const Header = () => {
	return (
		<Box
			width='100%'
			height={56}
			display='flex'
			justify='space-between'
			align='center'
			backgroundColor='red'
		>
			<Box width={250} height='100%'>
				<Text typography='heading' color='white'>
					The Smart Talk
				</Text>
			</Box>
			<Box width={250} height='100%'>
				<Button onClick={() => {}} width={100} height={56}>
					<Text typography='subheading' color='white'>
						Menu
					</Text>
				</Button>
			</Box>
		</Box>
	);
};

export default Header;
