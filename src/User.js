import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
	
	return (
		<tr>
			<td>{props.user.username}</td>
			<td>
			{
				(props.showQtyOfGames) ?
				(props.user.qtyGames) :
				('*')
			}
			</td>
		</tr>
	);
	
}

User.propTypes = {
	user: PropTypes.object.isRequired,
	showQtyOfGames: PropTypes.bool.isRequired
}

export default User;