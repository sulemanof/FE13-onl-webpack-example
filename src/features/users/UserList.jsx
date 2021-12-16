import React, { useState } from 'react';
import { MyForm } from '../../components/Form';
import { List } from './List';

let userCounter = 3;

const defaultUsers = [
  {
    id: 1,
    name: 'Natalia',
  },
  {
    id: 2,
    name: 'Maria',
  },
];

export const UsersList = () => {
  const [users, setUsers] = useState(defaultUsers);

  const addUser = (name) => {
    setUsers((prevUsers) => [...prevUsers, { name, id: userCounter }]);
    userCounter += 1;
  };

  return (
    <div>
      <MyForm onSubmit={addUser} />
      <List users={users} />
    </div>
  );
};
