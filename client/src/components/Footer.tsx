import { Box, Button, Text, Link } from './index';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery({ query: theme.screen.mobile });

	const scrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};
	return (
		<Box
			width='100%'
			height={isMobile ? 132 : 56}
			display='flex'
			justify='space-between'
			align='center'
			flexDirection={isMobile ? 'column' : 'row'}
			backgroundColor={theme.color.blue}
			position='absolute'
			right={0}
			bottom={0}
			margin='50px 0 0 0'
		>
			<Box
				width='auto'
				height='100%'
				display='flex'
				justify='center'
				align='center'
				flexDirection={isMobile ? 'column' : 'row'}
				padding='0 25px'
			>
				<Box
					width='auto'
					height='100%'
					display='flex'
					justify='center'
					align='center'
					padding='0 8px'
				>
					<Text typography='heading' color={theme.color.white}>
						A collaboration between:
					</Text>
				</Box>
				<Box
					width='auto'
					height='auto'
					display='flex'
					backgroundColor='transperant'
				>
					<Box
						width='auto'
						height='100%'
						display='flex'
						justify='center'
						align='center'
						padding='0 8px'
					>
						<a href='https://pta.org' target='_blank' rel='noreferrer'>
							<img
								width='auto'
								height={35}
								src={window.location.origin + '/assets/logos/NPTA White.png'}
								alt='NPTA logo'
							/>
						</a>
					</Box>
					<Box
						width='auto'
						height='100%'
						display='flex'
						justify='center'
						align='center'
						padding='0 8px'
					>
						<a href='https://norton.com' target='_blank' rel='noreferrer'>
							<img
								width='auto'
								height={35}
								src={
									window.location.origin +
									'/assets/logos/NortonFull-Horizontal-Dark-RGB-Web.png'
								}
								alt='Norton logo'
							/>
						</a>
					</Box>
				</Box>
			</Box>
			<Box
				width={isMobile ? '100%' : 'auto'}
				height='100%'
				display='flex'
				justify={isMobile ? 'space-between' : 'center'}
				align='center'
			>
				<Box
					width='auto'
					height='100%'
					display='flex'
					justify='center'
					align='center'
					margin='0 15px'
				>
					<Text typography='heading' color={theme.color.white}>
						Share
					</Text>
				</Box>
				<Box
					width='auto'
					height='100%'
					display='flex'
					justify='center'
					align='center'
					margin='0 15px'
				>
					<Text typography='heading' color={theme.color.white}>
						<Link to='/terms'>Terms</Link> | <Link to='/privacy'>Privacy</Link>
					</Text>
				</Box>
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
