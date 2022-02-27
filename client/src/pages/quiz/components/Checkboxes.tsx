import { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Text } from '../../../components';
import { QuizAnswersContext } from '../Quiz';

const Checkboxes = ({
	questionData,
	questionId,
	questionHeader,
	answerOptions,
}: {
	questionData: any;
	questionId: string | number;
	questionHeader: string;
	answerOptions: any;
}) => {
	// @ts-expect-error
	const { quizState, quizDispatch } = useContext(QuizAnswersContext);

	const [answers, setAnswers] = useState<string[]>(
		quizState.answers[questionId] || [],
	);

	useEffect(() => {
		if (questionId && answers.length > 0) {
			quizDispatch({
				type: 'SET_ANSWER',
				payload: { id: questionId, value: answers },
			});
		}
	}, [questionId, answers]);

	const handleOnChange = (name: string) => {
		const answerIndex = answers.findIndex((e) => e === name);
		if (answerIndex !== -1) {
			setAnswers(answers.filter((e) => e !== name));
		} else {
			setAnswers((state) => [...state, name]);
		}
	};

	const handleChecked = (name: string) => {
		if (quizState.answers[questionId]) {
			return quizState.answers[questionId].includes(name);
		} else {
			return false;
		}
	};

	return (
		<Box
			width='100%'
			height='auto'
			center
			flexDirection='column'
			backgroundColor='transperant'
			margin='0 0 15px 0'
		>
			<Box
				width='100%'
				height='auto'
				display='block'
				backgroundColor='inherit'
				margin='5px 0'
			>
				<Text typography='text' textAlign='center' size={18}>
					{questionHeader}
				</Text>
			</Box>
			{answerOptions.map((e: any, i: any) => (
				<Box
					key={i}
					width={300}
					height='auto'
					display='flex'
					align='center'
					backgroundColor='transperant'
					margin='2px 0'
				>
					<StyledCheckbox key={e.id} id={e.id} className='container'>
						<Text typography='text' textAlign='left' size={14}>
							{e.label}
						</Text>
						<input
							type='checkbox'
							name={`checkbox-${i}`}
							onChange={() => handleOnChange(`checkbox-${i}`)}
							checked={handleChecked(`checkbox-${i}`)}
						/>
						<span className='checkmark'></span>
					</StyledCheckbox>
				</Box>
			))}
		</Box>
	);
};

export default Checkboxes;

const StyledCheckbox = styled('label')(() => ({
	// marginRight: 25,
	display: 'block',
	position: 'relative',
	paddingLeft: '35px',
	marginBottom: '12px',
	cursor: 'pointer',
	fontSize: '20px',
	['-webkit-user-select']: 'none',
	['-moz-user-select']: 'none',
	['-ms-user-select']: 'none',
	['user-select']: 'none',

	input: {
		position: 'absolute',
		opacity: 0,
		cursor: 'pointer',
	},
	span: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '25px',
		width: '25px',
		backgroundColor: '#eee',
		borderRadius: '50%',
	},

	['input:checked ~ .checkmark']: {
		backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='-10 -10 64.56 64.56'%3E%3Cpath d='M23.297 38.74a6.563 6.563 0 0 1-10.16.499L1.308 26.112a5.083 5.083 0 1 1 7.551-6.805l8.369 9.288a.617.617 0 0 0 .956-.047L35.386 5.217a5.083 5.083 0 1 1 8.181 6.032L23.297 38.74z'/%3E%3C/svg%3E")`,
	},
}));
