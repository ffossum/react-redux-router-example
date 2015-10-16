import React, {PropTypes} from 'react';
import {Input, Button} from 'react-bootstrap';

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
    const isWaiting = this.props.waitingForResponse;

    return (
      <form className="chat-login" onSubmit={this.onSubmit}>
        <Input
          type="text"
          label="Username:"
          placeholder="Username"
          readOnly={isWaiting}
          help={usernameTaken ? 'Username already taken.' : ''}
          bsStyle={usernameTaken ? 'error' : null}
          onChange={this.usernameChanged} />

        <Button
          type="submit"
          bsStyle="primary"
          disabled={isWaiting}>
          {isWaiting ? 'Joining...' : 'Join chat'}
        </Button>
      </form>
    );
  }
}

ChatLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  waitingForResponse: PropTypes.bool,
  errors: PropTypes.array
};

export default ChatLogin;