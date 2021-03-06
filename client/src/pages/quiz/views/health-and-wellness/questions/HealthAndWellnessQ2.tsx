import { useContext, useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup, YesNo } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';
import { QuizAnswersContext } from '../../../Quiz';
import { AuthContext } from '../../../../../App';

const GET_QUESTION = gql`
	query {
		slide(id: 20) {
			slide_number
			header
			questions {
				id
				text
			}
		}
	}
`;

const HealthAndWellnessQ2 = ({
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
				margin='10px 0'
			>
				<Text typography='text' textAlign='left' size={18}>
					{questionData?.data?.slide?.questions[0]?.text.replace(
						'(ADULT)',
						quizState.guestAdult ||
							(authState.user && authState.user?.name) ||
							'ADULT',
					)}
				</Text>
				<Box
					width='100%'
					height='auto'
					display='flex'
					justify='space-around'
					align='center'
					backgroundColor='inherit'
					margin='10px 0'
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
				<Text typography='text' textAlign='left' size={18}>
					{questionData?.data?.slide?.questions[1]?.text.replace(
						'(CHILD)',
						quizState.guestChild ||
							(authState.user?.children && authState.user?.children[0]?.name) ||
							'CHILD',
					)}
				</Text>
				<Box
					width='100%'
					height='auto'
					display='flex'
					justify='space-around'
					align='center'
					backgroundColor='inherit'
					margin='10px 0'
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
				margin='10px 0'
			>
				<Text typography='text' textAlign='left' size={18}>
					{questionData?.data?.slide?.questions[2]?.text.replace(
						'(ADULT)',
						quizState.guestAdult ||
							(authState.user && authState.user?.name) ||
							'ADULT',
					)}
				</Text>
				<Box
					width='100%'
					height='auto'
					display='flex'
					justify='space-around'
					align='center'
					backgroundColor='inherit'
					margin='10px 0'
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
				margin='10px 0'
			>
				<Text typography='text' textAlign='left' size={18}>
					{questionData?.data?.slide?.questions[3]?.text.replace(
						'(CHILD)',
						quizState.guestChild ||
							(authState.user?.children && authState.user?.children[0]?.name) ||
							'CHILD',
					)}
				</Text>
				<Box
					width='100%'
					height='auto'
					display='flex'
					justify='space-around'
					align='center'
					backgroundColor='inherit'
					margin='10px 0'
				>
					<input type='text' />
					<input type='text' />
					<input type='text' />
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

export default HealthAndWellnessQ2;
