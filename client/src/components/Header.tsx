import React from 'react';
import styled from '@emotion/styled';
import { Box, LanguageDropdown, Text } from './index';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

const Header = () => {
	const theme = useTheme();
	const menuItems = [
		{
			id: 1,
			pageName: 'About',
			route: '/',
		},
		{
			id: 2,
			pageName: 'Q&A',
			route: '/',
		},
		{
			id: 3,
			pageName: 'Login',
			route: '/login',
		},
	];
	return (
		<Box
			width='100%'
			height={80}
			padding='14px 36px'
			borderBox
			display='flex'
			justify='space-between'
			align='center'
			backgroundColor='inherit'
			position='fixed'
			top={0}
			zIndex={999}
		>
			<HeaderLogo
				src={window.location.origin + '/assets/logos/SmartTalk_Logo.svg'}
				alt='The Smart Talk logo'
			/>

			<Box
				width='40%'
				display='flex'
				flexDirection='row'
				justify='space-around'
				align='center'
				backgroundColor='inherit'
				zIndex={1000}
			>
				<LanguageDropdown />
				{menuItems.map((e) => (
					<NavLink to={e.route} key={e.id}>
						<Box
							width={50}
							height='100%'
							display='block'
							backgroundColor='inherit'
						>
							<Text
								typography='subheading'
								size={16}
								textAlign='center'
								color={theme.color.blue}
							>
								{e.pageName}
							</Text>
						</Box>
					</NavLink>
				))}
			</Box>
		</Box>
	);
};

export default Header;

const NavLink = styled(Link)(() => ({
	textDecoration: 'none',
	// margin: '1rem',
	// position: 'relative',
}));

const HeaderLogo = styled('img')(() => ({
	width: 150,
	height: 90,
}));
