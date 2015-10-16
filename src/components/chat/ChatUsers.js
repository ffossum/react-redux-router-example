import React, {PropTypes} from 'react';

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

ChatUsers.propTypes = {
  users: PropTypes.object.isRequired
};

export default ChatUsers;
