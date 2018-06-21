import React, { Component } from 'react';
import Message from '../Message/Message';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageInput: ''
    };
  }
  changeInputMessage = e => {
    const value = e.target.value;
    this.setState(state => ({
      messageInput: value
    }));
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter') {
      let message = [{ text: this.state.messageInput }];
      this.setState(state => ({
        messages: this.state.messages.concat(message),
        messageInput: ''
      }));
    }
  };
  render() {
    return (
      <div className="chat">
        {this.state.messages.map((msg, index) => {
          return <Message key={index} text={msg.text} />;
        })}
        <input
          className="input-message"
          type="text"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
