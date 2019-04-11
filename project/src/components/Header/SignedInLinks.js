import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
	
	return (
		<ul className="right signed-in-links">
			<li><p>Привет, {props.profile.nickname}</p>
			</li>
			<li className="valign-wrapper"><NavLink to='/create-article'>
			Добавить статью</NavLink>
			</li>
			<li><NavLink to='/support'> Поддержка</NavLink>
			</li>
			<li><button className="logout-btn" onClick={props.signOut}> Выйти </button>
			</li>			
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
}
export default connect(null, mapDispatchToProps)(SignedInLinks)