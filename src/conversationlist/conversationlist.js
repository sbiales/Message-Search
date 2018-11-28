import React, { Component } from "react";
import './conversationlist.css';

class ConversationNode extends Component {
  render() {
    return(
      <button className="conversationnode">
        {this.props.value}
      </button>
    );
  }
}

class ConversationList extends Component {
  renderConversation(name) {
    document.documentElement.style.setProperty("--rowNum", 4);
    return (<ConversationNode value={name} />);
  }

  render() {
    return (
  		<div className="conversationcontainer" id="conversationlist">
        <div className="conversationwrapper">
    	    {this.renderConversation("Test1")}
          {this.renderConversation("Test2")}
          {this.renderConversation("Test3")}
          {this.renderConversation("Test4")}
        </div>
      </div>
    );
  }
};

export default ConversationList;
