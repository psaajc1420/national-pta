import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import { Box } from '../../../../../components';
import {
	QuestionButtonsGroup,
	YesNo,
	Checkboxes,
	FillInTheBlank,
} from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';

const GET_QUESTION = gql`
	query {
		slide(id: 23) {
			slide_number
			header
			questions {
				id
				text
			}
		}
	}
`;

const TestQuestion = ({
	onHandleNextQuestion,
	onHandlePreviousQuestion,
}: {
	onHandleNextQuestion: () => void;
	onHandlePreviousQuestion: () => void;
}) => {
	const theme = useTheme();
	const { getQuestion } = useGetQuestion();
	const questionData = getQuestion(GET_QUESTION);

	console.log({ questionData });

	// useEffect(() => {
	// 	if (questionId) {
	// 		quizDispatch({
	// 			type: 'SET_ANSWER',
	// 			payload: { id: questionId, value: answers },
	// 		});
	// 	}
	// }, [questionId, answers]);
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
			<YesNo
				questions={[
					questionData?.data?.slide?.questions[0],
					questionData?.data?.slide?.questions[1],
				]}
			/>
			<Checkboxes
				questionData={questionData}
				questionId={23}
				questionHeader={questionData?.data?.slide?.questions[2]?.text}
				answerOptions={ANSWER_OPTIONS}
			/>
			<FillInTheBlank
				questionData={questionData}
				questionId={3}
				questionHeader={questionData?.data?.slide?.questions[3]?.text}
				inputType={'text'}
				numberOfInputs={3}
			/>
			<QuestionButtonsGroup
				onContinue={onHandleNextQuestion}
				onPrevious={onHandlePreviousQuestion}
				onSave={() => {}}
			/>
		</>
	);
};

export default TestQuestion;
