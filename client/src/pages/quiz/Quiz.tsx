// @ts-nocheck
import { createContext, useEffect, useReducer, useState } from 'react';
// import { useTheme } from '@emotion/react';
import { Box, Button, Layout, Text, Todo } from '../../components';
import { CategoryTab } from './components';
import { CATEGORIES, CATEGORIES_ARR } from '../../constants/category-constants';
import { QuizWelcome } from './views/welcome';
import PrivacyAndSafety from './views/privacy-and-safety';

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
				return (
					<div>
						{quizState.currentCategory}
						{quizState.currentAgeGroup}
					</div>
				);
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
