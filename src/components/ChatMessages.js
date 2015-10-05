import React from 'react';

class ChatMessages extends React.Component {
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
  render() {
    const { messages } = this.props;
    return (
      <div className="chat-messages-container">
        <div className="chat-messages" ref="chatMessages">
          {
            messages.map((msg, index) => {
              if (msg.user) {
                return (
                  <div key={index} className="chat-message">
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
      </div>
    );
  }
}

export default ChatMessages;
