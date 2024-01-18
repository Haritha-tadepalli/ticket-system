import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import TicketDisplay from './components/ticketDisplay/TicketDisplay'
import AgentCreation from './components/agentCreation/AgentCreation';
import TicketCreation from './components/ticketCreation/TicketCreation';
import NavBar from './components/navBar/NavBar'

function App() {
  return (
    <div className="App">
       <Router>
       <NavBar />
        <Routes>
          <Route path='/'  element= {<Home />} />
          <Route path="/ticket" element={<TicketCreation />} />
          <Route path="/agent" element={<AgentCreation />} />
          <Route path="/display" element={<TicketDisplay />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
