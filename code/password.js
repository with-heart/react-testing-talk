import React from 'react'
import {render} from 'react-testing-library'

export class Password extends React.Component {
  state = {
    password: '',
  }

  onPasswordChange = ({target: {value}}) => this.setState({password: value})

  render() {
    const {onSubmit} = this.props
    const {password} = this.state

    return (
      <form onSubmit={e => (e.preventDefault(), onSubmit({password}))}>
        <h6>Hey! We need to verify your password before continuing.</h6>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={this.onPasswordChange}
            value={password}
          />
        </div>

        <button type="submit">Continue</button>
      </form>
    )
  }
}
