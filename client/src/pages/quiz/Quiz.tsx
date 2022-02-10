import { useEffect, useReducer, useState } from 'react';
// import { useTheme } from '@emotion/react';
import { Box, Layout } from '../../components';
import { CategoryTab } from './components';
import { CATEGORIES, CATEGORIES_ARR } from '../../constants/category-constants';
import { QuizWelcome } from './views/welcome';

const initialState = {
	currentCategory: '',
	currentAgeGroup: '',
	currentQuestion: 0,
};

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case 'GUEST_WELCOME':
			return { currentCategory: 'welcome' };
		case 'SET_CATEGORY_AGE_QUESTION':
			return {
				currentCategory: action.payload.category,
				currentAgeGroup: action.payload.ageGroup,
				currentQuestion: action.payload.question,
			};
		case 'SET_CATEGORY':
			return {
				...state,
				currentCategory: action.payload.category,
			};
		default:
			throw new Error();
	}
};

const Quiz = () => {
	// const theme = useTheme();
	const [state, dispatch] = useReducer(reducer, initialState);
	const [loggedIn, setLoggedIn] = useState(false);
	// const [currentAgeGroup, setCurrentAgeGroup] = useState('');
	// TODO: Add useEffect matching currentCategory and currentAgeGroup to child

	useEffect(() => {
		if (!loggedIn) {
			dispatch({ type: 'GUEST_WELCOME' });
		}
	}, [loggedIn]);

	const beginQuiz = (category: string, ageGroup: string, question: number) => {
		dispatch({
			type: 'SET_CATEGORY_AGE_QUESTION',
			payload: { category: category, ageGroup: ageGroup, question: question },
		});
	};

	const renderCurrentUI = (param: string) => {
		switch (param) {
			case CATEGORIES.welcome.name:
				return <QuizWelcome beginQuizGuest={beginQuiz} />;
			case CATEGORIES.privacyAndSafety.name:
				return (
					<div>
						{state.currentCategory}
						{state.currentAgeGroup}
						{state.currentQuestion}
					</div>
				);
			case CATEGORIES.communication.name:
				return (
					<div>
						{state.currentCategory}
						{state.currentAgeGroup}
						{state.currentQuestion}
					</div>
				);
			case CATEGORIES.mediaChoices.name:
				return (
					<div>
						{state.currentCategory}
						{state.currentAgeGroup}
						{state.currentQuestion}
					</div>
				);
			case CATEGORIES.healthAndWellness.name:
				return (
					<div>
						{state.currentCategory}
						{state.currentAgeGroup}
						{state.currentQuestion}
					</div>
				);
			case CATEGORIES.keepingOurPromises.name:
				return (
					<div>
						{state.currentCategory}
						{state.currentAgeGroup}
						{state.currentQuestion}
					</div>
				);
			default:
				return null;
		}
	};
	console.log({ state });
	return (
		<Layout>
			<Box width='100%' height='100%' center backgroundColor='inherit'>
				<Box
					width='80%'
					height='80%'
					center
					backgroundColor='#ffffff'
					borderRadius={75}
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
									dispatch({
										type: 'SET_CATEGORY',
										payload: { category: e.name },
									});
								}}
								selectedTab={state.currentCategory === e.name}
								disabled={state.currentCategory === CATEGORIES.welcome.name}
							>
								<img src={window.location.origin + e.iconSvg} alt={e.label} />
							</CategoryTab>
						))}
					</Box>
					{''}
					{renderCurrentUI(state.currentCategory)}
				</Box>
			</Box>
		</Layout>
	);
};

export default Quiz;
