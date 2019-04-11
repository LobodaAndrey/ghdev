import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

const Header = (props) => {
	const {auth, profile} = props;
	const links = auth.uid ? <SignedInLinks profile={profile} />: <SignedOutLinks/>
        return (
            <React.Fragment>
							<header className="main-header">
								<div className="navbar-fixed">
									<nav className="nav-wrapper grey darken-3 h-nav">
										<div className="container">
											<Link to='/' className="brand-logo left">
											MMA expert</Link>
											{ links }
										</div>
									</nav>	
								</div>			
							</header>
            </React.Fragment>
        );
}

const mapStateToProps = (state) => {

	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(Header)