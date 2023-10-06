import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <div>
      <About />
    </div>
  );
}
