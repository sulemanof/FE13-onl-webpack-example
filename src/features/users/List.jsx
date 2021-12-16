import React from 'react';

const User = ({ id, name }) => (
  <li key={id} id={id}>
    {name}
  </li>
);

export const List = ({ users }) => {
  const usersList = users.map((user, index) => (
    <User key={index} id={user.id} name={user.name} />
  ));

  return <ul>{usersList}</ul>;
};
