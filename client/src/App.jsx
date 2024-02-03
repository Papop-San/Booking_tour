import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
