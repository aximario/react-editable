import * as React from 'react'
import Convertor from '@aximario/react-convertor'
import Loading from '@aximario/react-loading'

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

  const row = {
    display: 'flex',
    alignItems: 'center'
  }

  const text = {
    color: '#1890ff',
    marginLeft: '10px'
  }

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
      <div style={row}>
        {children[0]}
        <span style={text} onClick={handleEdit}>编辑</span>
      </div>
      <div style={row}>
        {children[1]}
        <Convertor convert={loading}>
          <span style={text} onClick={handleConfirm}>确定</span>
          <Loading style={{ marginLeft: '10px' }} color={text.color} />
        </Convertor>
        <span style={text} onClick={handleCancel}>取消</span>
      </div>
    </Convertor>
  )
}

ConfirmConvertor.defaultProps = {
  mode: 'exist'
}
