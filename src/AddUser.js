import React, {Component} from 'react';
import PropTypes from 'prop-types';


class AddUser extends Component{
	
	state = {
		user: {
			firstName: '',
			lastName: '',
			username: '',
			qtyGames: 0
		},
		usernameAvailable: true,
	}

	handleInputChange = event => {
		const { name, value } = event.target;

		this.setState(oldState => ({
			...oldState,
			user: {
				...oldState.user,
				[name]: value
			}
		}));
	}

	handleSubmit = event => {
		event.preventDefault();
		const { username } = this.state.user;
		const usernameAvailable = this.isUsernameAvailable(username);

		if(usernameAvailable){
			this.addNewUser(this.state.user)
			this.clearFields();
		}

		this.setState({usernameAvailable});
	}

	addNewUser = newUser => {
		this.props.OnAddUser(newUser);
	}

	isDisable = () => {
		const { firstName, lastName, username } = this.state.user;
		return firstName === '' || lastName === '' || username === ''
	}

	isUsernameAvailable = username => {
		const { users } = this.props;

		for (let user of users){
			if(user.username === username){
				return false;
			}
		}
		return true;
	}

	clearFields = () => {
		this.setState({
			user: {
				firstName: '',
				lastName: '',
				username: '',
				qtyGames: 0
			}});
	}

	render(){

		const { firstName, lastName, username }  = this.state.user;

		return(
			<div>
				<h2>Add new User</h2>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input 
							type="text"
							name="firstName"
							placeholder="First Name"
							value={firstName}
							onChange={this.handleInputChange}
						/>

						<input
							type="text"
							name="lastName"
							placeholder="Last Name"
							value={lastName}
							onChange={this.handleInputChange}
						 />

						 <input
								type="text"
								name="username"
								placeholder="Username"
								value={username}
								onChange={this.handleInputChange}
						 />

						<button disabled={this.isDisable()}>Add</button>
					</div>

					{
						(this.state.usernameAvailable) ? '' :
						(<p className='error'>This username is not available</p>)
					}
				</form>
			</div>
		)
	}
}

AddUser.propTypes = {
	users:  PropTypes.array.isRequired,
	OnAddUser: PropTypes.func.isRequired
}

export default AddUser;