import React from 'react'
import {Tab} from './tab'
import './tabs.css'

export class Tabs extends React.Component {
  state = {
    currentTab: 0,
  }

  setCurrentTab = currentTab => this.setState({currentTab})

  render() {
    const {contents} = this.props
    const {currentTab} = this.state

    const tabs = contents.map((_, index) => (
      <Tab
        key={index}
        onClick={() => this.setCurrentTab(index)}
        active={index === currentTab}
      >
        {index + 1}
      </Tab>
    ))

    return (
      <div className="Tabs-container">
        <div className="Tabs-header">{tabs}</div>
        <div className="Tabs-content">{contents[currentTab]}</div>
      </div>
    )
  }
}
