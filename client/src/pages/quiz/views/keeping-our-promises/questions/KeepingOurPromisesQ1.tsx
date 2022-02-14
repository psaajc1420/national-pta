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
		first: question(id: 55) {
			id
			text
		}
		second: question(id: 56) {
			id
			text
		}
		third: question(id: 57) {
			id
			text
		}
		fourth: question(id: 58) {
			id
			text
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
	const { getQuestion } = useGetQuestion();
	const questionData = getQuestion(GET_QUESTION);
	const theme = useTheme();

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

	return (
		<>
			<Box
				width='100%'
				height={150}
				display='flex'
				flexDirection='column'
				align='center'
				backgroundColor='transperant'
				margin='0 0 25px 0'
			>
				<YesNo
					questions={[questionData.data.first, questionData.data.second]}
				/>
			</Box>
			<Box
				width='100%'
				height='auto'
				center
				flexDirection='column'
				backgroundColor='transperant'
				margin='0 0 25px 0'
			>
				<Box
					width='100%'
					height='auto'
					display='block'
					backgroundColor='inherit'
					margin='15px 0'
				>
					<Text typography='text' textAlign='center' size={18}>
						{questionData.data.third.text}
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
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='inherit'
				margin='15px 0'
			>
				<Text typography='text' textAlign='center' size={18}>
					{questionData.data.fourth.text}
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
