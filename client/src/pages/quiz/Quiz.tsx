import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
// import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Text, Todo } from '../../components';
import { QuestionCategoryTab } from './components';
import { CATEGORIES, CATEGORIES_ARR } from '../../constants/category-constants';
import { UserWelcome, QuizWelcome } from './views/welcome';
import PrivacyAndSafety from './views/privacy-and-safety';
import Communication from './views/communication';
import MediaChoices from './views/media-choices';
import HealthAndWellness from './views/health-and-wellness';
import KeepingOurPromises from './views/keeping-our-promises';
import { AuthContext } from '../../App';

const quizInitialState = {
	guestAdult: '',
	guestChild: '',
	currentCategory: '',
	currentAgeGroup: '',
	answers: {},
	todos: [],
};

export const QuizAnswersContext = createContext(quizInitialState);

const quizReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'USER_WELCOME':
			return { ...state, currentCategory: 'logged-in-welcome' };
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
		case 'SET_AGE_GROUP':
			return {
				...state,
				currentAgeGroup: action.payload.ageGroup,
			};
		case 'SET_ANSWER':
			return {
				...state,
				answers: {
					...state.answers,
					[action.payload.id]: action.payload.value,
				},
			};
		case 'SET_GUEST_NAMES':
			return {
				...state,
				guestAdult: action.payload.guestAdult,
				guestChild: action.payload.guestChild,
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
	console.log({ quizState });
	const [loggedIn, setLoggedIn] = useState(false);
	// @ts-expect-error
	const { authState } = useContext(AuthContext);
	// TODO: Add useEffect matching currentCategory and currentAgeGroup to child

	useEffect(() => {
		if (authState?.loggedIn) {
			setLoggedIn(true);
		}
	}, [authState?.loggedIn]);

	useEffect(() => {
		if (loggedIn) {
			quizDispatch({ type: 'USER_WELCOME' });
		} else {
			quizDispatch({ type: 'GUEST_WELCOME' });
		}
	}, [loggedIn]);

	const renderCurrentCategoryHeading = (param: string) => {
		switch (param) {
			case CATEGORIES.loginWelcome.name:
				return null;
			case CATEGORIES.welcome.name:
				return null;
			case CATEGORIES.privacyAndSafety.name:
				return CATEGORIES.privacyAndSafety.label;
			case CATEGORIES.communication.name:
				return CATEGORIES.communication.label;
			case CATEGORIES.mediaChoices.name:
				return CATEGORIES.mediaChoices.label;
			case CATEGORIES.healthAndWellness.name:
				return CATEGORIES.healthAndWellness.label;
			case CATEGORIES.keepingOurPromises.name:
				return CATEGORIES.keepingOurPromises.label;
			default:
				return null;
		}
	};

	const renderCurrentUI = (param: string) => {
		switch (param) {
			case CATEGORIES.loginWelcome.name:
				return <UserWelcome />;
			case CATEGORIES.welcome.name:
				return <QuizWelcome />;
			case CATEGORIES.privacyAndSafety.name:
				return <PrivacyAndSafety />;
			case CATEGORIES.communication.name:
				return <Communication />;
			case CATEGORIES.mediaChoices.name:
				return <MediaChoices />;
			case CATEGORIES.healthAndWellness.name:
				return <HealthAndWellness />;
			case CATEGORIES.keepingOurPromises.name:
				return <KeepingOurPromises />;
			default:
				return null;
		}
	};

	return (
		<QuizAnswersContext.Provider
			value={{
				// @ts-expect-error
				quizState,
				quizDispatch,
			}}
		>
			<>
				<Box
					width='100%'
					height='100%'
					center
					backgroundColor='inherit'
					position='relative'
				>
					<Todo />
					<QuizCircles
						src={
							window.location.origin +
							'/assets/illustrations/Quiz Beginning Circles.svg'
						}
						alt='Background circles'
					/>
					<Box
						width='80%'
						maxWidth={1000}
						height='100%'
						maxHeight={1100}
						center
						backgroundColor='#ffffff'
						borderRadius={75}
						zIndex={98}
						margin='100px 0'
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
								<QuestionCategoryTab
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
										quizState.currentCategory === CATEGORIES.welcome.name ||
										quizState.currentCategory === CATEGORIES.loginWelcome.name
									}
									label={e.label}
								>
									<img
										width={85}
										height={85}
										src={window.location.origin + e.quizIconSvg}
										alt={e.label}
									/>
								</QuestionCategoryTab>
							))}
						</Box>
						{''}
						<Box
							width='100%'
							height='100%'
							center
							flexDirection='column'
							backgroundColor='transperant'
						>
							<Box
								width='auto'
								height='auto'
								display='block'
								backgroundColor='transperant'
								margin='50px 0 0 0'
							>
								<Text typography='heading' size={24}>
									{renderCurrentCategoryHeading(quizState.currentCategory)}
								</Text>
							</Box>
							{renderCurrentUI(quizState.currentCategory)}
						</Box>
					</Box>
				</Box>
			</>
		</QuizAnswersContext.Provider>
	);
};

export default Quiz;

const QuizCircles = styled('img')(() => ({
	width: 1220,
	height: 'auto',
	position: 'fixed',
	top: '54%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	zIndex: 0,
}));
