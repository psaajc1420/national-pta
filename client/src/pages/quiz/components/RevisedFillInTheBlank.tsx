import { useContext, useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Text } from '../../../components';
import { QuizAnswersContext } from '../Quiz';
import { useSubChildAdultString } from '../hooks';

const FillInTheBlank = ({
	question,
	onSetAnswer,
}: {
	question: any;
	onSetAnswer: (arg0: any) => void;
}) => {
	// @ts-expect-error
	const { quizState } = useContext(QuizAnswersContext);
	const theme = useTheme();
	const [inputValue, setInputValue] = useState('');
	const parseText = useSubChildAdultString();

	useEffect(() => {
		onSetAnswer({
			answers: [inputValue],
			question_id: question.id,
			child_id: quizState.childId,
		});
	}, [inputValue]);

	return (
		<Box
			width='100%'
			height='auto'
			display='block'
			backgroundColor='transperant'
			margin='5px 0'
		>
			<Text typography='text' textAlign='center' size={18}>
				{parseText(question.text)}
			</Text>
			<Box
				width='100%'
				height='auto'
				display='flex'
				center
				backgroundColor='transperant'
				margin='15px 0'
			>
				<textarea
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					rows={5}
					cols={40}
					style={{
						border: `2px solid ${theme.color.black}`,
						borderRadius: 10,
						padding: 15,
						fontFamily: theme.font.text,
					}}
				/>
			</Box>
		</Box>
	);
};

export default FillInTheBlank;
