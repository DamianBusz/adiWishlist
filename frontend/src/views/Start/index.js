import React, { Fragment, Component } from 'react';

import {
	changeInputValue as changeInputValueAction,
	getAdidasSuggestion as getAdidasSuggestionAction
} from '../../store/actions/searchbarActions';

import { connect } from 'react-redux';
import ProductList from '../../components/ProductList';
import Menu from '../../components/Menu';

class StartView extends Component {
	onChangeSearchbarValue = (event) => {
		const { changeInputValue } = this.props;
		changeInputValue(event.target.value);
	};

	onSubmitSearch = (event) => {
		const { getAdidasSuggestion, value, changeInputValue } = this.props;
		event.preventDefault();
		if (value.length > 1) {
			getAdidasSuggestion(value);
			changeInputValue('');
		}
	};
	render() {
		const { products, loadingAdidasData, value, lastSearchName } = this.props;
		return (
			<Fragment>
				<Menu />
				<div className="black-background ">
					<div className="container">
						<div className="row ">
							<div className="col-md-8">
								<span className="article-text">Lets find your product</span>
							</div>
							<div className="col-md-4">
								<div className="search-form">
									<form onSubmit={this.onSubmitSearch}>
										<input type="text" value={value} onChange={this.onChangeSearchbarValue} />
										<button>
											<span>></span>
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				{loadingAdidasData ? (
					<ProductList data={products} lastSearchName={lastSearchName} cssStyle="slide-out-left" />
				) : (
					<ProductList data={products} lastSearchName={lastSearchName} cssStyle="slide-in-right" />
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	value: state.getIn([ 'searchbar', 'value' ]),
	products: state.getIn([ 'searchbar', 'products' ]),
	loadingAdidasData: state.getIn([ 'searchbar', 'loadingAdidasData' ]),
	lastSearchName: state.getIn([ 'searchbar', 'lastSearchName' ])
});

const mapDispatchToProps = (dispatch) => ({
	changeInputValue: (value) => dispatch(changeInputValueAction(value)),
	getAdidasSuggestion: (name) => dispatch(getAdidasSuggestionAction(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartView);
