import { useEffect } from 'react';
import './App.css';
import { Nav } from './Nav/Nav';
import { SERVER_ENDPOINTS } from './api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Preferences } from './Pages/Preferences';
import { Home } from './Pages/Home';

export function App() {

  const test = async () => {

    await fetch(SERVER_ENDPOINTS.ROOT).then(res => res.json()).then(data => console.log(data))
  }
  useEffect(() => {

    test()
    
  }, [])
  return (
    <div className="App bg-gray-100">
      <Router>
        <Nav />
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/preferences" element={ <Preferences />} />
          </Routes>
      </Router>
    </div>
  );
}

