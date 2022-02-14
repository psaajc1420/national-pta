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
		first: question(id: 47) {
			id
			text
		}
		second: question(id: 48) {
			id
			text
		}
		third: question(id: 49) {
			id
			text
		}
		fourth: question(id: 50) {
			id
			text
		}
		five: question(id: 51) {
			id
			text
		}
	}
`;

const HealthAndWellnessQ3 = ({
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

	return (
		<>
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='inherit'
				margin='0 0 35px 0'
			>
				<Text typography='subheading' textAlign='center' size={18}>
					The way we use our devices can improve or worsen our moods. What can
					we agree to as a family to help support our mental health?
				</Text>
			</Box>
			<Box
				width='100%'
				height={400}
				display='block'
				backgroundColor='inherit'
				margin='15px 0'
			>
				<YesNo
					questions={[
						questionData.data.first,
						questionData.data.second,
						questionData.data.third,
						questionData.data.fourth,
						questionData.data.five,
					]}
				/>
			</Box>
			<Box
				width='100%'
				height={150}
				display='flex'
				flexDirection='column'
				align='center'
				backgroundColor='transperant'
			>
				<QuestionButtonsGroup
					onContinue={onHandleNextQuestion}
					onPrevious={onHandlePreviousQuestion}
					onSave={() => {}}
				/>
			</Box>
		</>
	);
};

export default HealthAndWellnessQ3;
