import React from 'react'

export class Logic extends React.Component {
  calculateComplexResult = (a, b) => a + b

  render() {
    const {a, b} = this.props

    return (
      <div>
        <h2>Result</h2>
        <div>{this.calculateComplexResult(a, b)}</div>
      </div>
    )
  }
}
