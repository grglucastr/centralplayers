import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {

	state = {
		showQtyOfGames: false
	}

	handleToggleShow = () => {
		this.setState(oldState => ({
			showQtyOfGames: !oldState.showQtyOfGames			
		}));
	}

	render() {
		
		const { users } = this.props;
		return(
			<div>
				<h3>Users Worldwide</h3>

				<button onClick={this.handleToggleShow}>
					{ this.state.showQtyOfGames ? 'Hide' : 'Show' } Qty of Games
				</button>

				<table className="table table-striped">
					<thead>
						<tr>
							<th>Username</th>
							<th>Qty Games</th>
						</tr>
					</thead>

					<tbody>

						{
							users.map(user => (
								<User key={user.username} user={user} showQtyOfGames={this.state.showQtyOfGames} />
							))
						}
					</tbody>
				</table>
			</div>
		)
	}

}

UserList.propTypes = {
	users: PropTypes.array.isRequired
}

export default UserList;