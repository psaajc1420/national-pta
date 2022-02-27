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
					<StyledCheckbox
						type='checkbox'
						id={i}
						name={`checkbox-${i}`}
						onChange={() => handleOnChange(`checkbox-${i}`)}
						checked={handleChecked(`checkbox-${i}`)}
					/>
					<label htmlFor={`checkbox-${i}`}>
						<Text typography='text' textAlign='left' size={14}>
							{e.label}
						</Text>
					</label>
				</Box>
			))}
		</Box>
	);
};

export default Checkboxes;

const StyledCheckbox = styled('input')(() => ({
	marginRight: 25,
}));
