import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Text } from '../../../components';

const FillInTheBlank = ({
	question,
	onSetAnswer,
}: {
	question: any;
	onSetAnswer: (arg0: any) => void;
}) => {
	const theme = useTheme();
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		onSetAnswer({
			answers: [inputValue],
			question_id: question.id,
			child_id: 0,
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
				{question.text}
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
