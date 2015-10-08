import React from 'react';

class ChatLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    this.usernameChanged = this.usernameChanged.bind(this);
  }
  usernameChanged(e) {
    this.setState({
      username: e.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit.bind(this, this.state.username)} className="pure-form pure-form-aligned">
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
      </form>
    );
  }
}

export default ChatLogin;