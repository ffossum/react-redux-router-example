import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as chatActions from '../actions/chatActions';
import ChatLogin from './ChatLogin';
import ChatMessages from './ChatMessages';
import ChatUsers from './ChatUsers';
import ChatControls from './ChatControls';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.enterChat = this.enterChat.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  enterChat(username, e) {
    e.preventDefault();
    const {enterChat} = this.props;
    if (username.trim() !== '') {
      enterChat(username.trim());
    }
  }
  sendMessage(message, e) {
    e.preventDefault();

    const {sendMessage} = this.props;
    sendMessage(message);
  }
  render() {
    if (!this.props.username) {
      return (
        <ChatLogin onSubmit={this.enterChat} />
      );
    }

    if (this.props.waitingForResponse) {
      return <div>Entering ...</div>;
    }

    const {users, messages} = this.props;
    return (
      <div className="chat-container">
        <ChatMessages messages={messages} />
        <ChatUsers users={users} />
        <ChatControls onSubmit={this.sendMessage} />
      </div>
    );
  }
}

export default connect(
  (state) => { return state.chat; },
  (dispatch) => { return bindActionCreators(chatActions, dispatch); }
)(Chat);
