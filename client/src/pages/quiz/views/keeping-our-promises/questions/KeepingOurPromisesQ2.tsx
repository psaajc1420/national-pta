import { useContext, useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';
import { QuizAnswersContext } from '../../../Quiz';

const GET_QUESTION = gql`
	query {
		question(id: 23) {
			id
			text
		}
	}
`;

const KeepingOurPromises = ({
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
	const [answers, setAnswers] = useState<string[]>(quizState.answers[23] || []);

	useEffect(() => {
		quizDispatch({
			type: 'SET_ANSWER',
			payload: { id: 23, value: answers },
		});
	}, [answers]);

	if (questionData.loading)
		return (
			<Box width='100%' height='100%' center backgroundColor='transperant'>
				<BallTriangle color={theme.color.blue} height={150} width={150} />;
			</Box>
		);

	const ANSWER_OPTIONS = [
		{
			name: 'print-and-sign',
			label: 'Print and sign our agreement',
		},
		{
			name: 'hang-agreement',
			label: 'Hang our agreement where all can see it',
		},
		{
			name: 'complete-todos',
			label: 'Complete the items on our Smart Talk Tool to-do list',
		},
		{
			name: 'parental-settings',
			label: 'Use parental settings on home wifi, gaming systems and devices',
		},
		{
			name: 'third-party-app',
			label:
				'Use a third party app like Norton Family, Bark, Life360 or Disney Circle to monitor your child’s use',
		},
		{
			name: 'schedule-device-checks',
			label: 'Schedule device checks',
		},
		{
			name: 'unscheduled-device-checks',
			label: 'Conduct unscheduled device checks',
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
				margin='0 0 25px 0'
			>
				<Text typography='subheading' textAlign='center' size={18}>
					There are so many ways to talk to others through technology.
				</Text>
			</Box>
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='inherit'
				margin='0 0 25px 0'
			>
				<Text typography='subheading' textAlign='center' size={18}>
					How will our family monitor technology and make sure we are all
					sticking to this Smart Talk agreement? Check all that apply.
				</Text>
			</Box>
			<Box
				width='100%'
				height={250}
				display='flex'
				flexDirection='column'
				align='center'
				backgroundColor='transperant'
				margin='0 0 25px 0'
			>
				<Box
					width={250}
					height='auto'
					center
					flexDirection='column'
					backgroundColor='transperant'
					margin='0 0 25px 0'
				>
					{ANSWER_OPTIONS.map((e) => (
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
				<QuestionButtonsGroup
					onContinue={onHandleNextQuestion}
					onPrevious={onHandlePreviousQuestion}
					onSave={() => {}}
				/>
			</Box>
		</>
	);
};

export default KeepingOurPromises;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
