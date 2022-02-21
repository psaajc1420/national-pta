import { Box, Button, Layout, Link, Text } from '../../components';
import { CATEGORIES_ARR } from '../../constants/category-constants';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { HomeCategoryItem } from './components';

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
					margin='0 0 100px 0'
				>
					<Box
						width={350}
						height={350}
						display='block'
						margin='0 15px 0 0'
						borderRadius='50%'
						position='relative'
						backgroundColor='transperant'
					>
						<HeroImage
							src={
								window.location.origin +
								'/assets/images/pexels-photo-7983164.jpeg'
							}
							alt='Two fathers and their daughter'
						/>
						<HeroImage2
							src={
								window.location.origin +
								'/assets/images/pexels-photo-8185911.jpeg'
							}
							alt='Man with his grandson'
						/>
						<HeroImageCircles
							src={
								window.location.origin +
								'/assets/illustrations/Homepage Circles.svg'
							}
							alt='Man with his grandson'
						/>
					</Box>
					<Box
						width='auto'
						height='auto'
						center
						flexDirection='column'
						backgroundColor='inherit'
						margin='150px 0 0 50px'
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
							height={115}
							display='flex'
							flexDirection='column'
							justify='space-between'
							align='center'
							margin='25px 0 0 0'
							backgroundColor='inherit'
						>
							<Button width={250} height={48} onClick={() => {}}>
								<Text typography='heading' textAlign='center'>
									Quick Guide
								</Text>
							</Button>
							<Link to='/register'>
								<Button
									width={250}
									height={48}
									onClick={() => {}}
									backgroundColor={theme.color.blue}
								>
									<Text typography='heading' textAlign='center'>
										Get Started
									</Text>
								</Button>
							</Link>
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
						maxWidth={1200}
						height={250}
						display='flex'
						flexDirection='row'
						justify='space-around'
						align='center'
						backgroundColor='inherit'
					>
						{CATEGORIES_ARR.map((e) => (
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
							The end result is a personalized family technology agreement to
							help keep everyone on track.
						</Text>
					</Box>
					<Box
						width='auto'
						height='auto'
						display='block'
						backgroundColor='inherit'
						margin='15px 0 50px 0'
					>
						<Link to='/register'>
							<Button
								width={250}
								height={48}
								onClick={() => {}}
								backgroundColor={theme.color.blue}
							>
								<Text typography='heading' textAlign='center'>
									Get Started
								</Text>
							</Button>
						</Link>
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
	position: 'absolute',
	width: 350,
	height: 350,
	objectFit: 'cover',
	objectPostion: '100% 0',
	borderRadius: '50%',
	zIndex: 98,
}));

const HeroImage2 = styled('img')(() => ({
	position: 'absolute',
	top: 250,
	right: 200,
	width: 250,
	height: 250,
	objectFit: 'cover',
	objectPostion: '100% 0',
	borderRadius: '50%',
	zIndex: 99,
}));

const HeroImageCircles = styled('img')(() => ({
	position: 'absolute',
	top: 50,
	right: -75,
	width: 600,
	height: 'auto',
	objectFit: 'cover',
	objectPostion: '100% 0',
	borderRadius: '50%',
	zIndex: 0,
}));
