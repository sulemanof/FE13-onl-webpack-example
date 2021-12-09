import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const NoMatch = () => {
  const [showWarning, setShowWarning] = useState(true);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setShowWarning(false);
    }, 5000);

    setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
  }, []);

  return showWarning ? (
    <div>
      <h2>Sorry, the page you are looking for is not found!</h2>
      <h3>You wil be redirected to home page in {timer} seconds</h3>
    </div>
  ) : <Navigate to="/" replace={true} />;
};
