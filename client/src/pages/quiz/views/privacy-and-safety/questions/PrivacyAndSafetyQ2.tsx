import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup, YesNo } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';

const GET_QUESTION = gql`
	query {
		first: question(id: 4) {
			id
			text
		}
		second: question(id: 5) {
			id
			text
		}
		third: question(id: 6) {
			id
			text
		}
		fourth: question(id: 7) {
			id
			text
		}
	}
`;

const PrivacyAndSafetyQ2 = ({
	onHandleNextQuestion,
	onHandlePreviousQuestion,
}: {
	onHandleNextQuestion: () => void;
	onHandlePreviousQuestion: () => void;
}) => {
	const { getQuestion } = useGetQuestion();
	const questionData = getQuestion(GET_QUESTION);

	if (questionData.loading) return <div>LOADING</div>;

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
					Tools on our devices called &apos;privacy settings&apos; help us
					decide who can see the things we share - like our location, photos,
					apps and more. <br />
					Select the privacy settings you would like to work on together after
					this conversation.
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
						Want to know more about privacy settings? Click to add educational
						resources to your to-do list.
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default PrivacyAndSafetyQ2;
