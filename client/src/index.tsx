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
	uri: 'http://0.0.0.0:1337/graphql',
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
