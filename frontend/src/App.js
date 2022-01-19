import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'index.css';
import Splash from 'pages/Splash';
import Main from 'pages/Main';
import Search from 'pages/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/art/:category" element={<Search />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
