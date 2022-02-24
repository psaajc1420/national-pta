import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup, YesNo } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';

const GET_QUESTION = gql`
	query {
		slide(id: 13) {
			slide_number
			header
			questions {
				id
				text
			}
		}
	}
`;

const MediaChoicesQ3 = ({
	onHandleNextQuestion,
	onHandlePreviousQuestion,
}: {
	onHandleNextQuestion: () => void;
	onHandlePreviousQuestion: () => void;
}) => {
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
				height={250}
				display='block'
				backgroundColor='transperant'
				margin='0 0 25px 0'
			>
				<YesNo
					questions={[
						questionData?.data?.slide?.questions[0],
						questionData?.data?.slide?.questions[1],
						questionData?.data?.slide?.questions[2],
						questionData?.data?.slide?.questions[3],
					]}
				/>
				<QuestionButtonsGroup
					onContinue={onHandleNextQuestion}
					onPrevious={onHandlePreviousQuestion}
					onSave={() => {}}
				/>
				<Box
					width='100%'
					height='auto'
					display='block'
					backgroundColor='transperant'
					margin='35px 0'
				>
					<Text typography='text' textAlign='center' size={16}>
						Please add a reminder to my end of talk to-do list.
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default MediaChoicesQ3;
