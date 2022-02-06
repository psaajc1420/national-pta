import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages';
import { Login, Register } from './pages/auth';

export default (
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={Login} path='/login' />
		<Route component={Register} path='/register' />
	</Switch>
);
