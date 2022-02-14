import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup, YesNo } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';

const GET_QUESTION = gql`
	query {
		first: question(id: 8) {
			id
			text
		}
		second: question(id: 9) {
			id
			text
		}
		third: question(id: 10) {
			id
			text
		}
		fourth: question(id: 11) {
			id
			text
		}
	}
`;

const PrivacyAndSafetyQ3 = ({
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
					We can also protect our privacy and stay safe through the choices we
					make when we are online. (CHILD), what do you agree to do to protect
					yourself when you are using your device?
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
			</Box>
		</>
	);
};

export default PrivacyAndSafetyQ3;
