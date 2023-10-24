import './App.css';
import { Nav } from './Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Preferences } from './Pages/Preferences';
import { Home } from './Pages/Home';
import { Calendar } from './Pages/Calendar';
import { BoxScore } from './Pages/BoxScore';

export function App() {

  return (
    <div className="App bg-gray-400 pb-12">
      <Router>
        <Nav />
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/calendar" element = { <Calendar />} />
            <Route path="/preferences" element={ <Preferences />} />
            <Route path="/games/:gameId" element={ <BoxScore />} />
          </Routes>
      </Router>
    </div>
  );
}

