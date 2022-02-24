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
		slide(id: 21) {
			slide_number
			header
			questions {
				id
				text
			}
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
					{questionData?.data?.slide?.header}
				</Text>
			</Box>
			<Box
				width='100%'
				height={300}
				display='block'
				backgroundColor='inherit'
				margin='15px 0'
			>
				<YesNo
					questions={[
						questionData?.data?.slide?.questions[0],
						questionData?.data?.slide?.questions[1],
						questionData?.data?.slide?.questions[2],
						questionData?.data?.slide?.questions[3],
						questionData?.data?.slide?.questions[4],
					]}
				/>
			</Box>

			<QuestionButtonsGroup
				onContinue={onHandleNextQuestion}
				onPrevious={onHandlePreviousQuestion}
				onSave={() => {}}
			/>
		</>
	);
};

export default HealthAndWellnessQ3;
