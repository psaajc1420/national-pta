import { Box, Button, Text } from './index';
import { useTheme } from '@emotion/react';

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
					height='100%'
					display='flex'
					justify='center'
					align='center'
					padding='0 8px'
				>
					<img
						width='auto'
						height={40}
						src={window.location.origin + '/assets/logos/NPTA White.png'}
						alt='Norton logo'
					/>
				</Box>
				<Box
					width='auto'
					height='100%'
					display='flex'
					justify='center'
					align='center'
					padding='0 8px'
				>
					<img
						width='auto'
						height={35}
						src={
							window.location.origin +
							'/assets/logos/NortonFull-Horizontal-Dark-RGB-Web.png'
						}
						alt='Norton logo'
					/>
				</Box>
			</Box>
			<Box
				width='auto'
				height='100%'
				display='flex'
				justify='center'
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
						Term | Privacy
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
