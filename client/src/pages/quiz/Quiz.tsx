// @ts-nocheck
import { createContext, useEffect, useReducer, useState } from 'react';
// import { useTheme } from '@emotion/react';
import { Box, Button, Layout, Text, Todo } from '../../components';
import { CategoryTab } from './components';
import { CATEGORIES, CATEGORIES_ARR } from '../../constants/category-constants';
import { QuizWelcome } from './views/welcome';
import PrivacyAndSafety from './views/privacy-and-safety';
import Communication from './views/communication';

const quizInitialState = {
	currentCategory: '',
	currentAgeGroup: '',
	answers: {
		1: null,
		2: null,
		3: null,
		4: null,
		5: null,
		6: null,
		7: null,
		8: null,
		9: null,
		10: null,
		11: null,
		12: null,
		13: null,
		14: null,
		15: null,
		16: null,
		17: null,
		18: null,
		19: null,
		20: null,
		21: null,
		22: null,
		23: null,
		24: null,
		25: null,
		26: null,
		27: null,
		28: null,
		29: null,
		30: null,
		31: null,
		32: null,
		33: null,
		34: null,
		35: null,
		36: null,
		37: null,
		38: null,
		39: null,
		40: null,
		41: null,
		42: null,
		43: null,
		44: null,
		45: null,
		46: null,
		47: null,
		48: null,
		49: null,
		50: null,
		51: null,
		52: null,
		53: null,
		54: null,
		55: null,
		56: null,
		57: null,
		58: null,
		67: null,
		69: null,
		70: null,
	},
};

export const QuizAnswersContext = createContext(quizInitialState);

const quizReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'GUEST_WELCOME':
			return { ...state, currentCategory: 'welcome' };
		case 'SET_CATEGORY_AND_AGE':
			return {
				...state,
				currentCategory: action.payload.category,
				currentAgeGroup: action.payload.ageGroup,
			};
		case 'SET_CATEGORY':
			return {
				...state,
				currentCategory: action.payload.category,
			};
		case 'SET_ANSWER':
			return {
				...state,
				answers: {
					...state.answers,
					[action.payload.id]: action.payload.value,
				},
			};
		case 'RESET_QUIZ':
			return { quizInitialState };
		default:
			throw new Error();
	}
};
const Quiz = () => {
	// const theme = useTheme();
	const [quizState, quizDispatch] = useReducer(quizReducer, quizInitialState);
	const [loggedIn, setLoggedIn] = useState(false);
	// TODO: Add useEffect matching currentCategory and currentAgeGroup to child

	useEffect(() => {
		if (!loggedIn) {
			quizDispatch({ type: 'GUEST_WELCOME' });
		}
	}, [loggedIn]);

	const renderCurrentUI = (param: string) => {
		switch (param) {
			case CATEGORIES.welcome.name:
				return <QuizWelcome />;
			case CATEGORIES.privacyAndSafety.name:
				return <PrivacyAndSafety />;
			case CATEGORIES.communication.name:
				return <Communication />;
			case CATEGORIES.mediaChoices.name:
				return (
					<div>
						{quizState.currentCategory}
						{quizState.currentAgeGroup}
					</div>
				);
			case CATEGORIES.healthAndWellness.name:
				return (
					<div>
						{quizState.currentCategory}
						{quizState.currentAgeGroup}
					</div>
				);
			case CATEGORIES.keepingOurPromises.name:
				return (
					<div>
						{quizState.currentCategory}
						{quizState.currentAgeGroup}
					</div>
				);
			default:
				return null;
		}
	};
	console.log({ quizState });
	return (
		<QuizAnswersContext.Provider
			value={{
				quizState,
				quizDispatch,
			}}
		>
			<Layout>
				<Box
					width='100%'
					height='100%'
					center
					backgroundColor='inherit'
					position='relative'
				>
					<Todo />
					<Box
						width='80%'
						height='80%'
						center
						backgroundColor='#ffffff'
						borderRadius={75}
						maxWidth={850}
					>
						<Box
							width={75}
							height='100%'
							display='flex'
							flexDirection='column'
							justify='space-around'
							align='center'
							position='absolute'
							left={-35}
							top={0}
							right={0}
							bottom={0}
							backgroundColor='transparent'
						>
							{CATEGORIES_ARR.map((e) => (
								<CategoryTab
									key={e.id}
									ringColor={e.color}
									onClick={() => {
										quizDispatch({
											type: 'SET_CATEGORY',
											payload: { category: e.name },
										});
									}}
									selectedTab={quizState.currentCategory === e.name}
									disabled={
										quizState.currentCategory === CATEGORIES.welcome.name
									}
									label={e.label}
								>
									<img src={window.location.origin + e.iconSvg} alt={e.label} />
								</CategoryTab>
							))}
						</Box>
						{''}

						{renderCurrentUI(quizState.currentCategory)}
					</Box>
				</Box>
			</Layout>
		</QuizAnswersContext.Provider>
	);
};

export default Quiz;
