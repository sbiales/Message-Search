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

	componentDidMount() {
	    this.hydrateStateWithLocalStorage();

	    // add event listener to save state to localStorage
	    // when user leaves/refreshes the page
	    window.addEventListener(
	      "beforeunload",
	      this.saveStateToLocalStorage.bind(this)
	    );
	}

	componentWillUnmount() {
	    window.removeEventListener(
	      "beforeunload",
	      this.saveStateToLocalStorage.bind(this)
	    );

	    // saves if component has a chance to unmount
	    this.saveStateToLocalStorage();
	}

	hydrateStateWithLocalStorage() {
	    // for all items in state
	    for (let key in this.state) {
	      // if the key exists in localStorage
	      if (localStorage.hasOwnProperty(key)) {
	        // get the key's value from localStorage
	        let value = localStorage.getItem(key);

	        // parse the localStorage string and setState
	        try {
	          value = JSON.parse(value);
	          this.setState({ [key]: value });
	        } catch (e) {
	          // handle empty string
	          this.setState({ [key]: value });
	        }
	      }
	    }
	}

	saveStateToLocalStorage() {
	    // for every item in React state
	    for (let key in this.state) {
	      // save to localStorage
	      localStorage.setItem(key, JSON.stringify(this.state[key]));
	    }
	}


	render() {
		return(
			<div className="panewrap">
				<div className="wrapper">
			      <ConversationList />
			      <Messages />
			      <Header />
			      <Search />
			    </div>
			</div>
		);
	}
};

export default App;