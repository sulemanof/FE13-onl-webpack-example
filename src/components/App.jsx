import React, { useState } from 'react';
import {
  Route, Routes, Link, useParams,
} from 'react-router-dom';
import { Converter } from './converter/Converter';
import { Form } from './Form';
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

const UsersList = () => {
  const [users, setUsers] = useState(defaultUsers);

  const addUser = (name) => {
    setUsers((prevUsers) => ([...prevUsers, { name, id: userCounter }]));
    userCounter += 1;
  };

  return (
    <div>
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
};

export const App = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: 'Donetsk Shakhter' },
    { id: 2, name: 'Real Madrid' },
  ]);

  return (
    <div className="wrapper">
      <nav>
        <Link to="/">Home</Link>
        <Link to="users">Users</Link>
        <Link to="shop">Shop</Link>
        <Link to="currencyConverter">Currency</Link>
        <Link to="teams">Teams</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="users" element={<UsersList />} />
        <Route path="shop" element={<div>Shop</div>} />
        <Route path="currencyConverter" element={<Converter />} />

        <Route path="/teams/*" element={<TeamsPage teams={teams} setTeams={setTeams}/>} />
      </Routes>
    </div>
  );
};

let uniqUserId = 10;

const TeamsPage = ({ teams, setTeams }) => (
    <Routes>
        <Route index element={<Teams teams={teams} setTeams={setTeams} />} />
        <Route path=":teamId" element={<Team teams={teams}/>} />
    </Routes>
);

const Team = ({ teams }) => {
  const params = useParams();

  debugger;

  return <div>{params.teamId}</div>;
};

const Teams = ({ teams, setTeams }) => {
  const addUser = (value) => {
    const newTeam = { id: uniqUserId++, name: value };
    setTeams((users) => [...users, newTeam]);
  };
  return (
    <div>
      <Form addUser={addUser} />
      <ul>
        {teams.map((team) => <li key={team.id}><Link to={`/teams/${team.id}`}>{team.name}</Link></li>)}
      </ul>
      <Routes>
       <Route path=":teamId" element={<Team />} />
      </Routes>
    </div>
  );
};
