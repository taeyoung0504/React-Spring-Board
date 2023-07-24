import React from 'react';
import './css/App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Join from './board/Join';
import Login from './board/Login';
import Write from './board/Write';
import Main from './board/Main';
import List from './board/List';

function App() {
  const isLoggedIn = JSON.parse(sessionStorage.getItem("userData")) ? true : false;

  return (
    <section>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board/list" element={<List />} />
        <Route
          path="/board/write"
          element={isLoggedIn ? <Write /> : <Navigate to="/login" />}
        />
      </Routes>
    </section>
  );
}

export default App;
