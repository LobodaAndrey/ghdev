import React, { Component } from 'react';
import './BestAuthors.scss';
import axios from 'axios';

export class BestAuthors extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: []
		}
	}

	componentDidMount() {
		axios.get(`https://ghproject-1.firebaseio.com/users/users.json`)
			.then(res => {
				this.setState({
					users: res.data
				});
			});
	}


	render() {
		let { users } = this.state;
		users = users.sort((a, b) => {
			let c = a.balance,
				d = b.balance;

			users = c > d ? -1 : 1;
			return users
		});

		return (
			<React.Fragment>
				<h3 className="s-header top-5">ТОП 5 авторов</h3>
				<ul className="winners-list">
					{users.map((user, index) => (
						index < 10 ?
							<li key={user.id} className="winner-item">
								<span className="place">{index + 1}.</span>
								<span className="winner-name">{user.login}</span>
								<span className="winner-balance">{user.total_likes}</span>
							</li>
							: null
					)
					)}
				</ul>
			</React.Fragment>
		);
	}
}
