import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup, YesNo } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';

const GET_QUESTION = gql`
	query {
		first: question(id: 25) {
			id
			text
		}
		second: question(id: 26) {
			id
			text
		}
		third: question(id: 27) {
			id
			text
		}
		fourth: question(id: 28) {
			id
			text
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
					ust like there are device settings that help us maintain privacy,
					there are settings that can help us control what we can download,
					search for or access online. Which settings will your family set up to
					help you stick to your media agreements?
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
						questionData.data.first,
						questionData.data.second,
						questionData.data.third,
						questionData.data.fourth,
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
