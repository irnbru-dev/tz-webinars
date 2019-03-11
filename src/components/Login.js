import React from 'react'

class Login extends React.Component {
  state = {
    redirectToPrevRoute: false,
    username: '',
    password: '',
  }
  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state

    this.props.logIn(
      {
        username,
        password,
      },
      () => {
        this.setState({ redirectToPrevRoute: true })
      }
    )
  }
  handleChange = e => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.datatarget.fieldName

    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  render() {
    const { username, password, redirectToPrevRoute } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name={username}
            placeholder={'Имя'}
            value={username}
            onChange={this.handleChange}
          />
          <input
            data-field-name={password}
            placeholder={'Пароль'}
            value={password}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default Login
