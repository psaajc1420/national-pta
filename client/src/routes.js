import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
	Home,
	Login,
	Register,
	Account,
	Quiz,
	About,
	Terms,
	Privacy,
} from './pages';

export default (
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={Login} path='/login' />
		<Route component={Register} path='/register' />
		<Route component={Account} path='/account' />
		<Route component={Quiz} path='/quiz' />
		<Route component={About} path='/about' />
		<Route component={Terms} path='/terms' />
		<Route component={Privacy} path='/privacy' />
	</Switch>
);
