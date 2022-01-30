import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages';

export default (
	<Switch>
		<Route component={Home} exact path='/' />
	</Switch>
);
