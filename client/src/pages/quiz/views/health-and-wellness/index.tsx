import { useContext, useEffect, useReducer } from 'react';
import { AGE_GROUPS, CATEGORIES } from '../../../../constants';
import { Box } from '../../../../components';
import { QuizAnswersContext } from '../../Quiz';
import { QuestionButtonsGroup, TestQuestion } from '../../components';

const initialState = {
	questionFlow: [],
	currentQuestionIndex: 0,
};

const healthAndWellnessReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'NEXT_QUESTION':
			return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
		case 'PREVIOUS_QUESTION':
			return { ...state, currentQuestionIndex: state.currentQuestionIndex - 1 };
		case 'SET_FLOW':
			return { ...state, questionFlow: action.payload };
		case 'RESET':
			return { initialState };
		default:
			throw new Error();
	}
};

const index = () => {
	// @ts-expect-error
	const { quizState, quizDispatch } = useContext(QuizAnswersContext);
	const [state, dispatch] = useReducer(healthAndWellnessReducer, initialState);

	const handleNextQuestion = () => dispatch({ type: 'NEXT_QUESTION' });

	const handlePreviousQuestion = () => dispatch({ type: 'PREVIOUS_QUESTION' });

	useEffect(() => {
		if (quizState.currentAgeGroup === AGE_GROUPS.group5to8.name) {
			dispatch({
				type: 'SET_FLOW',
				payload: [19, 20, 21, 22],
			});
		} else {
			dispatch({
				type: 'SET_FLOW',
				payload: [19, 20, 21, 22],
			});
		}
	}, []);

	useEffect(() => {
		if (
			state.currentQuestionIndex !== 0 &&
			state.currentQuestionIndex > state.questionFlow.length - 1
		) {
			quizDispatch({
				type: 'SET_CATEGORY',
				payload: { category: CATEGORIES.keepingOurPromises.name },
			});
		}

		if (state.currentQuestionIndex === -1) {
			quizDispatch({
				type: 'SET_CATEGORY',
				payload: { category: CATEGORIES.mediaChoices.name },
			});
		}
	}, [state.currentQuestionIndex, state.questionFlow.length]);

	return (
		<Box
			width='100%'
			height='100%'
			display='flex'
			flexDirection='column'
			padding='25px 100px 75px 100px'
			borderBox
			backgroundColor='transperant'
			overflow='break-word'
		>
			<TestQuestion slideId={state.questionFlow[state.currentQuestionIndex]} />
			<QuestionButtonsGroup
				onContinue={handleNextQuestion}
				onPrevious={handlePreviousQuestion}
				onSave={() => {}}
			/>
		</Box>
	);
};

export default index;
