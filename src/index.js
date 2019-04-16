import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";
import firebase from "./firebase";
import {BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


class Root extends React.Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        console.log('user', user)
        if (user) {
          this.props.history.push("/");
        }
      });
    }
  
    render() {
      return (
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      );
    }
  }
  
  const RootWithAuth = withRouter(Root);
  
  ReactDOM.render(
    <Router>
      <RootWithAuth />
    </Router>,
    document.getElementById("root")
  );registerServiceWorker();
