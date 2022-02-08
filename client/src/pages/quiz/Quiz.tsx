import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Layout, Text } from '../../components';
import { CategoryTab } from './components';
const Quiz = () => {
	const theme = useTheme();
	const [currentCategory, setCurrentCategory] = useState('');
	const [currentAgeGroup, setCurrentAgeGroup] = useState('');

	// TODO: Add useEffect matching currentCategory and currentAgeGroup to child

	const QUIZ_CATEGORIES = [
		{
			id: 1,
			category: 'Device Use',
			iconName: 'device-use',
			iconSvg: '/assets/illustrations/NPTA_Education Icon-11_Device Use.svg',
			color: 'red',
		},
		{
			id: 2,
			category: 'Digital Safety',
			iconName: 'digital-safety',
			iconSvg: '/assets/illustrations/NPTA_Education Icon-18_Communication.svg',
			color: 'orange',
		},
		{
			id: 3,
			category: 'Privacy',
			iconName: 'privacy',
			iconSvg: '/assets/illustrations/NPTA_Education Icon-45_Media Choices.svg',
			color: 'green',
		},
		{
			id: 4,
			category: 'Communication',
			iconName: 'communication',
			iconSvg: '/assets/illustrations/NPTA_Education Icon-51_Privacy.svg',
			color: 'lightBlue',
		},
		{
			id: 5,
			category: 'Media Choices',
			iconName: 'media-choices',
			iconSvg: '/assets/illustrations/NPTA_Education Icon-56_Security.svg',
			color: 'blue',
		},
	];

	const AGE_GROUPS = [
		{
			id: 1,
			ageGroup: '5-8',
			color: 'red',
		},
		{
			id: 2,
			ageGroup: '9-11',
			color: 'orange',
		},
		{
			id: 3,
			ageGroup: '12-14',
			color: 'green',
		},
		{
			id: 4,
			ageGroup: '15-18',
			color: 'lightBlue',
		},
	];

	return (
		<Layout>
			<Box width='100%' height='100%' center backgroundColor='inherit'>
				<Box
					width='80%'
					height='80%'
					center
					backgroundColor='#ffffff'
					borderRadius={75}
				>
					<Box
						width={75}
						height='100%'
						display='flex'
						flexDirection='column'
						justify='space-around'
						align='center'
						position='absolute'
						left={-35}
						top={0}
						right={0}
						bottom={0}
						backgroundColor='transparent'
					>
						{QUIZ_CATEGORIES.map((e) => (
							<CategoryTab key={e.id} ringColor={e.color} onClick={() => {}}>
								<img
									src={window.location.origin + e.iconSvg}
									alt={e.iconName}
								/>
							</CategoryTab>
						))}
					</Box>
					{''}

					<Box
						width='50%'
						height={75}
						display='flex'
						flexDirection='row'
						justify='space-around'
						align='center'
						position='absolute'
						bottom={-35}
						right={100}
						backgroundColor='transparent'
					>
						{AGE_GROUPS.map((e) => (
							<CategoryTab key={e.id} ringColor={e.color} onClick={() => {}}>
								<Text typography='heading' color={theme.color.black}>
									{e.ageGroup}
								</Text>
							</CategoryTab>
						))}
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default Quiz;
