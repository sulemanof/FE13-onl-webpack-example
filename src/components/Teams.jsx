import React from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { Form } from './Form';

let uniqUserId = 2;

export const Team = ({ teams }) => {
  const params = useParams();

  const team = teams.find((t) => String(t.id) === params.teamId);

  return (
    <div style={{ backgroundColor: 'green' }}>
      <h1>{team.name}</h1>
      <p>{team.description}</p>
    </div>
  );
};

export const Teams = ({ teams, setTeams }) => {
  const addUser = (value) => {
    const newTeam = { id: uniqUserId += 1, name: value };
    setTeams((users) => [...users, newTeam]);
  };

  return (
    <div>
      <Form addUser={addUser} />
      <ul>
        {teams.map((team) => <li key={team.id}><Link to={`/teams/${team.id}`}>{team.name}</Link></li>)}
      </ul>
      <Outlet />
    </div>
  );
};
