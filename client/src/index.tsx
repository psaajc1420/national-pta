import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

const httpLink = createHttpLink({
	// eslint-disable-next-line no-undef
	uri: `${process.env.REACT_APP_HOST}/graphql`
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<HashRouter>
					<App />
				</HashRouter>
			</ThemeProvider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
