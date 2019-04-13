import React from 'react'
import Modal from './Modal'
import './styles/DeleteBadgeModal.css'

const DeleteBadgeModal = ({ isOpen, onClose, onDeleteBadge }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="DeleteBadgeModal">
        <h1>Are you sure?</h1>
        <p>You are about to delete this badge</p>

        <div>
          <button onClick={onClose} className="btn btn-info">Cancel</button>
          <button onClick={onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteBadgeModal
