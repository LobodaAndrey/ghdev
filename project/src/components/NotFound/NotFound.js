import React, { Component } from 'react';
import './NotFound.scss'

export class NotFound extends Component {

    render() {
        return (
            <h2>Упс, кажется такой страницы нет. Вернитесь на <a href="/">главную</a></h2>
        );
    }
}
