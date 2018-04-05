import React from 'react';
import { Redirect } from 'react-router-dom';

import Logo from '../assets/images/logo.png';

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      fireRedirect: false
    }
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState({ fireRedirect: true })
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="content-wrapper main-wrapper">
          <form className="form_wrapper" onSubmit={this.submitForm}>
            <label className="form_label" htmlFor="passcode">Passcode</label>
            <input className="form_input" name="passcode" id="passcode" type="text" required />
            <button className="form_button" type="submit">Enter</button>
          </form>
          <img src={Logo} alt="logo" className="logo"/>
        </div>
        {this.state.fireRedirect && (
          <Redirect to="/gameday" />
        )}
      </div>
    );
  }
}

export default Main;
