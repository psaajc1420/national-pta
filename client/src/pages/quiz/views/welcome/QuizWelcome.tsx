import { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Box, Button, Text } from '../../../../components';
import { CATEGORIES } from '../../../../constants/category-constants';
import { CategoryButton } from '../../components';
import { QuizAnswersContext } from '../../Quiz';

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

const QuizWelcome = () => {
	// @ts-expect-error
	const { quizDispatch } = useContext(QuizAnswersContext);
	const theme = useTheme();
	const [selectedAgeGroup, setSelectedAgeGroup] = useState('');

	return (
		<Box
			width='100%'
			height='75%'
			display='flex'
			justify='space-around'
			align='center'
			flexDirection='column'
			backgroundColor='transparent'
		>
			<Box
				width='100%'
				height={75}
				center
				flexDirection='column'
				backgroundColor='inherit'
			>
				<Text
					typography='subheading'
					size={24}
					color={theme.color.black}
					textAlign='center'
				>
					Welcome,
					<StyledWelcomeInput type='text' />
					and
					<StyledWelcomeInput type='text' />. <br />
					Are you ready to have Smart Talk?
				</Text>
				<Box
					width='auto'
					height='auto'
					backgroundColor='inherit'
					display='block'
					margin='25px 0 0 0'
				>
					<Text typography='subheading' size={14} color={theme.color.black}>
						Choose a category on the LEFT, and choose an age-range BELOW:
					</Text>
				</Box>
			</Box>
			<Box
				width='75%'
				height={75}
				display='flex'
				flexDirection='row'
				justify='space-around'
				align='center'
				backgroundColor='inherit'
			>
				{AGE_GROUPS.map((e) => (
					<CategoryButton
						key={e.id}
						bgColor={e.color}
						onClick={() => setSelectedAgeGroup(e.ageGroup)}
						selected={selectedAgeGroup === e.ageGroup}
					>
						<Text typography='heading' color={theme.color.white}>
							{e.ageGroup}
						</Text>
					</CategoryButton>
				))}
			</Box>
			<Button
				width={150}
				height={56}
				onClick={() =>
					quizDispatch({
						type: 'SET_CATEGORY_AND_AGE',
						payload: {
							category: CATEGORIES.privacyAndSafety.name,
							ageGroup: selectedAgeGroup,
						},
					})
				}
				disabled={selectedAgeGroup === ''}
				backgroundColor={theme.color.blue}
			>
				<Text typography='heading' textAlign='center'>
					Let&apos;s Get Started
				</Text>
			</Button>
		</Box>
	);
};

export default QuizWelcome;

const StyledWelcomeInput = styled('input')(() => ({
	border: 'none',
	borderBottom: '1px solid black',
}));
