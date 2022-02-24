import { useContext, useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Text } from '../../../../../components';
import { QuestionButtonsGroup } from '../../../components';
import { useGetQuestion } from '../../../../../hooks';
import { gql } from '@apollo/client';
import { QuizAnswersContext } from '../../../Quiz';
import { AuthContext } from '../../../../../App';

const GET_QUESTION = gql`
	query {
		slide(id: 15) {
			slide_number
			header
			questions {
				id
				text
			}
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
	const { quizState, quizDispatch } = useContext(QuizAnswersContext);
	// @ts-expect-error
	const { authState } = useContext(AuthContext);
	const { getQuestion } = useGetQuestion();
	const questionData = getQuestion(GET_QUESTION);
	const theme = useTheme();
	console.log({ questionData });

	const [deviceUseTime, setDeviceUseTime] = useState('');
	const [screenTimePercentage, setScreenTimePercentage] = useState('50');

	useEffect(() => {
		if (questionData?.data?.slide?.questions[0]?.id) {
			quizDispatch({
				type: 'SET_ANSWER',
				payload: {
					id: questionData?.data?.slide?.questions[0]?.id,
					value: deviceUseTime,
				},
			});
		}
		if (questionData?.data?.slide?.questions[1]?.id)
			quizDispatch({
				type: 'SET_ANSWER',
				payload: {
					id: questionData?.data?.slide?.questions[1]?.id,
					value: screenTimePercentage,
				},
			});
	}, [questionData?.data?.slide, deviceUseTime, screenTimePercentage]);

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
				height='auto'
				center
				flexDirection='column'
				backgroundColor='inherit'
				margin='0 0 15px 0'
			>
				<Text typography='subheading' textAlign='center' size={18}>
					{questionData?.data?.slide?.questions[0]?.text.replace(
						'(ADULT)',
						quizState.guestAdult ||
							(authState.user && authState.user?.name) ||
							'ADULT',
					)}
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
						{questionData?.data?.slide?.questions[1]?.text
							.replace(
								'(ADULT)',
								quizState.guestAdult ||
									(authState.user && authState.user?.name) ||
									'ADULT',
							)
							.replace(
								"(ADULT'S)",
								quizState.guestAdult ||
									(authState.user && authState.user?.name) ||
									'ADULT',
							)}
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
