import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react/cjs/react.development';
import { Button, Dropdown } from 'react-bootstrap';
import { App } from './components/App';
import { Clock } from './components/shared/clock/Clock';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const Test = () => {
  const [showClock, setShowClock] = useState(false);
  const [test, setTest] = useState('');

  return (
    <div>
      <Button className="showClock" variant="success" onClick={() => setShowClock(!showClock)}>Show clock</Button>
      <Button variant="danger" onClick={() => setTest(`${test}a`)}>Add a</Button>
      {showClock && <Clock test={test}/>}
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Masha</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Vasya</Dropdown.Item>
          <Dropdown.Item onClick={() => console.log('say hi from petya')}>Petya</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'))
