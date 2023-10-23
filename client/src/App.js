import { useEffect } from 'react';
import './App.css';
import { Nav } from './Nav/Nav';

export function App() {

  const test = async () => {

    await fetch('http://127.0.0.1:8000/').then(res => res.json()).then(data => console.log(data))
  }
  useEffect(() => {

    test()
    
  }, [])
  return (
    <div className="App bg-gray-100">
      <Nav />
    </div>
  );
}

