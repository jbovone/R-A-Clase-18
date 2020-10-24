import React, { useState } from 'react';
import LoginPage from './views/LoginPage';
import MainView from './views/MainView';

function App() {
  const [login, setLogin] = useState(false);

  return <div className="App">{login ? <MainView /> : <LoginPage />}</div>;
}
//
export default App;
