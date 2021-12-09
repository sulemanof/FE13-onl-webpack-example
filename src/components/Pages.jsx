import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { Converter } from './converter/Converter';
import { Teams, Team } from './Teams';
import { UsersList } from './UserList';
import { NoMatch } from './shared/NoMatch';
import { Shop } from './Shop';

const HomePage = () => <div>Welcome to my super App <Outlet /></div>;

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

        <Route path="teams" element={<Teams teams={teams} setTeams={setTeams}/>}>
          <Route path=":teamId" element={<Team teams={teams}/>} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
