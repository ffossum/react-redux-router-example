import React from 'react';
import classnames from 'classnames';

import '../../stylesheets/spinner.scss';

class ChatLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    this.usernameChanged = this.usernameChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  usernameChanged(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.props.waitingForResponse) {
      this.props.onSubmit(this.state.username, e);
    }
  }
  render() {

    const {errors} = this.props;
    const usernameTaken = errors.some(value => value === 'username taken');
    return (
      <form onSubmit={this.onSubmit} className="pure-form pure-form-aligned">
        <div className="pure-control-group">
          <label htmlFor="username-input">Username:</label>
          <input type="text" className={classnames({'has-error': usernameTaken})} id="username-input"
            placeholder="Username"
            value={this.state.username}
            onChange={this.usernameChanged} />
            {
              usernameTaken ?
                <small> Username already taken.</small> : null
            }
        </div>
        <div className="pure-controls">
          <button className="pure-button">Join chat</button>
          {
            this.props.waitingForResponse ?
              <div className="spinner"></div> : null
          }
        </div>
      </form>
    );
  }
}

export default ChatLogin;