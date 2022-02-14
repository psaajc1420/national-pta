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
		question(id: 22) {
			id
			text
		}
	}
`;

const CommunicationQ6 = ({
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
	const [answers, setAnswers] = useState<string[]>(quizState.answers[22] || []);

	useEffect(() => {
		quizDispatch({
			type: 'SET_ANSWER',
			payload: { id: 22, value: answers },
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
			name: 'do-not-harrass',
			label: 'Do not embarrass, harass or troll people online',
		},
		{
			name: 'respectful-content',
			label: 'Share content that is respectful, kind and uplifting',
		},
		{
			name: 'congratulate-accomplishments',
			label: 'Congratulate others on their accomplishments',
		},
		{
			name: 'ask-questions',
			label: 'Ask questions to learn more about other people’s perspectives	',
		},
		{
			name: 'pause',
			label:
				'Pause to consider how the person on the other end of the screen feels before responding or commenting',
		},
		{
			name: 'screens-away',
			label: 'Put screens away when spending time with those you care about ',
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
		if (quizState.answers[22]) {
			return quizState.answers[22].includes(name);
		} else {
			return false;
		}
	};

	return (
		<>
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
						{questionData.data?.question?.text}
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
			<QuestionButtonsGroup
				onContinue={onHandleNextQuestion}
				onPrevious={onHandlePreviousQuestion}
				onSave={() => {}}
			/>
		</>
	);
};

export default CommunicationQ6;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
