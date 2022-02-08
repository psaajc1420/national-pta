import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Register, Quiz } from './pages';

export default (
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={Login} path='/login' />
		<Route component={Register} path='/register' />
		<Route component={Quiz} path='/quiz' />
	</Switch>
);
