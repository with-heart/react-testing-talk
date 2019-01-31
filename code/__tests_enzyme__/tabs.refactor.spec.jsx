import React from 'react'
import {mount} from 'enzyme'
import {Tabs} from '../tabs.refactor'

test('setCurrentTab sets the current index state', () => {
  const wrapper = mount(<Tabs contents={[]} />)

  expect(wrapper.state('currentIndex')).toBe(0)
  wrapper.instance().setCurrentIndex(1)
  expect(wrapper.state('currentIndex')).toBe(1)
})

test('Tabs renders Tab with index value + 1', () => {
  const wrapper = mount(<Tabs contents={['a']} />)

  expect(wrapper.find('Tab').props().children).toBe(1)
})
