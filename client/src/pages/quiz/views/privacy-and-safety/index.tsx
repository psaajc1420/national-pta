import { useContext, useEffect, useReducer } from 'react';
import { AGE_GROUPS, CATEGORIES } from '../../../../constants';
import { Box } from '../../../../components';
import {
	PrivacyAndSafetyQ1,
	PrivacyAndSafetyQ2,
	PrivacyAndSafetyQ3,
	PrivacyAndSafetyQ4,
	TestQuestion,
} from './questions';
import { QuizAnswersContext } from '../../Quiz';

const initialState = {
	questionFlow: [],
	currentQuestionIndex: 0,
};

const privacySafetyReducer = (state: any, action: any) => {
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
	const [state, dispatch] = useReducer(privacySafetyReducer, initialState);

	const handleNextQuestion = () => dispatch({ type: 'NEXT_QUESTION' });

	const handlePreviousQuestion = () => dispatch({ type: 'PREVIOUS_QUESTION' });

	const QUESTIONS = {
		1: (
			<PrivacyAndSafetyQ1
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
		2: (
			<PrivacyAndSafetyQ2
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
		3: (
			<PrivacyAndSafetyQ3
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
		4: (
			<PrivacyAndSafetyQ4
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
		5: (
			<TestQuestion
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
	};

	useEffect(() => {
		if (quizState.currentAgeGroup === AGE_GROUPS.group5to8.name) {
			dispatch({
				type: 'SET_FLOW',
				payload: [
					QUESTIONS[5],
					QUESTIONS[1],
					QUESTIONS[2],
					QUESTIONS[3],
					QUESTIONS[4],
				],
			});
		} else {
			dispatch({
				type: 'SET_FLOW',
				payload: [QUESTIONS[1], QUESTIONS[2], QUESTIONS[3], QUESTIONS[4]],
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
				payload: { category: CATEGORIES.communication.name },
			});
		}

		if (state.currentQuestionIndex === -1) {
			quizDispatch({
				type: 'SET_CATEGORY',
				payload: { category: CATEGORIES.welcome.name },
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
			{state.questionFlow[state.currentQuestionIndex]}
		</Box>
	);
};

export default index;
