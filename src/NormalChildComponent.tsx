import React, { ReactElement } from 'react'

function NormalChildComponent({ onClick, data }): ReactElement {
  return (
    <div>
      <p>data.a: {data.a}</p>
      <p>data.b: {data.b}</p>
      <button onClick={onClick}>onClick</button>
    </div>
  )
}

export default NormalChildComponent
