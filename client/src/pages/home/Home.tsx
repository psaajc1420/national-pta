import { Box, Button, Layout, Text } from '../../components';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { HomeCategoryItem } from './components';
import { HOME_CATEGORIES } from './home-categories';

const Home = () => {
	const theme = useTheme();
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
					>
						<HeroImage
							src={
								window.location.origin +
								'/assets/images/Hero Image Option 1.jpeg'
							}
							alt='Dad and his two daughters'
						/>
					</Box>
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
							color={theme.color.black}
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
						<Text typography='subheading' size={36} color={theme.color.blue}>
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
									&bull; Helps families have positive, proactive conversations
									about technology
								</Text>
							</li>
							<li>
								<Text
									typography='text'
									size={24}
									textAlign='center'
									color={theme.color.black}
								>
									&bull; Allows children ages 5-8 to actively participate in
									their family&apos;s agreed upon rules around:
								</Text>
							</li>
						</StyledList>
					</Box>
					<Box
						width='90%'
						height={250}
						display='flex'
						flexDirection='row'
						justify='space-around'
						align='center'
						backgroundColor='inherit'
					>
						{HOME_CATEGORIES.map((e) => (
							<HomeCategoryItem key={e.id} item={e} />
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
							lineHeight='32px'
						>
							These rules aren&apos;t just for children, they are for the adults
							in the family too! <br /> The end result is a personalized family
							technology agreement to help keep everyone on track.
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
								typography='heading'
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
	li: {
		marginBottom: 10,
	},
}));

const HeroImage = styled('img')(() => ({
	width: 350,
	height: 350,
	objectFit: 'cover',
	objectPostion: '100% 0',
	borderRadius: '50%',
}));
