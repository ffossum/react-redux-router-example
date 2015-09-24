import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form className="pure-form pure-form-aligned">
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="email-input">Email address</label>
            <input type="email" className="form-control" id="email-input" placeholder="Enter email" />
          </div>
          <div className="pure-control-group">
            <label htmlFor="password-input">Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password" />
          </div>
          <div className="pure-controls">
            <button className="pure-button pure-button-primary">Submit</button>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Login;
