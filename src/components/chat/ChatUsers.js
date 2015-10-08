import React from 'react';

class ChatUsers extends React.Component {
  render() {
    return (
      <div className="chat-users">
        <ul>
          {
            Object.keys(this.props.users).map(user => {
              return (
                <li key={user}>
                  {user}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default ChatUsers;
