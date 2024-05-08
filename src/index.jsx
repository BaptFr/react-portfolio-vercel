import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout.jsx';
import Home from './pages/home-page/home.jsx';
import Projects from './pages/projets-page/projects.jsx';
import Cv from './pages/cv-page/cv.jsx';
import NotFound from './pages/error-page/not-found.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="*" element={<NotFound />} />   
          </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);