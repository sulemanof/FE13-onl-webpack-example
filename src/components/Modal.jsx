import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const ModalDialogue = ({ title, body, onClose, onSave }) => (
  <Modal show={true} centered>
    <Modal.Header closeButton onHide={onClose}>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>

    <Modal.Body>{body}</Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
      <Button variant="primary" onClick={onSave}>
        Save changes
      </Button>
    </Modal.Footer>
  </Modal>
);
