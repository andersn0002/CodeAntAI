import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Auth0 from "./components/Auth0";
import Dashboard from './components/Dashboard';
import MainDiv from './styles/MainDiv';
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  AOS.init({
    duration: 800,
    offset: 50
  });

  return (
    <BrowserRouter>
        <MainDiv>
          <Routes>
              <Route exact path="/" element={<Auth0 />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </MainDiv>
    </BrowserRouter>
  )
}

export default App;
