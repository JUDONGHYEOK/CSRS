import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'index.css';
import Splash from 'pages/Splash';
import Main from 'pages/Main';
import Search from 'pages/Search';
import ScrollToTop from 'utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/art/:category" element={<Search />}></Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
