import { createContext, useReducer } from 'react';
import routes from './routes';
import './index.css';
import { Layout } from './components';

const authInitialState = {
	loggedIn: false,
	jwt: '',
	identifier: '',
};

export const AuthContext = createContext(authInitialState);

const authReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				loggedIn: true,
				jwt: action.payload.jwt,
				identifier: action.payload.identifier,
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
	return (
		// @ts-expect-error
		<AuthContext.Provider value={{ authState, authDispatch }}>
			<Layout loggedIn={authState.loggedIn} identifier={authState.identifier}>
				{routes}
			</Layout>
		</AuthContext.Provider>
	);
}

export default App;
