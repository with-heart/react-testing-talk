import React from 'react'
import {Tab} from './tab'
import './tabs.css'

export class Tabs extends React.Component {
  state = {
    currentIndex: 0,
  }

  setCurrentIndex = currentIndex => this.setState({currentIndex})

  render() {
    const {contents} = this.props
    const {currentIndex} = this.state

    const tabs = contents.map((_, index) => (
      <Tab
        key={index}
        onClick={() => this.setCurrentIndex(index)}
        active={index === currentIndex}
      >
        {index + 1}
      </Tab>
    ))

    return (
      <div className="Tabs-container">
        <div className="Tabs-header">{tabs}</div>
        <div className="Tabs-content">{contents[currentIndex]}</div>
      </div>
    )
  }
}
