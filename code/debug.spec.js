import React from 'react'
import {render} from 'react-testing-library'

test('debug', () => {
  const {debug} = render(
    <div>
      <ul>
        <li>Hello</li>
        <li>World</li>
      </ul>
    </div>,
  )
  debug()
})
