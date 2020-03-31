import React from "react";
import Logo from './assets/images/React-icon.svg'

const app = () => {
  return (
    <div className="app">
      <h1>Welcom reacter</h1>
      <h2>let's the hack beging !</h2>
      <img className="logo" src={Logo} width="100" height="100"/>
    </div>
  );
};

export default app;
