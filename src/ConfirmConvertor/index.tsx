import * as React from 'react'
import Convertor from '@aximario/react-convertor'

interface Props {
  mode: 'exist' | 'display'
  children: [React.ReactNode, React.ReactNode]
  onEdit?: Function
  onConfirm?: Function
  onCancel?: Function
}

const { useState } = React

export default function ConfirmConvertor (props: Props) {
  const { mode, children, onEdit, onConfirm, onCancel } = props
  const [convert, setConvert] = useState(false)
  const [loading, setLoading] = useState(false)
  async function handleEdit () {
    if (onEdit) {
      await onEdit()
    }
    setConvert(true)
  }
  async function handleConfirm () {
    if (onConfirm) {
      setLoading(true)
      await onConfirm()
      setLoading(false)
    }
    setConvert(false)
  }
  async function handleCancel () {
    if (onCancel) {
      await onCancel()
    }
    setConvert(false)
  }
  return (
    <Convertor
      convert={convert}
      mode={mode}
    >
      <div>
        {children[0]}
        <span onClick={handleEdit}>编辑</span>
      </div>
      <div>
        {children[1]}
        <Convertor convert={loading}>
          <span onClick={handleConfirm}>确定</span>
          <span>loading</span>
        </Convertor>
        <span onClick={handleCancel}>取消</span>
      </div>
    </Convertor>
  )
}

ConfirmConvertor.defaultProps = {
  mode: 'exist'
}
