import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup, YesNo } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';

const GET_QUESTION = gql`
	query {
		first: question(id: 1) {
			id
			text
		}
		second: question(id: 2) {
			id
			text
		}
		third: question(id: 3) {
			id
			text
		}
	}
`;

const PrivacyAndSafetyQ1 = ({
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
					It is important to be thoughtful and cautious when using technology.
					We must take steps to keep our private information to ourselves. There
					are many ways to protect our information, our accounts and our
					devices. Let&apos;s talk about some options!
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
						Bonus! How do we make strong passwords? Let&apos;s practice creating
						a really tough password together.
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default PrivacyAndSafetyQ1;
