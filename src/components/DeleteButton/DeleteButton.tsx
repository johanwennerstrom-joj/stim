import { useState } from 'react'
import { Delete } from '../../ui/Icons'

const DeleteButton = ({ handler }: { handler: () => void }) => {
  const [confirm, setConfirm] = useState(false)

  const handleDelete = () => {
    if (!confirm) {
      setConfirm(true)
      return
    }
    handler()
  }

  return (
    <Delete
      click={handleDelete}
      color={confirm ? 'rgba(255, 202, 16)' : '#000'}
    />
  )
}

export default DeleteButton
