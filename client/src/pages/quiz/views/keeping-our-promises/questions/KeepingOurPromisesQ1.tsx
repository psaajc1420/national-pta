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
		slide(id: 23) {
			slide_number
			header
			questions {
				id
				text
			}
		}
	}
`;

const KeepingOurPromisesQ1 = ({
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
	const questionId = questionData?.data?.slide?.questions[2]?.id;

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

	const ANSWER_OPTIONS = [
		{
			name: 'losing-access',
			label: 'Losing access to apps, websites or other content',
		},
		{
			name: 'timeout-device',
			label: 'Take a timeout from the device',
		},
		{
			name: 'grounded',
			label: 'Being grounded',
		},
		{
			name: 'extra-chores',
			label: 'Doing extra chores',
		},
		{
			name: 'less-screen-time',
			label: 'Less screen time ',
		},
		{
			name: 'other',
			label: 'Other',
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
				height={100}
				display='flex'
				flexDirection='column'
				align='center'
				backgroundColor='transperant'
				margin='0 0 15px 0'
			>
				<YesNo
					questions={[
						questionData?.data?.slide?.questions[0],
						questionData?.data?.slide?.questions[1],
					]}
				/>
			</Box>
			<Box
				width='100%'
				height='auto'
				center
				flexDirection='column'
				backgroundColor='transperant'
				margin='0 0 15px 0'
			>
				<Box
					width='100%'
					height='auto'
					display='block'
					backgroundColor='inherit'
					margin='5px 0'
				>
					<Text typography='text' textAlign='center' size={18}>
						{questionData?.data?.slide?.questions[2]?.text}
					</Text>
				</Box>
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
							onChange={() => handleOnChange(e.name)}
							checked={handleChecked(e.name)}
						/>
						<label htmlFor={e.name}>
							<Text typography='text' textAlign='left' size={14}>
								{e.label}
							</Text>
						</label>
					</Box>
				))}
			</Box>
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='inherit'
				margin='5px 0'
			>
				<Text typography='text' textAlign='center' size={18}>
					{questionData?.data?.slide?.questions[3]?.text
						.replace(
							'(CHILD)',
							quizState.guestChild ||
								(authState.user?.children &&
									authState.user?.children[0]?.name) ||
								'CHILD',
						)
						.replace(
							'(ADULT)',
							quizState.guestAdult ||
								(authState.user && authState.user?.name) ||
								'ADULT',
						)}
				</Text>
				<Box
					width='100%'
					height='auto'
					display='flex'
					justify='space-around'
					align='center'
					backgroundColor='inherit'
					margin='15px 0'
				>
					<textarea />
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

export default KeepingOurPromisesQ1;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
