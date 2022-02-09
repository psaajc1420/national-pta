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
		case 'GUEST_BEGIN':
			return {
				currentCategory: 'privacy-and-safety',
				currentAgeGroup: '5-8',
				currentQuestion: 1,
			};
		default:
			throw new Error();
	}
};

const Quiz = () => {
	// const theme = useTheme();
	const [loggedIn, setLoggedIn] = useState(false);
	const [state, dispatch] = useReducer(reducer, initialState);
	// const [currentAgeGroup, setCurrentAgeGroup] = useState('');
	// TODO: Add useEffect matching currentCategory and currentAgeGroup to child

	useEffect(() => {
		if (!loggedIn) {
			dispatch({ type: 'GUEST_WELCOME' });
		}
	}, [loggedIn]);

	const beginQuizGuest = () => {
		dispatch({ type: 'GUEST_BEGIN' });
	};

	const renderCurrentUI = (param: string) => {
		switch (param) {
			case CATEGORIES.welcome.name:
				return <QuizWelcome beginQuizGuest={beginQuizGuest} />;
			default:
				return null;
		}
	};

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
							<CategoryTab key={e.id} ringColor={e.color} onClick={() => {}}>
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
