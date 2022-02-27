import { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Text } from '../../../components';
import { QuizAnswersContext } from '../Quiz';
import { AuthContext } from '../../../App';

const FillInTheBlank = ({
	questionData,
	questionId,
	questionHeader,
	inputType,
	numberOfInputs,
}: {
	questionData: any;
	questionId: string | number;
	questionHeader: string;
	inputType: 'text' | 'textarea';
	numberOfInputs: any;
}) => {
	// @ts-expect-error
	const { quizState, quizDispatch } = useContext(QuizAnswersContext);
	// @ts-expect-error
	const { authState } = useContext(AuthContext);

	const [inputValues, setInputValues] = useState<any[]>([]);

	useEffect(() => {
		if (questionId && inputValues.length > 0) {
			quizDispatch({
				type: 'SET_ANSWER',
				payload: { id: questionId, value: inputValues },
			});
		}
	}, [questionId, inputValues]);

	const handleChange = (i: any, e: any) => {
		const newInputValues = [...inputValues];
		newInputValues[i] = e.target.value;
		setInputValues(newInputValues);
	};

	return (
		<Box
			width='100%'
			height='auto'
			display='block'
			backgroundColor='inherit'
			margin='5px 0'
		>
			<Text typography='text' textAlign='center' size={18}>
				{questionHeader
					.replace(
						'(CHILD)',
						quizState.guestChild ||
							(authState.user?.children && authState.user?.children[0]?.name) ||
							'CHILD',
					)
					.replace(
						'(ADULT)',
						quizState.guestAdult ||
							(authState.user && authState.user?.name) ||
							'ADULT',
					)}
			</Text>
			<Box
				width='100%'
				height='auto'
				display='flex'
				justify='space-around'
				align='center'
				backgroundColor='inherit'
				margin='15px 0'
			>
				{Array.from(Array(numberOfInputs)).map((element, i) => {
					if (inputType === 'text') {
						return (
							<StyledInput
								key={i}
								type='text'
								onChange={(e) => handleChange(i, e)}
							/>
						);
					} else if (inputType === 'textarea') {
						<textarea key={i} onChange={(e) => handleChange(i, e)} />;
					} else {
						return (
							<StyledInput
								key={i}
								type='text'
								onChange={(e) => handleChange(i, e)}
							/>
						);
					}
				})}
			</Box>
		</Box>
	);
};

export default FillInTheBlank;

const StyledInput = styled('input')(({ theme }) => ({
	border: 'none',
	borderBottom: `1px solid ${theme.color.black}`,
}));
