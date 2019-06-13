import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ConfirmConvertor from './ConfirmConvertor'

function request (log: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(log)
      resolve(log)
    }, 1000)
  })
}

ReactDOM.render(
  <ConfirmConvertor
    mode="display"
    onConfirm={() => {
      return request('hhhhh')
    }}
  >
    2
    <input />
  </ConfirmConvertor>,
  document.getElementById('root')
)
