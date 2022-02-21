import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	// useQuery,
	// gql,
} from '@apollo/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

const client = new ApolloClient({
	// eslint-disable-next-line no-undef
	uri: `${process.env.REACT_APP_HOST}/graphql`,
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
