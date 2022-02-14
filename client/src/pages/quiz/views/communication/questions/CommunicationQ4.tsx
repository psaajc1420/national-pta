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
		first: question(id: 18) {
			id
			text
		}
		second: question(id: 70) {
			id
			text
		}
	}
`;

const CommunicationQ4 = ({
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
	const [answers, setAnswers] = useState<string[]>(quizState.answers[18] || []);

	useEffect(() => {
		quizDispatch({
			type: 'SET_ANSWER',
			payload: { id: 18, value: answers },
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
			name: 'appropriate-photos-videos',
			label: 'Appropriate photos and videos from the internet',
		},
		{
			name: 'links-stories-memes',
			label: 'Links, stories, memes',
		},
		{
			name: 'personal-photos-videos',
			label: 'Personal photos, videos and other creations',
		},
		{
			name: 'school-sports-personal',
			label: 'Updates about school, sports or personal successes',
		},
		{
			name: 'friends-family-photos-video',
			label: 'Photos and videos of friends and family with their permission',
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
		if (quizState.answers[18]) {
			return quizState.answers[18].includes(name);
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
				margin='0 0 15px 0'
			>
				<Box
					width='100%'
					height='auto'
					display='block'
					backgroundColor='inherit'
					margin='0 0 15px 0'
				>
					<Text typography='subheading' textAlign='center' size={18}>
						Technology is a great way to communicate, but we want to represent
						ourselves and our family well when we post online. We also want to
						share in ways that honor and respect the feelings of others.
						Let&apos;s talk about what types of information our family is
						comfortable sharing publicly.
					</Text>
				</Box>
			</Box>

			<Box
				width='100%'
				height='auto'
				display='flex'
				flexDirection='column'
				align='center'
				backgroundColor='transperant'
				margin='0 0 25px 0'
			>
				<Box
					width='100%'
					height='auto'
					display='block'
					backgroundColor='inherit'
					margin='20px 0'
				>
					<Text typography='subheading' textAlign='center' size={18}>
						{questionData.data?.first?.text}
					</Text>
				</Box>
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
							margin='5px 0'
						>
							<StyledCheckbox
								type='checkbox'
								id={e.name}
								name={e.name}
								onChange={() => handleOnChange(e.name)}
								checked={handleChecked(e.name)}
							/>
							<label htmlFor={e.name}>
								<Text typography='text' textAlign='left' size={16}>
									{e.label}
								</Text>
							</label>
						</Box>
					))}
				</Box>
			</Box>
			<YesNo questions={[questionData.data.second]} />
			<QuestionButtonsGroup
				onContinue={onHandleNextQuestion}
				onPrevious={onHandlePreviousQuestion}
				onSave={() => {}}
			/>
		</>
	);
};

export default CommunicationQ4;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
