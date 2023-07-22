import React from 'react';
import './css/App.css';
import { Routes, Route } from "react-router-dom";
import Join from './board/Join';
import Login from './board/Login';
import Write from './board/Write';

function App() {
  return (
    <section>
    <Routes>
    <Route path="/join" element={<Join/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/write" element={<Write/>}/>
    </Routes>
    </section>

  );
}

export default App;