import React from 'react'
import {mount} from 'enzyme'
import {Tabs} from '../tabs'

test('setCurrentTab sets the current tab index state', () => {
  const wrapper = mount(<Tabs contents={[]} />)

  expect(wrapper.state('currentTab')).toBe(0)
  wrapper.instance().setCurrentTab(1)
  expect(wrapper.state('currentTab')).toBe(1)
})

test('Tabs renders Tab with index value + 1', () => {
  const wrapper = mount(<Tabs contents={['a']} />)

  expect(wrapper.find('Tab').props().children).toBe(1)
})
