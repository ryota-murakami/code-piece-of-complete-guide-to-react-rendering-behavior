import React, { ReactElement } from 'react'
import NormalChildComponent from './NormalChildComponent'

function ParentComponent(): ReactElement {
  const onClick = () => {
    // eslint-disable-next-line no-console
    console.log('Button clicked')
  }

  const data = { a: 1, b: 2 }

  return <NormalChildComponent onClick={onClick} data={data} />
}

export default ParentComponent
