import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './todosSlice';
import { MyForm } from '../../components/Form';
import { Todo } from './Todo';

export const Todos = ({ hideForm }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  return (
    <div>
      {!hideForm && (
        <MyForm
          labelPlaceholder="Enter todo name..."
          label="Name"
          description="Description"
          descriptionPlaceholder="Enter todo description..."
          onSubmit={handleAddTodo}
        />
      )}
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};
