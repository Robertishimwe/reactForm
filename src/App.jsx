import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Registration from './components/registration';
import './styles/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
