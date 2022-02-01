import { Box, Button, Layout, Text } from '../../components';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const Home = () => {
	const theme = useTheme();
	const homeCategories = [
		{
			id: 1,
			category: 'Device Use',
			iconName: 'device-use',
		},
		{
			id: 2,
			category: 'Digital Safety',
			iconName: 'digital-safety',
		},
		{
			id: 3,
			category: 'Privacy',
			iconName: 'privacy',
		},
		{
			id: 4,
			category: 'Communication',
			iconName: 'communication',
		},
		{
			id: 5,
			category: 'Media Choices',
			iconName: 'media-choices',
		},
	];
	return (
		<Layout>
			<Box
				height='auto'
				display='flex'
				justify='flex-start'
				align='center'
				flexDirection='column'
				backgroundColor='inherit'
			>
				<Box
					width='100%'
					height={500}
					center
					flexDirection='row'
					backgroundColor='inherit'
				>
					<Box
						width={350}
						height={350}
						display='block'
						margin='0 15px 0 0'
						borderRadius='50%'
					></Box>
					<Box
						width='auto'
						height='auto'
						center
						flexDirection='column'
						backgroundColor='inherit'
					>
						<Text
							typography='heading'
							size={42}
							color={theme.color.blue}
							textAlign='center'
						>
							Welcome to the <br /> Smart Talk
						</Text>
						<Box
							width='auto'
							height='auto'
							display='block'
							margin='15px 0 0 0'
							backgroundColor='inherit'
						>
							<Button width={250} height={48} onClick={() => {}}>
								<Text
									typography='heading'
									color={theme.color.white}
									textAlign='center'
								>
									Quick Guide
								</Text>
							</Button>
						</Box>
					</Box>
				</Box>
				<Box
					width='100%'
					height='auto'
					center
					flexDirection='column'
					backgroundColor='inherit'
				>
					<Box
						width='auto'
						height='auto'
						display='block'
						backgroundColor='inherit'
						margin='0 0 25px 0'
					>
						<Text typography='subheading' size={36} color={theme.color.green}>
							What is the Smart Talk?
						</Text>
					</Box>
					<Text typography='text' size={24} color={theme.color.black}>
						The Smart Talk is a Tool that:
					</Text>
					<Box
						width='auto'
						height='auto'
						display='block'
						backgroundColor='inherit'
						margin='15px 0'
					>
						<StyledList>
							<li>
								<Text
									typography='text'
									size={24}
									textAlign='center'
									color={theme.color.black}
								>
									Helps families have positive, proactive conversations about
									technology
								</Text>
							</li>
							<li>
								<Text
									typography='text'
									size={24}
									textAlign='center'
									color={theme.color.black}
								>
									Allows children ages 5-8 to actively participate in their
									family&apos;s agreed upon rules around:
								</Text>
							</li>
						</StyledList>
					</Box>
					<Box
						width='100%'
						height={250}
						display='flex'
						flexDirection='row'
						justify='space-around'
						align='center'
						backgroundColor='inherit'
					>
						{homeCategories.map((e) => (
							<Box key={e.id} width={150} height={85} center borderRadius={10}>
								<Text typography='text' color={theme.color.white}>
									{e.category}
								</Text>
							</Box>
						))}
					</Box>
					<Box
						width='auto'
						height='auto'
						display='block'
						backgroundColor='inherit'
						margin='15px 0'
					>
						<Text
							typography='text'
							size={24}
							textAlign='center'
							color={theme.color.black}
						>
							These rules aren&apos;t just for children, they are for the adults
							in the family too! <br /> The end result is a personalized family
							technology agreement to help keep everyone on <br /> track.
						</Text>
					</Box>
					<Box
						width='auto'
						height='auto'
						display='block'
						backgroundColor='inherit'
						margin='15px 0 50px 0'
					>
						<Button width={250} height={48} onClick={() => {}}>
							<Text
								typography='text'
								textAlign='center'
								color={theme.color.white}
							>
								Get Started
							</Text>
						</Button>
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default Home;

const StyledList = styled('ul')(() => ({
	listStyleType: 'none',
	color: 'inherit',
}));
