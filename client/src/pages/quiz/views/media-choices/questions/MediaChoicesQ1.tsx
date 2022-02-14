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

const MediaChoicesQ1 = ({
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
			name: 'sharing-media',
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

	const handleOnChange = (name: string) => {
		const answerIndex = answers.findIndex((e) => e === name);
		if (answerIndex !== -1) {
			setAnswers(answers.filter((e) => e !== name));
		} else {
			setAnswers((state) => [...state, name]);
		}
	};

	const handleChecked = (name: string) => {
		if (quizState.answers[23]) {
			return quizState.answers[23].includes(name);
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
					{questionData.data.question.text}
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
				<QuestionButtonsGroup
					onContinue={onHandleNextQuestion}
					onPrevious={onHandlePreviousQuestion}
					onSave={() => {}}
				/>
			</Box>
		</>
	);
};

export default MediaChoicesQ1;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
