import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import App from './App.jsx';
import MovieDetail from './pages/MovieDetail';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router >
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/detail/:id" element={<MovieDetail/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);


