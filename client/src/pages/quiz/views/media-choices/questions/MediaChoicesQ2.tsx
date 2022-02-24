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
		slide(id: 12) {
			slide_number
			header
			questions {
				id
				text
			}
		}
	}
`;

const MediaChoicesQ2 = ({
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

	const GAME_ANSWER_OPTIONS = [
		{
			name: 'game-rating-E',
			label: 'E for Everyone',
		},
		{
			name: 'game-rating-E10+',
			label: 'E10+',
		},
		{
			name: 'game-rating-T',
			label: 'T for Teen',
		},
		{
			name: 'game-rating-M',
			label: 'M for Mature 17+',
		},
		{
			name: 'game-rating-A',
			label: 'A for Adult 18+ only',
		},
	];
	const MOVIE_ANSWER_OPTIONS = [
		{
			name: 'movie-rating-G',
			label: 'G',
		},
		{
			name: 'movie-rating-PG',
			label: 'PG',
		},
		{
			name: 'movie-rating-PG-13',
			label: 'PG13',
		},
		{
			name: 'movie-rating-R',
			label: 'R',
		},
	];
	const MUSIC_ANSWER_OPTIONS = [
		{
			name: 'explicit-music',
			label: 'Music Labeled E for Explicit',
		},
	];
	const APP_ANSWER_OPTIONS = [
		{
			name: 'app-rating-4+',
			label: '4+',
		},
		{
			name: 'app-rating-8+',
			label: '8+',
		},
		{
			name: 'app-rating-12+',
			label: '12+',
		},
		{
			name: 'app-rating-17+',
			label: '17+',
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
				margin='0 0 15px 0'
			>
				<Text typography='subheading' textAlign='center' size={18}>
					{questionData?.data?.slide?.header.replace(
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
				flexDirection='row'
				backgroundColor='transperant'
			>
				<Box
					width='50%'
					height='auto'
					display='flex'
					flexDirection='column'
					backgroundColor='transperant'
				>
					<Box
						width='100%'
						height='auto'
						display='flex'
						flexDirection='column'
						align='center'
						backgroundColor='transperant'
						margin='0 0 5px 0'
					>
						<Text typography='heading' size={18}>
							{questionData?.data?.slide?.questions[1]?.text}
						</Text>
						<Box
							width={200}
							height='auto'
							center
							flexDirection='column'
							backgroundColor='transperant'
							margin='0 0 15px 0'
						>
							{GAME_ANSWER_OPTIONS.map((e) => (
								<Box
									key={e.name}
									width={200}
									height='auto'
									display='flex'
									align='center'
									backgroundColor='transperant'
									margin='5px 0'
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
						width='100%'
						height='auto'
						display='flex'
						flexDirection='column'
						align='center'
						backgroundColor='transperant'
						margin='0 0 5px 0'
					>
						<Text typography='heading' size={18}>
							{questionData?.data?.slide?.questions[2]?.text}
						</Text>
						<Box
							width={65}
							height='auto'
							center
							flexDirection='column'
							backgroundColor='transperant'
							margin='0 0 5px 0'
						>
							{MOVIE_ANSWER_OPTIONS.map((e) => (
								<Box
									key={e.name}
									width={65}
									height='auto'
									display='flex'
									align='center'
									backgroundColor='transperant'
									margin='5px 0'
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
				<Box
					width='50%'
					height='auto'
					display='flex'
					flexDirection='column'
					backgroundColor='transperant'
				>
					<Box
						width='100%'
						height='auto'
						display='flex'
						flexDirection='column'
						align='center'
						backgroundColor='transperant'
						margin='0 0 25px 0'
					>
						<Text typography='heading' size={18}>
							{questionData?.data?.slide?.questions[3]?.text}
						</Text>
						<Box
							width={65}
							height='auto'
							center
							flexDirection='column'
							backgroundColor='transperant'
							margin='0 0 25px 0'
						>
							{APP_ANSWER_OPTIONS.map((e) => (
								<Box
									key={e.name}
									width={65}
									height='auto'
									display='flex'
									align='center'
									backgroundColor='transperant'
									margin='5px 0'
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
						width='100%'
						height='auto'
						display='flex'
						flexDirection='column'
						align='center'
						backgroundColor='transperant'
					>
						<Text typography='heading' size={18}>
							{questionData?.data?.slide?.questions[0]?.text}
						</Text>
						<Box
							width={250}
							height='auto'
							center
							flexDirection='column'
							backgroundColor='transperant'
						>
							{MUSIC_ANSWER_OPTIONS.map((e) => (
								<Box
									key={e.name}
									width='auto'
									height='auto'
									display='flex'
									align='center'
									backgroundColor='transperant'
									margin='5px 0'
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
			</Box>

			<QuestionButtonsGroup
				onContinue={onHandleNextQuestion}
				onPrevious={onHandlePreviousQuestion}
				onSave={() => {}}
			/>
		</>
	);
};

export default MediaChoicesQ2;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
