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
		slide(id: 7) {
			slide_number
			header
			questions {
				id
				text
			}
		}
	}
`;

const CommunicationQ3 = ({
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

	useEffect(() => {
		if (questionId && answers.length > 0) {
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
			name: 'boundaries',
			label:
				'Express your boundaries/concerns to the other party and/or their guardian',
		},
		{
			name: 'reflect',
			label: 'Reflect on our part in the problem and apologize when necessary',
		},
		{
			name: 'other-friends',
			label: 'Spend time with other friends',
		},
		{
			name: 'device-break',
			label: 'Take a device break',
		},
		{
			name: 'communicating-irl',
			label: 'Try communication in person',
		},
		{
			name: 'adult-advice',
			label: 'Ask another trusted adult for advice',
		},
		{
			name: 'block',
			label: 'Unfollow, hide or bloack the account',
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
				display='block'
				backgroundColor='inherit'
				margin='0 0 35px 0'
			>
				<Box
					width='100%'
					height='auto'
					display='block'
					backgroundColor='inherit'
					margin='0 0 15px 0'
				>
					<Text typography='subheading' textAlign='center' size={18}>
						{questionData?.data?.slide?.header}
					</Text>
				</Box>

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
				display='block'
				backgroundColor='inherit'
				margin='20px 0 20px 0'
			>
				<Text typography='subheading' textAlign='center' size={18}>
					{questionData?.data?.slide?.questions[2]?.text
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
			</Box>
			<Box
				width='100%'
				height='auto'
				display='flex'
				flexDirection='column'
				align='center'
				backgroundColor='transperant'
				margin='0 0 15px 0'
			>
				<Box
					width={500}
					height='auto'
					center
					flexDirection='column'
					backgroundColor='transperant'
				>
					{ANSWER_OPTIONS.map((e) => (
						<Box
							key={e.name}
							width='100%'
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
			<QuestionButtonsGroup
				onContinue={onHandleNextQuestion}
				onPrevious={onHandlePreviousQuestion}
				onSave={() => {}}
			/>
		</>
	);
};

export default CommunicationQ3;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
