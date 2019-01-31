import React from 'react'
import {fetchStuff} from './api'

export class Stuff extends React.Component {
  state = {
    stuff: null,
    error: null,
    loading: false,
  }

  onSuccess = ({stuff}) => this.setState({stuff, loading: false})
  onError = ({message}) => this.setState({error: message, loading: false})
  fetch = () => {
    this.setState(() => ({error: false, loading: true}))
    fetchStuff()
      .then(this.onSuccess)
      .catch(this.onError)
  }

  render() {
    const {stuff, error, loading} = this.state

    return (
      <div>
        {stuff && <div>Thanks for waiting. Here's your stuff: {stuff}</div>}{' '}
        {error && <div>*ERROR: {error}*</div>}
        {!stuff && (
          <button disabled={loading} onClick={this.fetch}>
            {error ? 'Re-fetch Stuff' : loading ? 'Loading' : 'Fetch Stuff'}
          </button>
        )}
      </div>
    )
  }
}
