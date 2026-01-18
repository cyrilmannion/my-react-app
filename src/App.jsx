
// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Dashboard from './assets/pages/Dashboard.jsx';
import Login from './assets/pages/Login.jsx';

export default function App() {
  return (
    <BrowserRouter>
      {/* (Optional) a tiny nav to jump between pages while you build */}
      <nav style={{ padding: 12, display: 'flex', gap: 12, borderBottom: '1px solid #ddd' }}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        {/* Redirect the root to /login by default */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Your pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<div style={{ padding: 16 }}>404 — Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}