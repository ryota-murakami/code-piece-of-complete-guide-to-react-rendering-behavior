import React from 'react'
import NormalChildComponent from './NormalChildComponent'

function ParentComponent() {
  const onClick = () => {
    console.log('Button clicked')
  }

  const data = { a: 1, b: 2 }

  return <NormalChildComponent onClick={onClick} data={data} />
}

export default ParentComponent
