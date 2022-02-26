import { useContext, useEffect, useState, useReducer } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Text } from '../../../components';
import { QuizAnswersContext } from '../Quiz';
import { AuthContext } from '../../../App';

// const fillInTheBlankInitialState = {
// 	inputAnswers: [],
// };

// const fillInTheBlankReducer = (state: any, action: any) => {
// 	switch (action.type) {
// 		case 'SET_INPUT':
// 			return {
// 				...state,
// 				inputAnswers: [...state.inputAnswers, action.payload],
// 			};
// 		case 'RESET_QUIZ':
// 			return { fillInTheBlankInitialState };
// 		default:
// 			throw new Error();
// 	}
// };
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
	// const [fillInTheBlankState, fillInTheBlankDispatch] = useReducer(
	// 	fillInTheBlankReducer,
	// 	fillInTheBlankInitialState,
	// );

	const [inputValues, setInputValues] = useState<any[]>(
		Array(numberOfInputs).fill({ value: '' }),
	);

	const handleChange = (i: any, e: any) => {
		let newInputValues = [...inputValues];
		newInputValues[i].value = e.target.value;
		setInputValues(newInputValues);
	};
	console.log({ inputValues });
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
				{inputValues.map((element, index) => {
					console.log({ element, index });
					return (
						<StyledInput
							key={index}
							type='text'
							name={`input${index}`}
							value={element.value || ''}
							onChange={(e) => handleChange(index, e)}
						/>
					);
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
