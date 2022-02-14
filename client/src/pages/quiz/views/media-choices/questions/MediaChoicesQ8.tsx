import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup, YesNo } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';

const GET_QUESTION = gql`
	query {
		question(id: 38) {
			id
			text
		}
	}
`;
const MediaChoicesQ8 = ({
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
				height={250}
				display='flex'
				flexDirection='column'
				align='center'
				backgroundColor='transperant'
				margin='25px 0'
			>
				<Box
					width='90%'
					height='100%'
					center
					flexDirection='column'
					backgroundColor='transperant'
					margin='0 0 25px 0'
				>
					<YesNo questions={[questionData.data.question]} />
				</Box>
				<Box
					width='90%'
					height='100%'
					center
					flexDirection='column'
					backgroundColor='transperant'
					margin='25px 0'
					border={`1px solid ${theme.color.black}`}
				>
					<Text
						typography='text'
						textAlign='center'
						size={16}
						lineHeight='24px'
					>
						Bonus talk!
						<br />
						What is something each of you has seen online that has made you stop
						and wonder if it were true? <br />
						What strategies do you each use when trying to sort out fact from
						fiction online?
					</Text>
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

export default MediaChoicesQ8;
