import { useContext, useEffect, useReducer } from 'react';
import { AGE_GROUPS, CATEGORIES } from '../../../../constants';
import { Box } from '../../../../components';
import {
	MediaChoicesQ1,
	MediaChoicesQ2,
	MediaChoicesQ3,
	MediaChoicesQ4,
	MediaChoicesQ5,
	MediaChoicesQ6,
	MediaChoicesQ7,
	MediaChoicesQ8,
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
			<MediaChoicesQ1
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
		2: (
			<MediaChoicesQ2
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
		3: (
			<MediaChoicesQ3
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
		4: (
			<MediaChoicesQ4
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
		5: (
			<MediaChoicesQ5
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
		6: (
			<MediaChoicesQ6
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
		7: (
			<MediaChoicesQ7
				onHandleNextQuestion={handleNextQuestion}
				onHandlePreviousQuestion={handlePreviousQuestion}
			/>
		),
		8: (
			<MediaChoicesQ8
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
					QUESTIONS[1],
					QUESTIONS[2],
					QUESTIONS[3],
					QUESTIONS[4],
					QUESTIONS[5],
					QUESTIONS[6],
					QUESTIONS[7],
					QUESTIONS[8],
				],
			});
		} else {
			dispatch({
				type: 'SET_FLOW',
				payload: [
					QUESTIONS[1],
					QUESTIONS[2],
					QUESTIONS[3],
					QUESTIONS[4],
					QUESTIONS[5],
					QUESTIONS[6],
					QUESTIONS[7],
					QUESTIONS[8],
				],
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
				payload: { category: CATEGORIES.healthAndWellness.name },
			});
		}

		if (state.currentQuestionIndex === -1) {
			quizDispatch({
				type: 'SET_CATEGORY',
				payload: { category: CATEGORIES.communication.name },
			});
		}
	}, [state.currentQuestionIndex, state.questionFlow.length]);

	return (
		<Box
			width='100%'
			height='100%'
			display='flex'
			flexDirection='column'
			padding='75px 100px'
			borderBox
			backgroundColor='transperant'
			overflow='break-word'
		>
			{state.questionFlow[state.currentQuestionIndex]}
		</Box>
	);
};

export default index;
