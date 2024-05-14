import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home-page/home.jsx';
import Layout from './components/layout/layout.jsx';
import Projets from './pages/projets-page/projets.jsx';
import NotFound from './pages/error-page/not-found.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="*" element={<NotFound />} />   
          </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);