import React from 'react';
import { Routes,Route } from "react-router-dom";
import PageRender from './PageRender';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        <Route path="/:page" element={<PageRender/>} />
        <Route path="/:page/:id" element={<PageRender/>} />
      </Routes>
    </div>
  );
}

export default App;
