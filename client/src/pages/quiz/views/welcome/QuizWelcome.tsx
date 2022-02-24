import { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Box, Button, Text } from '../../../../components';
import { CATEGORIES, AGE_GROUPS_ARR } from '../../../../constants';
import { CategoryButton } from '../../components';
import { QuizAnswersContext } from '../../Quiz';

const QuizWelcome = () => {
	// @ts-expect-error
	const { quizDispatch } = useContext(QuizAnswersContext);
	const theme = useTheme();
	const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
	const [guestAdult, setGuestAdult] = useState('');
	const [guestChild, setGuestChild] = useState('');

	useEffect(() => {
		if (selectedAgeGroup) {
			quizDispatch({
				type: 'SET_AGE_GROUP',
				payload: {
					ageGroup: selectedAgeGroup,
				},
			});
		}
	}, [selectedAgeGroup]);

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
					<StyledWelcomeInput
						type='text'
						placeholder='Adult Name'
						value={guestAdult}
						onChange={(e) => setGuestAdult(e.target.value)}
					/>
					and
					<StyledWelcomeInput
						type='text'
						placeholder='Child Name'
						value={guestChild}
						onChange={(e) => setGuestChild(e.target.value)}
					/>
					. <br />
					Are you ready to have Smart Talk?
				</Text>
				<Box
					width='auto'
					height='auto'
					backgroundColor='inherit'
					display='block'
					margin='25px 0 0 0'
				>
					<Text typography='subheading' size={16} color={theme.color.black}>
						Choose your child&apos;s age:
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
				{AGE_GROUPS_ARR.map((e) => (
					<CategoryButton
						key={e.id}
						onClick={() => setSelectedAgeGroup(e.ageGroup)}
						selected={selectedAgeGroup === e.ageGroup}
						icon={e.tabIcon}
						ageGroup={e.ageGroup}
					/>
				))}
			</Box>
			<Button
				width={150}
				height={56}
				onClick={() => {
					quizDispatch({
						type: 'SET_CATEGORY_AND_AGE',
						payload: {
							category: CATEGORIES.privacyAndSafety.name,
							ageGroup: selectedAgeGroup,
						},
					});
					quizDispatch({
						type: 'SET_GUEST_NAMES',
						payload: {
							guestAdult,
							guestChild,
						},
					});
				}}
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
	textAlign: 'center',
	fontSize: 20,
}));
