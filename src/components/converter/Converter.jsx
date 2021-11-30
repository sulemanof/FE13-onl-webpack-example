import React, { useState } from 'react';

const Currency = ({ name, value, calculate }) => {
  const onChange = (ev) => {
    calculate({ [name.toLowerCase()]: ev.target.value });
  };

  return (
    <fieldset>
      <legend>{`Enter currency in ${name}`}</legend>
      <input type="number" value={value} onChange={onChange}/>
    </fieldset>
  );
};

const exchangeRate = 0.88;
const defaultState = { usd: '', eur: '' };

export const Converter = () => {
  const [state, setState] = useState(defaultState);

  const calculate = ({ usd, eur }) => {
    setState({
      usd: eur ? eur / exchangeRate : usd || defaultState.usd,
      eur: usd ? usd * exchangeRate : eur || defaultState.eur,
    });
  };

  return (
    <div>
      <Currency name="USD" value={state.usd} calculate={calculate} />
      <Currency name="EUR" value={state.eur} calculate={calculate} />
    </div>
  );
};
