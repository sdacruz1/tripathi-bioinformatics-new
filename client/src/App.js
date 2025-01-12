import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Timeline from './Timeline';
import Output from './Output';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Timeline" element={<Timeline />} />
        <Route path="/Output" element={<Output />} />
      </Routes>
    </div>
  );
}

export default App;
