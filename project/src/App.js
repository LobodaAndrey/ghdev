import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {BestAuthors} from './components/BestAuthors/BestAuthors';
import About from './components/About/About';
import {Support} from './components/Support/Support';
import {Profile} from './components/Profile/Profile';
import {NotFound} from './components/NotFound/NotFound';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import CreateArticle from './components/articles/CreateArticle';
import ArticleDetails from './components/articles/ArticleDetails'

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      users: []
		};
	}
	
  render() {
		const {users} = this.state
		
    return (
      <React.Fragment>
				<BrowserRouter>
					<div className="app">
					<Header users={users}/>
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/signup" component={SignUp} />
						<Route path="/signin" component={SignIn} />
						<Route path="/best-authors" component={BestAuthors} />
						<Route path="/about" component={About} /> 
						<Route users={users} path="/support" component={Support} />
						<Route path="/profile" component={Profile} />		
						<Route path="/dashboard" component={Dashboard} />	
						<Route path="/create-article" component={CreateArticle} />		
						<Route path="/article/:id" component={ArticleDetails} />				
						<Route path="*" component={NotFound} />
					</Switch>
					</div>
				</BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
 