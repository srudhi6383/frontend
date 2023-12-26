import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import MyNotices from './components/MyNotices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mynotices" element={<MyNotices />} />
      </Routes>
    </Router>
  );
}

export default App;
