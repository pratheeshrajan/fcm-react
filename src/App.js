import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import firebase from './firebase'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
	
    }
  }
  
  componentDidMount() {
	const messaging = firebase.messaging();
	messaging.requestPermission().then(()=>{
		return messaging.getToken()
	}).then(token=>{
		console.log('Token :', token)
	}).catch(()=>{
		console.log("Error");
	})
  }

  render() {
	return (
		<div>
			Test
		</div>
	)
  }
}
