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
    this.sendMessage = this.sendMessage.bind(this);
    this.messageChanged = this.messageChanged.bind(this);
  }
  componentWillUpdate() {
    const chatMessages = this.refs.chatMessages;
    if (chatMessages) {
      this.scrollHeight = chatMessages.scrollHeight;
      this.scrollTop = chatMessages.scrollTop;
    }
  }
  componentDidUpdate() {
    const chatMessages = this.refs.chatMessages;
    if (chatMessages) {
      chatMessages.scrollTop = this.scrollTop + (chatMessages.scrollHeight - this.scrollHeight);
    }
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
  sendMessage(e) {
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
              <button className="pure-button">Join chat</button>
            </div>
          </fieldset>
        </form>
      );
    }

    if (this.props.waitingForResponse) {
      return <div>Entering ...</div>;
    }

    const { users, messages } = this.props;
    return (
      <div className="chat-container">
        <div className="chat-messages" ref="chatMessages">
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
        <div className="chat-users">
          <ul>
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
        </div>
        <form onSubmit={this.sendMessage} className="pure-form chat-controls">
          <fieldset>
              <input type="text" placeholder="Say something..."
                value={this.state.message}
                onChange={this.messageChanged} />
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
