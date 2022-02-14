import { useContext, useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';
import { QuizAnswersContext } from '../../../Quiz';

const GET_QUESTION = gql`
	query {
		first: question(id: 71) {
			id
			text
		}
		second: question(id: 72) {
			id
			text
		}
	}
`;

const MediaChoicesQ5 = ({
	onHandleNextQuestion,
	onHandlePreviousQuestion,
}: {
	onHandleNextQuestion: () => void;
	onHandlePreviousQuestion: () => void;
}) => {
	// @ts-expect-error
	const { quizDispatch } = useContext(QuizAnswersContext);
	const { getQuestion } = useGetQuestion();
	const questionData = getQuestion(GET_QUESTION);
	const theme = useTheme();

	const [deviceUseTime, setDeviceUseTime] = useState('');
	const [screenTimePercentage, setScreenTimePercentage] = useState('0');

	useEffect(() => {
		quizDispatch({
			type: 'SET_ANSWER',
			payload: { id: 71, value: deviceUseTime },
		});
		quizDispatch({
			type: 'SET_ANSWER',
			payload: { id: 72, value: screenTimePercentage },
		});
	}, [deviceUseTime, screenTimePercentage]);

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
					Not all screen time is created equally!
				</Text>
			</Box>
			<Box
				width='100%'
				height='auto'
				center
				flexDirection='column'
				backgroundColor='inherit'
				margin='0 0 15px 0'
			>
				<Text typography='subheading' textAlign='center' size={18}>
					{questionData.data.first.text}
				</Text>
				<Box
					width='100%'
					height='auto'
					center
					backgroundColor='inherit'
					margin='15px 0 35px 0'
				>
					<StyledInput
						type='text'
						value={deviceUseTime}
						onChange={(e) => setDeviceUseTime(e.target.value)}
					/>
					<Text typography='subheading' textAlign='center' size={18}>
						hrs.
					</Text>
				</Box>
			</Box>
			<Box
				width='100%'
				height={250}
				display='flex'
				flexDirection='column'
				align='center'
				backgroundColor='transperant'
				margin='0 0 25px 0'
			>
				<Box
					width='100%'
					height='auto'
					center
					flexDirection='column'
					backgroundColor='transperant'
					margin='0 0 25px 0'
				>
					<Text typography='subheading' textAlign='center' size={18}>
						{questionData.data.second.text}
					</Text>
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

export default MediaChoicesQ5;

const StyledInput = styled('input')(({ theme }) => ({
	border: 'none',
	borderBottom: `1px solid ${theme.color.black}`,
}));

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
