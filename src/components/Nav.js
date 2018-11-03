import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';




export default class Nav extends Component {

	constructor() {
		super();
		this.state = {
			filterType: '',
			filterOrder: '',
		};
	}

	filterChange(filterType, filterOrder) {
		this.props.filterType(filterType);
		this.props.filterOrder(filterOrder);

		this.setState({
			filterType: filterType,
			filterOrder: filterOrder
		});
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.search(this.query.value);
		e.currentTarget.reset();
	}

	render() {
		return (
			<div className="navigation">
				<div className="component">
					<div className="nav-inner">
						<NavLink exact to={'/'} >
							<h1 className="navigation__title">Cake List</h1>
						</NavLink>
						
						<NavLink exact to={'/add'} className="add-cake">+</NavLink>
					</div>
				</div>
			</div>
		);
	}
}
