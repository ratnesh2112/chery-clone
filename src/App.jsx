import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restorents from './components/Restaurants';
import Filters from './components/Filters';
import { useState } from 'react';

function App() {

  const [filterBy , setfilterBy] = useState("");

  const [data , setData] = useState(Restorents)

  return (
    <div className="App">
      
      <Navbar/>
      <Offers/>
      <Filters/>
      <Restorents/>
    </div>
  );
}

export default App;
