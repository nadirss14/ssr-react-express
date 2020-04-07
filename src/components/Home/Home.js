import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<>
				<div>
					<label>User or Email: </label>
					<input type='text' placeholder='youremail@domain.com'></input>
				</div>
				<div>
					<label>Password: </label>
					<input type='password'></input>
				</div>
				<div>
					<button>Enter</button>
				</div>
			</>
		);
	}
}

export default Home;
