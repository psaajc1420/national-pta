import { useContext, useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup, YesNo } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';
import { QuizAnswersContext } from '../../../Quiz';
import { AuthContext } from '../../../../../App';

const GET_QUESTION = gql`
	query {
		slide(id: 22) {
			slide_number
			header
			questions {
				id
				text
			}
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
	// @ts-expect-error
	const { authState } = useContext(AuthContext);
	const theme = useTheme();
	const { getQuestion } = useGetQuestion();
	const questionData = getQuestion(GET_QUESTION);
	const questionId = questionData?.data?.slide?.questions?.[0]?.id;

	const [answers, setAnswers] = useState<string[]>(
		quizState.answers[questionId] || [],
	);
	console.log({ questionData });

	useEffect(() => {
		if (questionId) {
			quizDispatch({
				type: 'SET_ANSWER',
				payload: { id: questionId, value: answers },
			});
		}
	}, [questionId, answers]);
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

	const handleOnChange = (label: string) => {
		const answerIndex = answers.findIndex((e) => e === label);
		if (answerIndex !== -1) {
			setAnswers(answers.filter((e) => e !== label));
		} else {
			setAnswers((state) => [...state, label]);
		}
	};

	const handleChecked = (label: string) => {
		if (quizState.answers[questionId]) {
			return quizState.answers[questionId].includes(label);
		} else {
			return false;
		}
	};
	return (
		<>
			<Box
				width='100%'
				height={75}
				display='block'
				backgroundColor='inherit'
				margin='15px 0'
			>
				<YesNo questions={[questionData?.data?.slide?.questions[0]]} />
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
						{questionData?.data?.slide?.questions[1]?.text}
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
									onChange={() => handleOnChange(e.label)}
									checked={handleChecked(e.label)}
								/>
								<label htmlFor={e.label}>
									<Text typography='text' textAlign='left' size={18}>
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
						{questionData?.data?.slide?.questions[2]?.text}
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
									onChange={() => handleOnChange(e.label)}
									checked={handleChecked(e.label)}
								/>
								<label htmlFor={e.label}>
									<Text typography='text' textAlign='left' size={18}>
										{e.label}
									</Text>
								</label>
							</Box>
						))}
					</Box>
				</Box>
			</Box>

			<QuestionButtonsGroup
				onContinue={onHandleNextQuestion}
				onPrevious={onHandlePreviousQuestion}
				onSave={() => {}}
			/>
		</>
	);
};

export default HealthAndWellnessQ4;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
