import React, { Component } from 'react';
import { Button } from '../../components/button/Button';

export class Home extends Component {
  render() {
    return (
      <div>
        <Button name="Dima" surname="Kostin" active={true} />
        <Button name="Alexey" surname="Navalny" />
        <Button name="Vova" surname="Putin" />
      </div>
    );
  }
}
