import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import ForgotPassword from './Pages/ForgotPasswordImg';
import Tasks from './Pages/Tasks';
import Menu from './Pages/Menu';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Tasks" element={<Tasks />} />
      <Route path="/Menu" element={<Menu />} />
    </Routes>
  );
};

export default App;
