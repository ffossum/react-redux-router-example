import React from 'react';
import classnames from 'classnames';

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

    const {errors} = this.props;
    const usernameTaken = errors.some(value => value === 'username taken');
    return (
      <form onSubmit={this.props.onSubmit.bind(this, this.state.username)} className="pure-form pure-form-aligned">
        <div className="pure-control-group">
          <label htmlFor="username-input">Username:</label>
          <input type="text" className={classnames({'has-error': usernameTaken})} id="username-input"
            placeholder="Username"
            value={this.state.username}
            onChange={this.usernameChanged} />
            {
              () => {
                if (usernameTaken) {
                  return <small> Username already taken.</small>;
                }
              }()
            }
        </div>
        <div className="pure-controls">
          <button className="pure-button">Join chat</button>
        </div>
      </form>
    );
  }
}

export default ChatLogin;