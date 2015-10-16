import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as chatActions from '../../actions/chatActions';
import ChatLogin from './ChatLogin';
import ChatMessages from './ChatMessages';
import ChatUsers from './ChatUsers';
import ChatControls from './ChatControls';

import '../../stylesheets/chat.scss';

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
    if (!this.props.loggedIn) {
      return (
        <div className="chat-container">
          <ChatLogin
            onSubmit={this.enterChat}
            errors={this.props.errors}
            waitingForResponse={this.props.waitingForResponse} />
        </div>
      );
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

Chat.propTypes = {
  enterChat: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  waitingForResponse: PropTypes.bool,
  errors: PropTypes.array,
  messages: PropTypes.array,
  users: PropTypes.object
};

export default connect(
  (state) => { return state.chat; },
  (dispatch) => { return bindActionCreators(chatActions, dispatch); }
)(Chat);
