import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as chatActions from '../actions/chatActions';

class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      message: ''
    };

    this.enterChat = this.enterChat.bind(this);
    this.usernameChanged = this.usernameChanged.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.messageChanged = this.messageChanged.bind(this);
  }
  enterChat(e) {
    e.preventDefault();
    const {enterChat} = this.props;
    if (this.state.username.trim() !== '') {
      enterChat(this.state.username.trim());
    }
  }
  usernameChanged(e) {
    this.setState({
      username: e.target.value
    });
  }
  addMessage(e) {
    e.preventDefault();
    const message = this.state.message;
    this.state.message = '';

    const { sendMessage } = this.props;
    sendMessage(message);
  }
  messageChanged(e) {
    this.setState({
      message: e.target.value
    });
  }
  render() {
    if (this.props.waitingForResponse) {
      return <div>Entering ...</div>;
    }

    if (!this.props.username) {
      return (
        <form onSubmit={this.enterChat} className="pure-form pure-form-aligned">
          <fieldset>
            <div className="pure-control-group">
              <label htmlFor="username-input">Username</label>
              <input type="text" className="form-control" id="username-input"
                placeholder="Username"
                value={this.state.username}
                onChange={this.usernameChanged} />
            </div>
            <div className="pure-controls">
              <button className="pure-button">Enter chat</button>
            </div>
          </fieldset>
        </form>
      );
    }

    const { users, messages } = this.props;
    return (
      <div>
        <h1>Chat</h1>
        <ul className="chat-users">
          {
            Object.keys(users).map(user => {
              return (
                <li key={user}>
                  {user}
                </li>
              );
            })
          }
        </ul>
        <div className="chat-messages">
          {
            messages.map((msg, index) => {
              if (msg.user) {
                return (
                  <div key={index}>
                    <span>{msg.user}: </span>
                    <span>{msg.text}</span>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="chat-info-message">
                    {msg.text}
                  </div>
                );
              }

            })
          }
        </div>
        <form onSubmit={this.addMessage} className="pure-form">
          <fieldset>
            <div className="pure-control-group">
              <input type="text" placeholder="Say something..."
                value={this.state.message}
                onChange={this.messageChanged} />
            </div>
            <div className="pure-controls">
              <button className="pure-button">Send</button>
            </div>
          </fieldset>
        </form>

      </div>
    );
  }
}

export default connect(
  (state) => { return state.chat; },
  (dispatch) => { return bindActionCreators(chatActions, dispatch); }
)(Chat);
