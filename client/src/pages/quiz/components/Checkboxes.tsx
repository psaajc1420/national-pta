import { useContext, useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
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
	const theme = useTheme();

	const [answers, setAnswers] = useState<string[]>(
		quizState.answers[questionId] || [],
	);

	const handleOnChange = (label: string) => {
		const answerIndex = answers.findIndex((e) => e === label);
		if (answerIndex !== -1) {
			setAnswers(answers.filter((e) => e !== label));
		} else {
			setAnswers((state) => [...state, label]);
		}
	};

	const handleChecked = (label: string) => {
		if (quizState.answers[questionId]) {
			return quizState.answers[questionId].includes(label);
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
			{answerOptions.map((e: any) => (
				<Box
					key={e.name}
					width={300}
					height='auto'
					display='flex'
					align='center'
					backgroundColor='transperant'
					margin='2px 0'
				>
					<StyledCheckbox
						type='checkbox'
						id={e.name}
						name={e.name}
						onChange={() => handleOnChange(e.name)}
						checked={handleChecked(e.name)}
					/>
					<label htmlFor={e.name}>
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
