import React from 'react';
import {Input} from 'react-bootstrap';

class ChatControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };

    this.messageChanged = this.messageChanged.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  messageChanged(e) {
    this.setState({
      message: e.target.value
    });
  }
  sendMessage(e) {
    const message = this.state.message;
    this.state.message = '';
    this.props.onSubmit(message, e);
  }
  render() {
    return (
      <form onSubmit={this.sendMessage} className="chat-controls">
        <Input
          autoFocus
          type="text"
          placeholder="Say something..."
          value={this.state.message}
          onChange={this.messageChanged} />
      </form>
    );
  }
}

export default ChatControls;