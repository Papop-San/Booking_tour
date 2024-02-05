import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index'
import LoginPage from './pages/loginpage'
import Layout from './pages/layout'
import Navbar from './components/Navbar'
import RegisterPage from './pages/register';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/'element ={<Layout/> }/>
          <Route index element={<IndexPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/regis' element={<RegisterPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;