import { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Text } from '../../../components';
import { QuizAnswersContext } from '../Quiz';

const RevisedSlider = ({
	question,
	onSetAnswer,
}: {
	question: any;
	onSetAnswer: (arg0: any) => void;
}) => {
	// @ts-expect-error
	const { quizState } = useContext(QuizAnswersContext);
	const [screenTimePercentage, setScreenTimePercentage] = useState('50');

	useEffect(() => {
		onSetAnswer({
			answers: [screenTimePercentage],
			question_id: question.id,
			child_id: quizState.childId,
		});
	}, [screenTimePercentage]);
	return (
		<Box
			width='100%'
			height='auto'
			center
			flexDirection='column'
			backgroundColor='transperant'
			margin='25px 0 15px 0'
		>
			<label htmlFor='screen-time'>
				<Text typography='text' size={16}>
					Screen Time: {screenTimePercentage}%
				</Text>
			</label>
			<StyledSlider
				type='range'
				id='screen-time'
				name='screen-time'
				min='0'
				max='100'
				defaultValue='50'
				onChange={(e) => setScreenTimePercentage(e.target.value)}
			/>
		</Box>
	);
};

export default RevisedSlider;

const StyledSlider = styled('input')(({ theme }) => ({
	['-webkit-appearance']: 'none',
	appearance: 'none',
	width: 350,
	height: 50,

	['::-webkit-slider-runnable-track']: {
		width: '100%',
		height: 11,
		cursor: 'pointer',
		animate: '0.2s',
		background: theme.color.blue,
		borderRadius: 15,
		border: 'none',
	},

	['::-webkit-slider-thumb']: {
		['-webkit-appearance']: 'none',
		appearance: 'none',
		border: 'none',
		height: 25,
		width: 25,
		borderRadius: 15,
		backgroundColor: theme.color.lightBlue,
		cursor: 'pointer',
		marginTop: '-8px',
	},

	[':focus']: {
		outline: 'none',
	},
}));
