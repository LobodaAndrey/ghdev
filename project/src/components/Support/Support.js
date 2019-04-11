import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Support.scss';
import { connect } from 'react-redux';
import axios from 'axios';
import * as firebase from 'firebase/app';

export class Support extends Component {

	constructor() {
		super()
		this.state = {
			inputValue: "",
			textAreaValue: "",
			email: "",
			isFormSended: false
		}
	}

	componentDidMount() {
		var user = firebase.auth().currentUser;
		if (user) {
			this.setState({
				email: user.email
			})
		}
	}


	inputRef = React.createRef();
	textareaRef = React.createRef();

	handlerChange = () => {
		this.setState({
			inputValue: this.inputRef.current.value,
			textAreaValue: this.textareaRef.current.value
		})
	}

	send = (e) => {
		e.preventDefault(); 
			if (this.state.inputValue && this.state.textAreaValue) {
				this.setState(() => {
					return {
						isFormSended: true
					}
				 });

				 const newQuestion = {
					head: this.state.inputValue,
					body: this.state.textAreaValue,
					email: this.state.email
				}

				 axios
					.post('https://ghproject-1.firebaseio.com/support.json', newQuestion)
					.then((res) => {
						console.log(res)
					})
			} else {
				alert("Пожалуйста, заполните все поля")
			}
	}

    render() {
				const{inputValue, textAreaValue, isFormSended} = this.state
        return (
            <React.Fragment>
                {!isFormSended &&
                <div className="container">
										{<h3 className="support-header">Если у вас есть какие-то вопросы о работе сервиса, заполните форму ниже, мы обязательно ответим</h3>}
										<div className="row">
                    <form className="support-form-body" onSubmit={this.handleSubmit}>
										<div className="input-field col m6">
											<input ref={this.inputRef} onChange={this.handlerChange} className="message-theme" type="text" value={inputValue} id="head" maxLength="70"/>
											<label htmlFor="head">Тема обращения:</label>
      						  </div>
									<br />
									<div className="row">
										<div className="input-field col s12">
											<textarea ref={this.textareaRef} id="messageBody" onChange={this.handlerChange} value={textAreaValue} className="materialize-textarea message-body" maxLength="1000"></textarea>
											<label htmlFor="messageBody">Текст обращения: </label>
										</div>
									</div>
									<button onClick={this.send} className="waves-effect waves-light btn" type="submit">Отправить</button>
							</form>    
							</div>  
                </div>
                }
								{isFormSended &&
									<div className="container thanks-screen">
									<p className="thanks-message">Спасибо за обращение, мы постараемся ответить в ближайшее время</p>
									<Link className="thanks-link" to="/">Вернуться на главную</Link>
									</div>      
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Support)