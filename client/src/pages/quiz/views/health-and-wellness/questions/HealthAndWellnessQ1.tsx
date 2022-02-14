import { useContext, useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup, YesNo } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';
import { QuizAnswersContext } from '../../../Quiz';

const GET_QUESTION = gql`
	query {
		first: question(id: 39) {
			id
			text
		}
		second: question(id: 40) {
			id
			text
		}
		third: question(id: 41) {
			id
			text
		}
		fourth: question(id: 42) {
			id
			text
		}
	}
`;

const HealthAndWellnessQ1 = ({
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

	// useEffect(() => {
	// 	quizDispatch({
	// 		type: 'SET_ANSWER',
	// 		payload: { id: 14, value: answers },
	// 	});
	// }, [answers]);

	if (questionData.loading)
		return (
			<Box width='100%' height='100%' center backgroundColor='transperant'>
				<BallTriangle color={theme.color.blue} height={150} width={150} />;
			</Box>
		);

	return (
		<>
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='inherit'
				margin='0 0 20px 0'
			>
				<Text typography='subheading' textAlign='center' size={18}>
					Screens can have an effect on our physical and emotional health.
					<br />
					Let&apos;s talk about ways to keep our minds and bodies in tip top
					shape!
				</Text>
			</Box>
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='inherit'
				margin='15px 0'
			>
				<Text typography='subheading' textAlign='center' size={16}>
					{questionData.data.first.text}
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
					<input type='text' />
					<input type='text' />
					<input type='text' />
				</Box>
			</Box>
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='inherit'
				margin='15px 0'
			>
				<Text typography='subheading' textAlign='center' size={16}>
					(CHILD AND ADULT), what else can you agree to do to keep your bodies
					healthy?
				</Text>
				<Box
					width='100%'
					height={150}
					display='flex'
					justify='space-around'
					align='center'
					backgroundColor='inherit'
					margin='25px 0'
				>
					<YesNo
						questions={[
							questionData.data.second,
							questionData.data.third,
							questionData.data.fourth,
						]}
					/>
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

export default HealthAndWellnessQ1;
