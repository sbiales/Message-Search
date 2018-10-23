import React, { Component } from "react";
import ConversationList from "./conversationlist/conversationlist";
import Messages from "./messages/messages";
import Header from "./headers/header";
import Search from "./headers/search";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sources: [],
			test: String.raw`C:\Users\siena\Documents\FacebookMessages10.15.18\jsontest\FilipBicki_9568d55edb`,
			data: null,
		};
	}

	getJSON() {
		return null;
	}

	render() {
		return(
			<div className="wrapper">
		      <ConversationList />
		      <Messages />
		      <Header />
		      <Search />
		    </div>
		);
	}
};

export default App;