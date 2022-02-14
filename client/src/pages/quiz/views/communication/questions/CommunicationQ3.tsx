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
		first: question(id: 16) {
			id
			text
		}
		second: question(id: 17) {
			id
			text
		}
		third: question(id: 67) {
			id
			text
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
	const { getQuestion } = useGetQuestion();
	const questionData = getQuestion(GET_QUESTION);
	const theme = useTheme();
	const [answers, setAnswers] = useState<string[]>(quizState.answers[67] || []);

	useEffect(() => {
		quizDispatch({
			type: 'SET_ANSWER',
			payload: { id: 67, value: answers },
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

	const handleOnChange = (name: string) => {
		const answerIndex = answers.findIndex((e) => e === name);
		if (answerIndex !== -1) {
			setAnswers(answers.filter((e) => e !== name));
		} else {
			setAnswers((state) => [...state, name]);
		}
	};

	const handleChecked = (name: string) => {
		if (quizState.answers[67]) {
			return quizState.answers[67].includes(name);
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
						Talking through a device can sometimes lead to misunderstandings and
						upset feelings.
					</Text>
				</Box>

				<YesNo
					questions={[questionData.data.first, questionData.data.second]}
				/>
			</Box>
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='inherit'
				margin='40px 0 20px 0'
			>
				<Text typography='subheading' textAlign='center' size={18}>
					{questionData.data?.third?.text}
				</Text>
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
				<QuestionButtonsGroup
					onContinue={onHandleNextQuestion}
					onPrevious={onHandlePreviousQuestion}
					onSave={() => {}}
				/>
			</Box>
		</>
	);
};

export default CommunicationQ3;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
