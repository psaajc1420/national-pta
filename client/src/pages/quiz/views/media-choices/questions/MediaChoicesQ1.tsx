import { useContext, useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';
import { QuizAnswersContext } from '../../../Quiz';
import { AuthContext } from '../../../../../App';

const GET_QUESTION = gql`
	query {
		slide(id: 11) {
			slide_number
			header
			questions {
				id
				text
			}
		}
	}
`;

const MediaChoicesQ1 = ({
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
	const questionId = questionData?.data?.slide?.questions[0]?.id;

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

	const ANSWER_OPTIONS_A = [
		{
			name: 'schoolwork',
			label: 'Schoolwork',
		},
		{
			name: 'gaming',
			label: 'Gaming',
		},
		{
			name: 'reading',
			label: 'Reading',
		},
		{
			name: 'learning',
			label: 'Learning',
		},
		{
			name: 'texting',
			label: 'Texting',
		},
		{
			name: 'talking',
			label: 'Talking',
		},
		{
			name: 'watching-videos',
			label: 'Watching videos',
		},
	];

	const ANSWER_OPTIONS_B = [
		{
			name: 'listening-music',
			label: 'Listening to music',
		},
		{
			name: 'listening-audiobooks-podcasts',
			label: 'Listening to AudioBooks or Podcasts',
		},
		{
			name: 'taking-photos-videos',
			label: 'Taking photos and videos',
		},
		{
			name: 'creating-media',
			label: 'Creating pictures, songs and videos',
		},
		{
			name: 'social-media',
			label: 'Social media',
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
				height='auto'
				display='block'
				backgroundColor='inherit'
				margin='0 0 25px 0'
			>
				<Text typography='subheading' textAlign='center' size={18}>
					{questionData?.data?.slide?.header}{' '}
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
					{questionData?.data?.slide?.questions[0]?.text.replace(
						'(CHILD)',
						quizState.guestChild ||
							(authState.user?.children && authState.user?.children[0]?.name) ||
							'CHILD',
					)}
				</Text>
			</Box>
			<Box
				width='100%'
				height='auto'
				display='flex'
				center
				backgroundColor='transperant'
				margin='0 0 25px 0'
			>
				<Box
					width={200}
					height='auto'
					center
					flexDirection='column'
					backgroundColor='transperant'
					margin='0 0 25px 50px'
				>
					{ANSWER_OPTIONS_A.map((e) => (
						<Box
							key={e.name}
							width={200}
							height='auto'
							display='flex'
							align='center'
							backgroundColor='transperant'
							margin='3px 0'
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
				<Box
					width={350}
					height='auto'
					center
					flexDirection='column'
					backgroundColor='transperant'
					margin='0 0 25px 0'
				>
					{ANSWER_OPTIONS_B.map((e) => (
						<Box
							key={e.name}
							width={350}
							height='auto'
							display='flex'
							align='center'
							backgroundColor='transperant'
							margin='3px 0'
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

export default MediaChoicesQ1;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
