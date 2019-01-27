export class Login extends React.Component {
  state = {
    username: '',
    password: '',
    isSubmitting: false,
  }

  onChange = ({target: {name, value}}) => this.setState({[name]: value})

  onSubmit = values => this.props.onSubmit(values)

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            onChange={this.onChange}
            value={this.state.username}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={this.onChange}
            value={this.state.password}
          />
        </div>

        <button type="submit" disabled={this.state.isSubmitting}>
          Log in
        </button>
      </form>
    )
  }
}
