import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import StartView from './views/Start/index';
import DetailsView from './views/Details/index';
function Main() {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/" render={(match) => <StartView {...match} />} />
				<Route exact path="/details/:productID" render={(match) => <DetailsView {...match} />} />
			</Switch>
		</Fragment>
	);
}

export default Main;
