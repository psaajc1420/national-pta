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
		slide(id: 19) {
			slide_number
			header
			questions {
				id
				text
			}
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
				margin='0 0 20px 0'
			>
				<Text typography='subheading' textAlign='center' size={18}>
					{questionData?.data?.slide?.header}
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
					{questionData?.data?.slide?.questions[0]?.text.replace(
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
					{quizState.guestChild ||
						(authState.user?.children && authState.user?.children[0]?.name) ||
						'CHILD'}{' '}
					and{' '}
					{quizState.guestAdult ||
						(authState.user && authState.user?.name) ||
						'ADULT'}
					, what else can you agree to do to keep your bodies healthy?
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
							questionData?.data?.slide?.questions[1],
							questionData?.data?.slide?.questions[2],
							questionData?.data?.slide?.questions[3],
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
