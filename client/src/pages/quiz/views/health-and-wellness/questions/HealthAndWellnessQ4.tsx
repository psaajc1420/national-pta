import { useContext, useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup, YesNo } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';
import { QuizAnswersContext } from '../../../Quiz';

const GET_QUESTION = gql`
	query {
		first: question(id: 52) {
			id
			text
		}
		second: question(id: 53) {
			id
			text
		}
		third: question(id: 54) {
			id
			text
		}
	}
`;

const HealthAndWellnessQ4 = ({
	onHandleNextQuestion,
	onHandlePreviousQuestion,
}: {
	onHandleNextQuestion: () => void;
	onHandlePreviousQuestion: () => void;
}) => {
	// @ts-expect-error
	const { quizState, quizDispatch } = useContext(QuizAnswersContext);
	const { getQuestion } = useGetQuestion();
	const questionData = getQuestion(GET_QUESTION);
	const theme = useTheme();
	// const [answers, setAnswers] = useState<string[]>(quizState.answers[23] || []);

	if (questionData.loading)
		return (
			<Box width='100%' height='100%' center backgroundColor='transperant'>
				<BallTriangle color={theme.color.blue} height={150} width={150} />;
			</Box>
		);

	const ANSWER_OPTIONS_A = [
		{
			name: 'mealtime',
			label: 'During meals',
		},
		{
			name: 'before-sleep',
			label: 'Before going to sleep',
		},
		{
			name: 'morning',
			label: 'First thing in the morning',
		},
		{
			name: 'during-car-rides',
			label: 'During car rides',
		},
	];

	const ANSWER_OPTIONS_B = [
		{
			name: 'meal-location',
			label: 'Where we eat',
		},
		{
			name: 'bedroom',
			label: 'Beds/Bedrooms',
		},
		{
			name: 'bathroom',
			label: 'Bathroom',
		},
		{
			name: 'outdoors',
			label: 'Yard/Outdoor Area',
		},
	];

	// const handleOnChange = (name: string) => {
	// 	const answerIndex = answers.findIndex((e) => e === name);
	// 	if (answerIndex !== -1) {
	// 		setAnswers(answers.filter((e) => e !== name));
	// 	} else {
	// 		setAnswers((state) => [...state, name]);
	// 	}
	// };

	// const handleChecked = (name: string) => {
	// 	if (quizState.answers[23]) {
	// 		return quizState.answers[23].includes(name);
	// 	} else {
	// 		return false;
	// 	}
	// };
	return (
		<>
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='inherit'
				margin='15px 0'
			>
				<YesNo questions={[questionData.data.first]} />
			</Box>
			<Box
				width='100%'
				height='auto'
				display='flex'
				justify='space-around'
				align='center'
				backgroundColor='transperant'
				margin='15px 0 0 0'
			>
				<Box
					width={250}
					height='auto'
					display='flex'
					flexDirection='column'
					justify='space-between'
					align='center'
					backgroundColor='transperant'
				>
					<Text typography='text' size={18}>
						{questionData.data.second.text}
					</Text>
					<Box
						width={250}
						height='auto'
						center
						flexDirection='column'
						backgroundColor='transperant'
						margin='25px 0'
					>
						{ANSWER_OPTIONS_A.map((e) => (
							<Box
								key={e.name}
								width={300}
								height='auto'
								display='flex'
								align='center'
								backgroundColor='transperant'
								margin='2px 0'
							>
								<StyledCheckbox
									type='checkbox'
									id={e.name}
									name={e.name}
									// onChange={() => handleOnChange(e.name)}
									// checked={handleChecked(e.name)}
								/>
								<label htmlFor={e.name}>
									<Text typography='text' textAlign='left' size={14}>
										{e.label}
									</Text>
								</label>
							</Box>
						))}
					</Box>
				</Box>
				<Box
					width={250}
					height='auto'
					display='flex'
					flexDirection='column'
					justify='space-between'
					align='center'
					backgroundColor='transperant'
				>
					<Text typography='text' size={18}>
						{questionData.data.third.text}
					</Text>
					<Box
						width={250}
						height='auto'
						center
						flexDirection='column'
						backgroundColor='transperant'
						margin='25px 0'
					>
						{ANSWER_OPTIONS_B.map((e) => (
							<Box
								key={e.name}
								width={300}
								height='auto'
								display='flex'
								align='center'
								backgroundColor='transperant'
								margin='2px 0'
							>
								<StyledCheckbox
									type='checkbox'
									id={e.name}
									name={e.name}
									// onChange={() => handleOnChange(e.name)}
									// checked={handleChecked(e.name)}
								/>
								<label htmlFor={e.name}>
									<Text typography='text' textAlign='left' size={14}>
										{e.label}
									</Text>
								</label>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
			<Box
				width='100%'
				height={150}
				display='flex'
				flexDirection='column'
				align='center'
				backgroundColor='transperant'
				margin='0 0 25px 0'
			>
				<QuestionButtonsGroup
					onContinue={onHandleNextQuestion}
					onPrevious={onHandlePreviousQuestion}
					onSave={() => {}}
				/>
			</Box>
		</>
	);
};

export default HealthAndWellnessQ4;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
