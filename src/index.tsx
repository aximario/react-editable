import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Editable from './Editable'

function request (log: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(log)
      resolve(log)
    }, 1000)
  })
}

ReactDOM.render(
  <Editable
    mode="display"
    onConfirm={() => {
      return request('hhhhh')
    }}
  >
    2
    <input />
  </Editable>,
  document.getElementById('root')
)
