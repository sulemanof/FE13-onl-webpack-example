import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import { ModalDialogue } from '../../components/Modal';
import { deleteTodo, changeDescription } from './todosSlice';

export const Todo = ({ label, id, description }) => {
  const [showModal, setShowModal] = useState(false);
  const [isChangeDescription, setChangeDescription] = useState(false);
  const [customDescription, setCustomDescription] = useState(description);
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTodo(id));
  };

  const onShowDetails = () => setShowModal(true);
  const onCloseDetails = () => setShowModal(false);
  const onSave = () => {
    dispatch(changeDescription({ id, description: customDescription }));
    setChangeDescription(false);
  };

  const body = (
    <div>
      <Button onClick={() => setChangeDescription(true)}>
        Change description
      </Button>
      {isChangeDescription ? (
        <textarea
          value={customDescription}
          onChange={(e) => setCustomDescription(e.target.value)}
        />
      ) : (
        <p>{description}</p>
      )}
    </div>
  );

  return (
    <li>
      <span>{label}</span>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onShowDetails}>Show details</button>
      {showModal && (
        <ModalDialogue
          title="Todo details"
          body={body}
          onClose={onCloseDetails}
          onSave={onSave}
        />
      )}
    </li>
  );
};
