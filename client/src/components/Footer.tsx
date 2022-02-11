import styled from '@emotion/styled';
import { Box, Button, Text } from './index';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const theme = useTheme();

	const scrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};
	return (
		<Box
			width='100%'
			height={56}
			display='flex'
			justify='space-between'
			align='center'
			backgroundColor={theme.color.blue}
			position='absolute'
			right={0}
			bottom={0}
		>
			<Box
				width='auto'
				height='100%'
				display='flex'
				justify='center'
				align='center'
				padding='0 25px'
			>
				<Text typography='heading' color={theme.color.white}>
					NPTA
				</Text>
				<Text typography='heading' color={theme.color.white}>
					Norton
				</Text>
			</Box>
			<Box
				width='auto'
				height='100%'
				display='flex'
				justify='center'
				align='center'
			>
				<Text typography='heading' color={theme.color.white}>
					Share
				</Text>
				<Text typography='heading' color={theme.color.white}>
					Term | Privacy
				</Text>
				<Button
					width={100}
					height='100%'
					border='none'
					backgroundColor={theme.color.lightBlue}
					borderRadius='none'
					onClick={scrollToTop}
				>
					<Text
						typography='heading'
						textAlign='center'
						color={theme.color.white}
					>
						Back to Top
					</Text>
				</Button>
			</Box>
		</Box>
	);
};

export default Footer;

const StyledFooter = styled(Box)(() => ({}));
