import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
   this.setState({
    [name]: value
   })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} type="password" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
