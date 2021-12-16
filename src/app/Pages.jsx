import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { Converter } from '../features/converter/Converter';
import { Teams, Team } from '../features/teams/Teams';
import { UsersList } from '../features/users/UserList';
import { NoMatch } from '../components/NoMatch';
import { Shop } from '../features/shop/Shop';
import { Clicker } from '../features/clicker/Clicker';
import { Todos } from '../features/todos/Todos';

const HomePage = () => (
  <div>
    Welcome to my super App <Outlet />
  </div>
);

export const Pages = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: 'Donetsk Shakhter', description: 'Team from Ukraine' },
    { id: 2, name: 'Real Madrid', description: 'Team from Spain' },
  ]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="users" element={<UsersList />} />
        <Route path="shop" element={<Shop />} />
        <Route path="currencyConverter" element={<Converter />} />
        <Route path="clicker" element={<Clicker />} />
        <Route path="todos" element={<Todos />} />

        <Route
          path="teams"
          element={<Teams teams={teams} setTeams={setTeams} />}
        >
          <Route path=":teamId" element={<Team teams={teams} />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
