import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.scss';
import Home from './pages/home/home';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
