import React from 'react';
import './About.scss'

const About = () => {
	return (
		<React.Fragment>
			<h2 className="about-s-header">О нас</h2>
			<p className="about-s-text">Привет, я - выпускной проект Geekhub. В этом приложении можно регистрироваться (внезапно, правда?), писать статьи, а на этой странице можно наблюдать за их списком, а также читать "подробнее", нажав на статью. Для бэкэнда использовался firebase, для фронтенда - Реакт и Редакс. Для оформления - MaterilazeCss</p>
		</React.Fragment>
	)
}

export default About

