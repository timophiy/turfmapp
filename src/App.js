import React from 'react';
import './App.css';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeUsername(event) {
    this.setState({username: event.target.value});
  }

  changePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert(`Hi, ${this.state.username}`);
    event.preventDefault();
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text"
                     name="username"
                     value={this.state.username}
                     onChange={this.changeUsername}
                     required />
            </div>
            <div>
              <label htmlFor="email">Password</label>
              <input type="password"
                     name="password"
                     value={this.state.password}
                     onChange={this.changePassword}
                     required />
            </div>
            <div>
              <button type="submit">Отправить</button>
              <a href="#">Forgot password?</a>
            </div>
          </fieldset>
        </form>
      </main>
    );
  }
}

export default Test;
