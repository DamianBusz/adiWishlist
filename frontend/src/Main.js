import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import StartView from './views/Start';
import DetailsView from './views/Details';
import Wishlist from './views/Wishlist';
import Menu from './components/Menu';

function Main() {
	return (
		<Fragment>
			<Switch>
				<Menu>
					<Route exact path="/" render={(match) => <StartView {...match} />} />
					<Route exact path="/details/:productID" render={(match) => <DetailsView {...match} />} />
					<Route exact path="/search/:searchString" render={(match) => <StartView {...match} />} />
					<Route exact path="/wishlist" render={(match) => <Wishlist {...match} />} />
				</Menu>
			</Switch>
			{/* <Switch>
				<Route path="/test" component={Menu}>
				<Route path="x" render={(match) => <DetailsView {...match} />} />
				<Route exact path="/search/:searchString" render={(match) => <StartView {...match} />} />
				</Route>
				<Route exact path="/" render={(match) => <StartView {...match} />} />
				<Route exact path="/details/:productID" render={(match) => <DetailsView {...match} />} />
				<Route exact path="/search/:searchString" render={(match) => <StartView {...match} />} />
				<Route exact path="/wishlist" render={(match) => <Wishlist {...match} />} />
			</Switch> */}
		</Fragment>
	);
}

export default Main;
