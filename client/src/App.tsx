import { createContext, useEffect, useReducer } from 'react';
import routes from './routes';
import './index.css';
import { Layout } from './components';
import { useGetUser } from './hooks';

const authInitialState = {
	loggedIn: false,
	user: {},
};

export const AuthContext = createContext(authInitialState);

const authReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return {
				...state,
				loggedIn: true,
				user: action.payload,
			};
		case 'LOGOUT':
			return { authInitialState };
		default:
			throw new Error();
	}
};

// eslint-disable-next-line require-jsdoc
function App() {
	const [authState, authDispatch] = useReducer(authReducer, authInitialState);
	const user = useGetUser();
	console.log({ user });
	useEffect(() => {
		if (user?.data?.me?.user) {
			authDispatch({
				type: 'LOGIN_USER',
				payload: user?.data?.me?.user,
			});
		}
	}, [user?.data?.me?.user]);

	return (
		// @ts-expect-error
		<AuthContext.Provider value={{ authState, authDispatch }}>
			<Layout
				loggedIn={authState.loggedIn}
				identifier={
					authState.user?.name ||
					authState.user?.username?.substring(
						0,
						authState.user?.username?.indexOf('@'),
					)
				}
			>
				{routes}
			</Layout>
		</AuthContext.Provider>
	);
}

export default App;
