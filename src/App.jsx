import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BankDetails from './pages/BankDetails';
import CallForPapers from './pages/CallForPapers';
import Contact from './pages/Contact';
import Fee from './pages/Fee';
import Tracks from './pages/Tracks';
import KeynoteSpeakers from './pages/KeynoteSpeakers';
import InvitedSpeakers from './pages/InvitedSpeakers';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bank-details" element={<BankDetails />} />
          <Route path="call-for-papers" element={<CallForPapers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="fee" element={<Fee />} />
          <Route path="tracks" element={<Tracks />} />
          <Route path="keynote-speakers" element={<KeynoteSpeakers />} />
          <Route path="invited-speakers" element={<InvitedSpeakers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

